import { useState, useEffect } from "react";
import { useAssets } from "../../hooks/useAssets";
import { useModal } from "../../hooks/useModal";
import { ModalController } from "../modal/ModalController";
import { AssetItem } from "./AssetItem";

const calculateTotalHoldingsAndTotalValue = (assets) => {
  return assets.reduce((acc, curr) => {
    if (acc.findIndex((el) => el.id === curr.id) !== -1) {
      const index = acc.findIndex((el) => el.id === curr.id);
      acc[index].totalValue += curr.price * curr.holdings;
      acc[index].totalHoldings += curr.holdings;
    } else {
      const template = {
        id: curr.id,
        totalHoldings: curr.holdings,
        totalValue: curr.price * curr.holdings,
      };
      acc.push(template);
    }
    return acc;
  }, []);
};

const formatMarketData = (marketData) => {
  return marketData.reduce((acc, curr) => {
    const formattedData = {
      id: curr.id,
      symbol: curr.symbol,
      name: curr.name,
      img: curr.image.thumb,
      currentPrice: curr.market_data.current_price.usd,
      priceChangePerc: curr.market_data.price_change_percentage_24h,
    };
    acc.push(formattedData);
    return acc;
  }, []);
};

const removeDuplicates = (arr, prop) => {
  return Array.from(new Set(arr.map((el) => el[prop])));
};

export const Portfolio = () => {
  const assets = useAssets();
  const [calcAssets, setCalcAssets] = useState([]);
  const [marketData, setMarketData] = useState([]);
  const [assetIDs, setAssetIDs] = useState([]);
  const [balance, setBalance] = useState(0);
  const [change, setChange] = useState(0);
  const [profit, setProfit] = useState(0);
  const [isOpen, toggleIsOpen] = useModal();

  useEffect(() => {
    if (assetIDs.length === 0) {
      return;
    }
    return Promise.all(
      assetIDs.map(async (name) => {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${name}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
        );
        const data = await response.json();
        return data;
      })
    )
      .then((data) => {
        const formattedData = formatMarketData(data);
        setMarketData(formattedData);
      })
      .catch((err) => console.error(err.message));
  }, [assetIDs]);

  useEffect(() => {
    const uniqueAssetNames = removeDuplicates(assets, "id");
    setAssetIDs(uniqueAssetNames);
    const calcTotalAndValue = calculateTotalHoldingsAndTotalValue(assets);
    setCalcAssets(calcTotalAndValue);
  }, [assets]);
  return (
    <>
      <div className="portfolio">
        <div className="portfolio__heading">
          <h2 className="heading-secondary">Portfolio 💰</h2>
        </div>
        <div className="features">
          <div className="features__balance">
            <span id="balance">$ {balance}</span>Total balance
          </div>
          <div className="features__price">
            <span id="price">$ {change}</span>24h portfolio change
          </div>
          <div className="features__profit">
            <span id="profit">$ {profit}</span>Total profit / loss
          </div>
        </div>
        <div className="add-new">
          <button className="add-new__btn" onClick={toggleIsOpen}>
            + Add new
          </button>
        </div>
        <div className="assets">
          <div className="assets__headings">
            <h4>#</h4>
            <h4>Coin</h4>
            <h4>Ticker</h4>
            <h4>Price</h4>
            <h4>Holdings</h4>
            <h4>Value</h4>
            <h4>24h change</h4>
          </div>
          <ul className="assets__list">
            {calcAssets.map((el, i) => {
              const market = marketData.find((data) => data.id === el.id);
              return (
                <AssetItem
                  key={i}
                  data={market}
                  totalHoldings={el.totalHoldings}
                  totalValue={el.totalValue}
                  index={i}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <ModalController open={isOpen} type="add-asset" onClose={toggleIsOpen} />
    </>
  );
};
