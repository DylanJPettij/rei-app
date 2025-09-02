import { type ReturnsModel } from "./../returnsSchema";
import { useState } from "react";
import type { renoSchema } from "../schema/renoCalcSchema";
import apiClient from "./apiIntegration";

export const getProperty = async (id: number): Promise<number> => {
  const res = await apiClient.get<any>(`/property?id=${id}`);
  console.log(res.data);
  return res.data;
};

export const postCalculateROI = async (
  e: renoSchema
): Promise<ReturnsModel | null> => {
  const res = await apiClient.post<any>("/property/cashflow", e);

  return res.data;
};
