import MainLayout from "@/layouts/MainLayout";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { type renoSchema } from "./schema/renoCalcSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";

function Hero() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      console.log([key, value]);
    }
  };

  return (
    <>
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
                      <Label htmlFor="payoffTerm">Mortgage Years</Label>
                    </div>
                    <Input
                      id="payoffTerm"
                      name="payoffTerm"
                      className="bg-white border-2 border-black rounded-md"
                      type="number"
                      required
                    />
                  </div>

                  {/* Payoff Term */}
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
                      <Label htmlFor="additionalIncome">
                        Additional Income
                      </Label>
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
    </>
  );
}

export default Hero;
