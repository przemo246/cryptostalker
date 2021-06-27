import { useEffect, useState } from "react";

export const TopCrypto = () => {
    const [topCrypto, setTopCrypto] = useState([]);
    useEffect(() => {
        const getTopCrypto = async() => {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=24h');
            const JSON = await response.json();
            console.log(JSON);
        }
        getTopCrypto();
    },[]);
    return (
        <p>Top Crypto</p>
    )
};