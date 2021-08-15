import { useState, useEffect } from "react";
import { useAssets } from "../../hooks/useAssets";
import { useModal } from "../../hooks/useModal";
import { ModalController } from "../modal/ModalController";
import { AssetItem } from "./AssetItem";
import { formatNumber } from "./utils";

const formatMarketData = (marketData) => {
  return marketData.reduce((acc, curr) => {
    const formattedData = {
      id: curr.id,
      symbol: curr.symbol,
      name: curr.name,
      img: curr.image.thumb,
      currentPrice: curr.market_data.current_price.usd,
      priceChangePerc24h: curr.market_data.price_change_percentage_24h,
      priceChange24h: curr.market_data.price_change_24h,
    };
    acc.push(formattedData);
    return acc;
  }, []);
};

export const Portfolio = () => {
  const [assets, assetIds] = useAssets();
  const [assetsAndMarketData, setAssetsAndMarketData] = useState([]);
  const [summary, setSummary] = useState({ balance: 0, change: 0, profit: 0 });
  const [isOpen, toggleIsOpen] = useModal();

  useEffect(() => {
    if (assets.length < 1) {
      setAssetsAndMarketData([]);
      return;
    }
    const getMarketDataAndJoinWithAssets = async () => {
      try {
        const unformattedMarketData = await Promise.all(
          assetIds.map(async (name) => {
            try {
              const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/${name}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
              );
              return await response.json();
            } catch (err) {
              console.error(err.message);
            }
          })
        );
        const formattedMarketData = formatMarketData(unformattedMarketData);
        const assetsAndFormattedMarketData = formattedMarketData.map(
          (marketEl) => {
            const findAsset = assets.find((asset) => asset.id === marketEl.id);
            return {
              ...marketEl,
              ...findAsset,
            };
          }
        );
        setAssetsAndMarketData(assetsAndFormattedMarketData);
      } catch (err) {
        console.error(err.message);
      }
    };
    getMarketDataAndJoinWithAssets();
  }, [assets, assetIds]);

  useEffect(() => {
    if (assets.length < 1) {
      setSummary({ balance: 0, change: 0, profit: 0 });
      return;
    }
    const calcSummary = assetsAndMarketData.reduce(
      (acc, curr) => {
        const marketValue = curr.currentPrice * curr.totalHoldings;
        const buyValue = curr.avPrice * curr.totalHoldings;
        const price24hAgo = curr.currentPrice - curr.priceChange24h;
        const value24hAgo = price24hAgo * curr.totalHoldings;
        acc.balance += curr.totalHoldings * curr.currentPrice;
        acc.change += marketValue - value24hAgo;
        acc.profit += marketValue - buyValue;
        return acc;
      },
      { balance: 0, change: 0, profit: 0 }
    );
    setSummary((prevSummary) => ({
      ...prevSummary,
      balance: formatNumber(calcSummary.balance),
      change: formatNumber(calcSummary.change),
      profit: formatNumber(calcSummary.profit),
    }));
  }, [assetsAndMarketData, assets]);

  return (
    <>
      <div className="portfolio">
        <div className="portfolio__heading">
          <h2 className="heading-secondary">Portfolio 💰</h2>
        </div>
        <div className="features">
          <div className="features__balance">
            <span id="balance">$ {summary.balance}</span>Total balance
          </div>
          <div className="features__price">
            <span id="price">$ {summary.change}</span>24h portfolio change
          </div>
          <div className="features__profit">
            <span id="profit">$ {summary.profit}</span>Total profit / loss
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
            {assetsAndMarketData.map((data, i) => (
              <AssetItem key={data.id} index={i} data={data} />
            ))}
          </ul>
        </div>
      </div>
      <ModalController open={isOpen} type="add-asset" onClose={toggleIsOpen} />
    </>
  );
};
