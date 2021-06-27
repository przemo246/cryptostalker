export const TopCryptoItem = (props) => {
    const {data: { name, image, symbol, current_price, market_cap, price_change_percentage_24h }, index: {i}} = props;
    const marketCap = (market_cap / 1000000000).toFixed(0);
    const priceChange = price_change_percentage_24h.toFixed(2);
    return (
    <li className="top-crypto__item">
    <div>{props.index + 1}</div>
    <div><img src={image}/>
    {name}</div>
    <div>{symbol.toUpperCase()}</div>
    <div>{current_price} USD</div>
    <div>{marketCap} B USD</div>
    <div style={priceChange >= 0 ? {color: '#00AF54'} : {color: '#EE2E31'}}>{priceChange}%</div>
    </li>
    )
};