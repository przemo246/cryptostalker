import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { useUser } from "./useUser";

export const useAssets = () => {
  const [assets, setAssets] = useState([]);
  const user = useUser();
  useEffect(() => {
    db.collection("assets")
      .doc(user?.uid)
      .collection("allassets")
      .onSnapshot((data) => {
        const dataArr = [];
        data.forEach((el) => dataArr.push(el.data()));
        setAssets(dataArr);
      });
  }, [user?.uid]);
  return assets;
};
