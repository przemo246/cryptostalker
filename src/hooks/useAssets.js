import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { useUser } from "./useUser";

const calculateTotalHoldingsAndTotalValue = (assets) => {
  return assets.reduce((acc, curr) => {
    const index = acc.findIndex((el) => el.id === curr.id);
    if (index !== -1) {
      acc[index].totalValue += curr.price * curr.holdings;
      acc[index].totalHoldings += curr.holdings;
      acc[index].userData.push(curr);
    } else {
      acc.push({
        id: curr.id,
        totalValue: curr.price * curr.holdings,
        totalHoldings: curr.holdings,
        userData: [curr],
      });
    }
    return acc;
  }, []);
};

const calculateAveragePrice = (assets) => {
  return assets.reduce((acc, curr) => {
    acc.push({
      ...curr,
      avPrice: curr.totalValue / curr.totalHoldings,
    });
    return acc;
  }, []);
};

export const useAssets = () => {
  const [assets, setAssets] = useState([]);
  const [assetIds, setAssetIds] = useState([]);
  const user = useUser();
  useEffect(() => {
    return db
      .collection("assets")
      .doc(user?.uid)
      .collection("allassets")
      .onSnapshot((data) => {
        const dataArr = [];
        data.forEach((el) => dataArr.push(el.data()));
        const calculatedTotalHoldingsAndValue =
          calculateTotalHoldingsAndTotalValue(dataArr);
        const calculatedAveragePrice = calculateAveragePrice(
          calculatedTotalHoldingsAndValue
        );
        const uniqueAssetIds = Array.from(new Set(dataArr.map((el) => el.id)));
        setAssets(calculatedAveragePrice);
        setAssetIds(uniqueAssetIds);
      });
  }, [user?.uid]);
  return [assets, assetIds];
};
