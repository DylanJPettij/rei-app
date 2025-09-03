import axios from "axios";
import type { rateModel } from "../schema/rateModel";
const mortgageRates = axios.create({
  baseURL: "https://api.api-ninjas.com",
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "o8WmrffS9dppthIOmNO4dA==9dN0wDqrhRU4MGfM",
  },
});

export const getRates = async (): Promise<rateModel> => {
  const res = await mortgageRates.get<any>(`/v1/mortgagerate`);
  return res?.data[0];
};

export default mortgageRates;
