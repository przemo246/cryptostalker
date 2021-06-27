import { useEffect, useState } from "react";
import { TopCryptoItem } from './TopCryptoItem';

export const TopCrypto = () => {
    const [topCrypto, setTopCrypto] = useState([]);
    useEffect(() => {
        const getTopCrypto = async() => {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=24h');
            const data = await response.json();
            setTopCrypto(data);
        }
        getTopCrypto();
    },[]);
    return (
        <div className="top-crypto">
        <div className="top-crypto__heading">
  <h2 className="heading-secondary">
    Top cryptocurrencies (by market cap.) 🥇
  </h2>
</div>
<div className="top-crypto-container">
<div className="top-crypto__headings"><h4>#</h4>
  <h4>Coin</h4>
  <h4>Ticker</h4>
  <h4>Price</h4>
  <h4>Market cap.</h4>
  <h4>24h change</h4>
  </div>
  <ul className="top-crypto__list">
    {topCrypto.map((data, i) => <TopCryptoItem key={i} index={i} data={data}/>)}
    </ul>
    </div>
    </div>
    )
};