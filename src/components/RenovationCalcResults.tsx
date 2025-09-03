import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import formatCurrency from "../utils/formatCurrency";
import formatPercentage from "../utils/formatPercentage";
import type { ReturnsModel } from "./returnsSchema";
import clsx from "clsx";
//{cashOnCashYield, cashflowYield, debtService, netIncome, maintenanceExpense, managementExpense, vacancyExpense}

//need to remove the type any
const RenovationCalcResults = ({ props }: { props: ReturnsModel }) => {
  const getCashOnCash = (cashOnCashYield: number | null) => {
    if (cashOnCashYield === null) return 0;

    cashOnCashYield = cashOnCashYield / 100;
    return cashOnCashYield;
  };

  const getCapRate = (
    netIncome: number | null,
    purchasePrice: number | null
  ) => {
    if (netIncome === null) return 0;
    if (purchasePrice === null) return 0;
    const capRate = netIncome / purchasePrice;
    return capRate;
  };

  const getNumberColor = (value: number | null): string => {
    if (value === null) return "font-bold text-black";
    if (value >= 0) return "font-bold text-green-600";
    if (value < 0) return "font-bold text-red-600";
    return "font-bold text-black";
  };

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader className="font-bold text-xl">
          Investment Returns
        </CardHeader>
        <CardContent>
          {props.purchasePrice === undefined ? (
            <div className="w-80 h-80 flex justify-center items-center">
              <div className="p-4 bg-red-400 rounded shadow">
                No data start a calculation
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6 w-80 h-80">
              <div className="grid grid-cols-2 gap-12 bg-gray-200 py-4 p-4">
                <div className="grid gap-2">
                  <Label htmlFor="purchasePrice">Purchase Price</Label>
                  <div className="font-bold">
                    {formatCurrency(props.purchasePrice)}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="purchasePrice">Capital Required</Label>
                  <div className="font-bold">
                    {formatCurrency(props.capitalRequired)}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="purchasePrice">NOI</Label>
                  <div className="font-bold">
                    {formatCurrency(props.netIncome)}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="purchasePrice">Debt Service</Label>
                  <div className="font-bold">
                    {formatCurrency(props.debtService)}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="purchasePrice">COC Return</Label>
                  <div className={getNumberColor(props.cashOnCashYield)}>
                    {formatPercentage(getCashOnCash(props.cashOnCashYield))}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="purchasePrice">Cap Rate</Label>
                  <div
                    className={getNumberColor(
                      getCapRate(props.netIncome, props.purchasePrice)
                    )}
                  >
                    {formatPercentage(
                      getCapRate(props.netIncome, props.purchasePrice)
                    )}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="purchasePrice">Cashflow</Label>
                  <div className={getNumberColor(props.cashOnCashYield)}>
                    {formatCurrency(props.cashflowYield)}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="purchasePrice">Y1 Loan Paydown</Label>
                  <div className="font-bold">
                    {formatCurrency(props.yearOnePrincipalPaydown)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default RenovationCalcResults;
