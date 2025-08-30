import apiClient from "./apiIntegration";

export const getProperty = async (id: number): Promise<any> => {
  const res = await apiClient.get<any>(`/property?id=${id}`);
  console.log(res.data);
  return res.data;
};
