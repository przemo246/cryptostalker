import { useAssets } from "../../hooks/useAssets";
import { useState, useEffect } from "react";
import { formatNumber } from "../portfolio/utils";

export const EditAssetModal = (props) => {
  const {
    data: { id, img, name, symbol },
  } = props;
  const [assets] = useAssets();
  const [userAssets, setUserAssets] = useState([]);
  useEffect(() => {
    console.log("use Effect");
    const userAssetsArr = assets.find((asset) => asset.id === id);
    if (userAssetsArr) {
      setUserAssets(userAssetsArr.userData);
    }
  }, [assets, id]);
  return (
    <>
      <div className="modal__heading">Edit assets</div>
      <div className="assets" style={{ width: "100%" }}>
        <div
          className="assets__headings"
          style={{ gridTemplateColumns: "repeat(5,1fr) 20px" }}
        >
          <h4>#</h4>
          <h4>Coin</h4>
          <h4>Ticker</h4>
          <h4>Price</h4>
          <h4>Holdings</h4>
        </div>
        <ul>
          {userAssets.map((item, i) => {
            return (
              <li
                key={item.timeStamp}
                className="assets__item"
                style={{ gridTemplateColumns: "repeat(5,1fr) 20px" }}
              >
                <div>{i + 1}</div>
                <div>
                  <img src={img} alt="" />
                  {name}
                </div>
                <div>{symbol.toUpperCase()}</div>
                <div>{formatNumber(item.price)} USD</div>
                <div>
                  {item.holdings} {symbol.toUpperCase()}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
