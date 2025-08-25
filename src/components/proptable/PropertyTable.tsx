import { columns, type Property } from "@/components/proptable/Columns"
import { DataTable } from "@/components/proptable/dataTable"
import { Button } from "../ui/button"
function getData(): Property[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      purchasePrice: 100000,
      downPayment: 20000,
      email: "me@gmail.com",
      interestRate: .035,
      cashOnCash: 0
    },
    {
        id: "7283243",
        purchasePrice: 400000,
        downPayment: 100000,
        email: "jamisonpettij@gmail.com",
        interestRate: .07375,
        cashOnCash: 0
      },
      {
        id: "35123534",
        purchasePrice: 250000,
        downPayment: 50000,
        email: "jamisonpettij@gmail.com",
        interestRate: 0.065,
        cashOnCash: 0
      },
    
    // ...
  ]
}

export default function DemoPage() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
        <div className="flex items-center justify-end py-2">
        <Button variant="default" className="bg-green-600">Add Property</Button>
        </div>
        
      <DataTable columns={columns} data={data} />
    </div>
  )
}