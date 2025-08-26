import { columns, type Property } from "@/components/proptable/Columns"
import { DataTable } from "@/components/proptable/dataTable"
import { Button } from "../ui/button"
import { useState } from "react"
import { Card } from "../ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
function getData(): Property[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      purchasePrice: 100000,
      downPayment: 20000,
      interestRate: .035
      
    },
    {
        id: "7283243",
        purchasePrice: 400000,
        downPayment: 100000,
        interestRate: .07375
        
      },
      {
        id: "35123534",
        purchasePrice: 250000,
        downPayment: 50000,
        interestRate: 0.065
      },
    
    // ...
  ]
}

export default function PropertyTable() {
  const data = getData();
  const [downPayment, setDownPayment] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  const handleSubmit = (event: Property) => {

  const submission = {
    id:"44352",
    purchasePrice: purchasePrice,
    downPayment: downPayment,
    interestRate: interestRate
  }
  data.push(submission);
  console.log(data);

  //this is where this data will be passed to the API to be added to the database "Stub database for now"
};

  return (
    <>
    <div className="container mx-auto py-10">
        <div className="flex items-center justify-end py-2">
        <Dialog>
        <form>
        <DialogTrigger asChild>
          <Button className="bg-green-600 font-bold" variant="outline">Add Property</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Property</DialogTitle>
            <DialogDescription>
              Click save to add your property when you're finished.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="purchasePrice-1">Purchase Price</Label>
              <Input id="purchasePrice-1" name="purchasePrice" type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)}/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="downpayment">Downpayment %</Label>
              <Input id="downpayment" name="downpayment" type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="interestRate">Interest Rate %</Label>
              <Input id="interestRate" name="interestRate" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild> 
              <Button className="bg-green-600 gray-500" onClick={handleSubmit} type="submit">Add Property</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>  
        
        </div>
      <DataTable columns={columns} data={data} />
    </div>
    </>
  )
}