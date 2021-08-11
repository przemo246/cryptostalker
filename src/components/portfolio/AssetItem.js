import { formatNumber } from "./utils";

export const AssetItem = (props) => {
  const {
    data: {
      id,
      name,
      symbol,
      img,
      currentPrice,
      priceChangePerc24h,
      totalHoldings,
    },
    index,
  } = props;
  return (
    <li className="assets__item" id={id}>
      <div>{index + 1}</div>
      <div>
        <img src={img} alt="" />
        {name}
      </div>
      <div>{symbol.toUpperCase()}</div>
      <div>{formatNumber(currentPrice)} USD</div>
      <div>
        {totalHoldings} {symbol.toUpperCase()}
      </div>
      <div>{formatNumber(currentPrice * totalHoldings)} USD</div>
      <div
        style={
          priceChangePerc24h >= 0 ? { color: "#00AF54" } : { color: "#EE2E31" }
        }
      >
        {priceChangePerc24h.toFixed(2)}%
      </div>
    </li>
  );
};
