import { Label } from "@radix-ui/react-label";
import type { ReturnsModel } from "./returnsSchema";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import formatCurrency from "../utils/formatCurrency";
import formatPercentage from "../utils/formatPercentage";
//{cashOnCashYield, cashflowYield, debtService, netIncome, maintenanceExpense, managementExpense, vacancyExpense}

//need to remove the type any
const RenovationCalcResults = ({ props, previousPage }: any) => {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <Button className="w-1/4" onClick={previousPage}>
            Back
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6 bg-gray-200 py-3 p-3">
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
                <Label htmlFor="purchasePrice">Net Opperating Income</Label>
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
                <Label htmlFor="purchasePrice">Cash-On-Cash Yield</Label>
                <div className="font-bold">
                  {formatPercentage(props.cashOnCashYield / 100)}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="purchasePrice">Cap Rate</Label>
                <div className="font-bold">
                  {formatPercentage(props.netIncome / props.purchasePrice)}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="purchasePrice">Cashflow</Label>
                <div className="font-bold">
                  {formatCurrency(props.cashflowYield)}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="purchasePrice">Year 1 Principal Paydown</Label>
                <div className="font-bold">{props.yearOnePrincipalPaydown}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default RenovationCalcResults;
