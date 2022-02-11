import { useEffect, useState } from "react";

export const useGetAssetIds = () => {
  const [assetIds, setAssetIds] = useState([]);

  useEffect(() => {
    const getAssetIds = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/");
        const data = await response.json();
        setAssetIds(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAssetIds();
  }, []);

  return assetIds;
};
