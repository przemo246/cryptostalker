export const AssetItem = (props) => {
  const {
    data: { id, name, symbol, img, currentPrice, priceChangePerc },
    index,
    totalHoldings,
    totalValue,
  } = props;
  return (
    <li className="assets__item" id={id}>
      <div>{index + 1}</div>
      <div>
        <img src={img} alt="" />
        {name}
      </div>
      <div>{symbol.toUpperCase()}</div>
      <div>{currentPrice} USD</div>
      <div>
        {totalHoldings} {symbol.toUpperCase()}
      </div>
      <div>{currentPrice * totalHoldings} USD</div>
      <div
        style={
          priceChangePerc >= 0 ? { color: "#00AF54" } : { color: "#EE2E31" }
        }
      >
        {priceChangePerc.toFixed(2)}%
      </div>
    </li>
  );
};
