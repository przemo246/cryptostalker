import { useAssets } from "../../hooks/useAssets";
import { useState, useEffect } from "react";

export const EditAssetModal = ({ id }) => {
  const assets = useAssets();
  const [userAssets, setUserAssets] = useState([]);
  useEffect(() => {
    const userAssetsObj = assets.find((asset) => asset.id === id);
    if (userAssetsObj) {
      setUserAssets(userAssetsObj);
    }
  }, [assets, id]);
  return (
    <>
      <div className="modal__heading">Edit assets</div>
      <div className="assets">
        <ul>
          <li></li>
        </ul>
      </div>
    </>
  );
};
