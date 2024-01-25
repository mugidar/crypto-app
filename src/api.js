import { cryptoData, cryptoAssets } from "./data";
const resolveTime = 1
export function fetchFakeCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, resolveTime);
  });
}
export function fetchFakeAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, resolveTime);
  });
}
