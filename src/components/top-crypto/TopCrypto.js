import { useEffect, useState } from "react";
import { TopCryptoItem } from "./TopCryptoItem";
import Loader from "react-loader-spinner";

export const TopCrypto = () => {
  const [topCrypto, setTopCrypto] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getTopCrypto = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=24h"
        );
        const data = await response.json();
        setLoader(false);
        setTopCrypto(data);
      } catch (err) {
        console.log(err);
      }
    };
    getTopCrypto();
  }, []);
  return (
    <>
      {loader ? (
        <Loader
          type="TailSpin"
          color="#333"
          height={70}
          width={70}
          visible={loader}
        />
      ) : (
        <div className="top-crypto">
          <div className="top-crypto__heading">
            <h2 className="heading-secondary">
              Top cryptocurrencies (by market cap.) 🥇
            </h2>
          </div>
          <div className="top-crypto__container">
            <div className="top-crypto__headings">
              <h4>#</h4>
              <h4>Coin</h4>
              <h4>Ticker</h4>
              <h4>Price</h4>
              <h4>Market cap.</h4>
              <h4>24h change</h4>
            </div>
            <ul className="top-crypto__list">
              {topCrypto.map((data, i) => (
                <TopCryptoItem key={i} index={i} data={data} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
