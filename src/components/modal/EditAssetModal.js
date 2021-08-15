import { useAssets } from "../../hooks/useAssets";
import { useState, useEffect } from "react";
import { formatNumber } from "../portfolio/utils";
import { MdDelete } from "react-icons/md";
import { db } from "../../firebase.config";
import { useUser } from "../../hooks/useUser";

export const EditAssetModal = (props) => {
  const {
    data: { id, img, name, symbol },
  } = props;
  const [assets] = useAssets();
  const [userAssets, setUserAssets] = useState([]);
  const [UID, setUID] = useState(null);
  const user = useUser();
  useEffect(() => {
    const userAssetsArr = assets.find((asset) => asset.id === id);
    if (userAssetsArr) {
      setUserAssets(userAssetsArr.userData);
    }
  }, [assets, id]);
  useEffect(() => {
    setUID(user?.uid);
  }, [user?.uid]);
  const handleRemoveAsset = async (e) => {
    const id = Number(e.target.id);
    try {
      const allAssets = db
        .collection("assets")
        .doc(UID)
        .collection("allassets");
      const query = await allAssets.where("timeStamp", "==", id).get();
      query.forEach(async (docRef) => await allAssets.doc(docRef.id).delete());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="modal__heading">Edit assets</div>
      <div className="assets" style={{ width: "100%", alignSelf: "baseline" }}>
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
                <div
                  id={item.timeStamp}
                  onClick={handleRemoveAsset}
                  style={{ cursor: "pointer" }}
                >
                  <MdDelete
                    style={{
                      fontSize: "1.8rem",
                      color: "#EE2E31",
                    }}
                    title="Remove"
                    pointerEvents="none"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
