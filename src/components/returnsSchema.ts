export type ReturnsModel = {
  cashOnCashYield: number | null;
  cashflowYield: number | null;
  debtService: number | null;
  netIncome: number | null;
  maintenanceExpense: number | null;
  managementExpense: number | null;
  VacancyExpense: number | null;
  downPayment: number | null;
  capitalRequired: number | null;
  purchasePrice: number | null;
  yearOnePrincipalPaydown: number | null;
};

export const createEmptyReturnsModel = (): ReturnsModel => ({
  cashOnCashYield: null,
  cashflowYield: null,
  debtService: null,
  netIncome: null,
  maintenanceExpense: null,
  managementExpense: null,
  VacancyExpense: null,
  downPayment: null,
  capitalRequired: null,
  purchasePrice: null,
  yearOnePrincipalPaydown: null,
});
