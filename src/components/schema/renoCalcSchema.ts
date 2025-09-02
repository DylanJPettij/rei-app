export type renoSchema = {
  purchasePrice: number | null;
  downPayment: number | null;
  renovationCosts: number | null;
  closingCosts: number | null;
  loanTerm: number | null;
  interestRate: number | null;
  totalRents: number | null;
  additionalIncome: number | null;
  vacancyFactor: number | null;
  maintenanceFactor: number | null;
  managementFactor: number | null;
  monthlyUtilities: number | null;
  additionalExpensesAnnual: number | null;
  taxes: number | null;
  insuranceCosts: number | null;
};
export const initialReno: renoSchema = {
  purchasePrice: null,
  downPayment: null,
  renovationCosts: null,
  closingCosts: null,
  loanTerm: null,
  interestRate: null,
  totalRents: null,
  additionalIncome: null,
  vacancyFactor: null,
  maintenanceFactor: null,
  managementFactor: null,
  monthlyUtilities: null,
  additionalExpensesAnnual: null,
  taxes: null,
  insuranceCosts: null,
};
