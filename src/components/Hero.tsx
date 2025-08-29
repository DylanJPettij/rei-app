import MainLayout from "@/layouts/MainLayout";
import { Button } from "./ui/button"
import { Card,
    CardHeader,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle
 } from "./ui/card";
 import { Label } from "./ui/label";
 import { Input } from "./ui/input";
import { useState } from "react";
import { type renoSchema } from "./schema/renoCalcSchema";
import { useForm } from "react-hook-form"
import { z } from "zod"


const Hero = () =>{
const { handleSubmit } = useForm<renoSchema>()

  const onSubmit = (data: renoSchema) => {
    console.log("Form data:", data) // ✅ strongly typed
  }
    
    return (
        <>
        
        <div className="flex justify-center gap-6 items-center min-h-screen bg-gray-200">
      
        <Card className="w-full max-w-sm">
            <CardHeader>
            <CardTitle>Enter your property information below!</CardTitle>
        </CardHeader>
        <CardContent>
            <form>
            <div className="flex flex-col gap-6">
                <h1 className="font-bold">Loan Information:</h1>            
            <div className="grid grid-cols-2 gap-6 bg-gray-200 py-3 p-3">
                    {/* Purchase Price */}
                    <div className="grid gap-2">
                        <Label htmlFor="purchasePrice">Purchase Price</Label>
                        <Input
                        className="bg-white border-2 border-black rounded-md"
                        
                        id="purchasePrice"
                        type="number"
                        
                        required
                        />
                    </div>

                    {/* Down Payment */}
                    <div className="grid gap-2">
                        <Label htmlFor="downPayment">Down Payment %</Label>
                        <Input id="downPayment" 
                        min={1}
                        max={100}
                        className="bg-white border-2 border-black rounded-md"
                        type="number" required />
                    </div>
                

                    {/* Renovation Costs */}
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="renovationCosts">Renovation Costs</Label>
                
                    </div>
                    <Input id="renovationCosts" 
                    className="bg-white border-2 border-black rounded-md"
                    type="number" required />
                    </div>

                    {/* Closing Costs Costs */}
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="closingCosts">Closing Costs %</Label>
                
                    </div>
                    <Input id="closingCosts" 
                    min={1}
                    max={100}
                    className="bg-white border-2 border-black rounded-md"
                    type="number" required />
                    </div>
                    
                    {/* Payoff Term */}
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="payoffTerm">Mortgage Years</Label>
                
                    </div>
                    <Input id="payoffTerm" 
                    className="bg-white border-2 border-black rounded-md"
                    type="number" required />
                    </div>

                    {/* Payoff Term */}
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="interestRate">Interest Rate %</Label>
                    </div>
                    <Input id="interestRate" 
                    min={1}
                    max={100}
                    className="bg-white border-2 border-black rounded-md"
                    type="number" required />
                    </div>
                </div>


                <h1 className="font-bold">Income:</h1>
                
                <div className="grid grid-cols-2 gap-6 bg-gray-200 py-3 p-3">
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="totalRents">Total Rents</Label>
                    </div>
                    <Input id="totalRents" 
                    className="bg-white border-2 border-black rounded-md"
                    type="number" required />
                    </div>
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="additionalIncome">Additional Income</Label>
                    </div>
                    <Input id="additionalIncome" 
                    className="bg-white border-2 border-black rounded-md"
                    type="number" required />
                    </div>
                </div>


                <div className="grid grid-cols-3 gap-6 bg-gray-200 py-3 p-3">
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="vacancyFactor">Vacancy Factor %</Label>
                    </div>
                    <Input id="vacancyFactor" 
                    className="bg-white border-2 border-black rounded-md"
                    type="number" defaultValue={5} required />
                    </div>
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="maintenanceFactor">Maintenance %</Label>
                    </div>
                    <Input id="maintenanceFactor" defaultValue={10} 
                    className="bg-white border-2 border-black rounded-md"
                    type="number" required />
                    </div>
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="ManagementFactor">Management %</Label>
                    </div>
                    <Input id="managementFactor" 
                    className="bg-white border-2 border-black rounded-md"
                    type="number" defaultValue={10} required />
                    </div>
                </div>


                <div className="grid grid-cols-3 gap-6 bg-gray-200 py-3 p-3">
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="monthlyUtilities">Monthly Utility Expense</Label>
                    </div>
                    <Input id="monthlyUtilities" 
                    className="bg-white border-2 border-black rounded-md"
                    type="number" required />
                    </div>

                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="additionalExpensesAnnual">Additional Annual Expenses</Label>
                    </div>
                    <Input id="additionalExpensesAnnual" 
                    className="bg-white border-2 border-black rounded-md"
                    type="number" required />
                    </div>
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="taxes">Property Taxes</Label>
                    </div>
                    <Input id="taxes" 
                    className="bg-white border-2 border-black rounded-md"
                    type="number" required />
                    </div>
                </div>
            </div>
            </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
            <Button type="submit" className="bg-green-700 w-full">
            Calculate Return
            </Button>
        </CardFooter>
        </Card>
    </div>
        
        
        </>
    );
};

export default Hero;