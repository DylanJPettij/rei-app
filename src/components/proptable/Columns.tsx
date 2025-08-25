import type { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Property = {
  id: string
  purchasePrice: number
  downPayment: number
  email: string
  interestRate: number
  cashOnCash: number
  
}


export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "purchasePrice",
    header: () => <div className="text-center">Purchase Price</div>,
    cell: ({ row }) => {
      const purchasePrice = parseFloat(row.getValue("purchasePrice"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(purchasePrice)
 
      return <div className="text-center font-medium">{formatted}</div>
  },
},
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "downPayment",
    header: () => <div className="text-center">Down Payment</div>,
    cell: ({ row }) => {
      const downPayment = parseFloat(row.getValue("downPayment"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(downPayment)
 
      return <div className="text-center font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "interestRate",
    header: () => <div className="text-center">Interest Rate</div>,
    cell: ({ row }) => {
      const interestRate = parseFloat(row.getValue("interestRate"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits:2
      }).format(interestRate)
 
      return <div className="text-center font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const property = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(property.id)}
            >
              Copy property ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigator}>Edit property</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]