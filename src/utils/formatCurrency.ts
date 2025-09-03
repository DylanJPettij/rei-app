// utils/formatCurrency.ts
const formatCurrency = (amount: number | null): string => {
  if (amount === null) {
    return "";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export default formatCurrency;
