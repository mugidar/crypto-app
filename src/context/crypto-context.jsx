import { createContext, useEffect, useState } from "react";
import { fetchFakeAssets, fetchFakeCrypto } from "../api";
import {getPercentageDifference} from "../utils"
export const CryptoContext = createContext({
  assets: [],
  crypto: [],
  isLoading: false,
});

const CryptoContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [assets, setAssets] = useState([]);
  const [crypto, setCrypto] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { result } = await fetchFakeCrypto();
      const assets = await fetchFakeAssets();
      setAssets(
        assets.map((asset) => {
          const coin = result.find((c) => c.id === asset.id);
          return {
            ...asset,
            grow: asset.price < coin.price,
            growPercent: getPercentageDifference(asset.price, coin.price),
            totalAmount: asset.amount * coin.price,
            totalProfit: asset.amount * coin.price - asset.amount * asset.price,
          };
        })
      );
      setCrypto(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return <CryptoContext.Provider value={{assets, crypto, isLoading}}>{children}</CryptoContext.Provider>;
};

export default CryptoContextProvider