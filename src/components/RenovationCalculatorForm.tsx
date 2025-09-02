import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { type ReturnsModel } from "./returnsSchema";
import {
  Card,
  CardHeader,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { type renoSchema } from "./schema/renoCalcSchema";
import { postCalculateROI } from "./BakendIntegration/calculations";
import { useState } from "react";

const renoKeys: (keyof renoSchema)[] = [
  "purchasePrice",
  "downPayment",
  "renovationCosts",
  "closingCosts",
  "loanTerm",
  "interestRate",
  "totalRents",
  "additionalIncome",
  "vacancyFactor",
  "maintenanceFactor",
  "managementFactor",
  "monthlyUtilities",
  "additionalExpensesAnnual",
  "taxes",
  "insuranceCosts",
];

const createEmptyReno = (value: number | null = null): renoSchema => {
  return renoKeys.reduce((acc, key) => {
    acc[key] = value;
    return acc;
  }, {} as renoSchema);
};
//need to revisit this to remove type any
const RenovationCalculatorForm = ({ onSendData }: any) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //get the form data from the envent
    const formData = new FormData(e.currentTarget);

    //create empty renovation numbers object
    const renovationNumbers = createEmptyReno();

    //loop thorugh each key value pair and assign
    formData.forEach((value, key) => {
      if (key in renovationNumbers) {
        const typedKey = key as keyof renoSchema;
        renovationNumbers[typedKey] = value ? Number(value) : null;
      }
    });

    const calc = await postCalculateROI(renovationNumbers);
    onSendData(calc);
  };

  return (
    <div className="flex justify-center gap-6 items-center min-h-screen bg-gray-800">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Enter your property information below!</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <h1 className="font-bold">Loan Information:</h1>
              <div className="grid grid-cols-2 gap-6 bg-gray-200 py-3 p-3">
                {/* Purchase Price */}
                <div className="grid gap-2">
                  <Label htmlFor="purchasePrice">Purchase Price</Label>
                  <Input
                    className="bg-white border-2 border-black rounded-md"
                    id="purchasePrice"
                    name="purchasePrice"
                    type="number"
                    required
                  />
                </div>

                {/* Down Payment */}
                <div className="grid gap-2">
                  <Label htmlFor="downPayment">Down Payment %</Label>
                  <Input
                    id="downPayment"
                    name="downPayment"
                    min={1}
                    max={100}
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>

                {/* Renovation Costs */}
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="renovationCosts">Renovation Costs</Label>
                  </div>
                  <Input
                    id="renovationCosts"
                    name="renovationCosts"
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>

                {/* Closing Costs Costs */}
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="closingCosts">Closing Costs %</Label>
                  </div>
                  <Input
                    id="closingCosts"
                    name="closingCosts"
                    min={1}
                    max={100}
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>

                {/* Payoff Term */}
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="loanTerm">Mortgage Years</Label>
                  </div>
                  <Input
                    id="loanTerm"
                    name="loanTerm"
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>

                {/* Interest Rate */}
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="interestRate">Interest Rate %</Label>
                  </div>
                  <Input
                    id="interestRate"
                    name="interestRate"
                    min={1}
                    max={100}
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>
              </div>

              <h1 className="font-bold">Income:</h1>

              <div className="grid grid-cols-2 gap-6 bg-gray-200 py-3 p-3">
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="totalRents">Total Rents</Label>
                  </div>
                  <Input
                    id="totalRents"
                    name="totalRents"
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="additionalIncome">Additional Income</Label>
                  </div>
                  <Input
                    id="additionalIncome"
                    name="additionalIncome"
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 bg-gray-200 py-3 p-3">
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="vacancyFactor">Vacancy Factor %</Label>
                  </div>
                  <Input
                    id="vacancyFactor"
                    name="vacancyFactor"
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="maintenanceFactor">Maintenance %</Label>
                  </div>
                  <Input
                    id="maintenanceFactor"
                    name="maintenanceFactor"
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="ManagementFactor">Management %</Label>
                  </div>
                  <Input
                    id="managementFactor"
                    name="managementFactor"
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 bg-gray-200 py-3 p-3">
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="monthlyUtilities">
                      Monthly Utility Expense
                    </Label>
                  </div>
                  <Input
                    id="monthlyUtilities"
                    name="monthlyUtilities"
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="additionalExpensesAnnual">
                      Additional Annual Expenses
                    </Label>
                  </div>
                  <Input
                    id="additionalExpensesAnnual"
                    name="additionalExpensesAnnual"
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="taxes">Property Taxes</Label>
                  </div>
                  <Input
                    id="taxes"
                    name="taxes"
                    className="bg-white border-2 border-black rounded-md"
                    type="number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="insuranceCosts">Insurance Costs</Label>
                  </div>
                  <Input
                    id="insuranceCosts"
                    name="insuranceCosts"
                    className="bg-white border-2 border-black rounded-md"
                    type="insuranceCosts"
                    required
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="bg-green-700 w-full">
              Calculate Return
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default RenovationCalculatorForm;
