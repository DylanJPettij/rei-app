// utils/formatCurrency.ts
const formatPercentage = (amount: number | null): string => {
  if (amount === undefined) return "";
  if (amount === null) {
    return "";
  }
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export default formatPercentage;
