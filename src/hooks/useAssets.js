import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { useUser } from "./useUser";

const calculateTotalHoldingsAndTotalValue = (assets) => {
  return assets.reduce((acc, curr) => {
    if (acc.findIndex((el) => el.id === curr.id) !== -1) {
      const index = acc.findIndex((el) => el.id === curr.id);
      acc[index].totalValue += curr.price * curr.holdings;
      acc[index].totalHoldings += curr.holdings;
    } else {
      const template = {
        id: curr.id,
        totalHoldings: curr.holdings,
        totalValue: curr.price * curr.holdings,
      };
      acc.push(template);
    }
    return acc;
  }, []);
};

export const useAssets = () => {
  const [assets, setAssets] = useState([]);
  const [assetIds, setAssetIds] = useState([]);
  const user = useUser();
  useEffect(() => {
    db.collection("assets")
      .doc(user?.uid)
      .collection("allassets")
      .onSnapshot((data) => {
        const dataArr = [];
        data.forEach((el) => dataArr.push(el.data()));
        const calculatedAssets = calculateTotalHoldingsAndTotalValue(dataArr);
        const uniqueAssetIds = Array.from(new Set(dataArr.map((el) => el.id)));
        setAssets(calculatedAssets);
        setAssetIds(uniqueAssetIds);
      });
  }, [user?.uid]);
  return [assets, assetIds];
};
