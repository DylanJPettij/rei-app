import { columns, type Property } from "@/components/proptable/Columns";
import { DataTable } from "@/components/proptable/dataTable";
import { Button } from "../ui/button";
import { useState } from "react";
import { Card } from "../ui/card";

function getData(): Property[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      purchasePrice: 100000,
      downPayment: 20000,
      interestRate: 0.035,
    },
    {
      id: "7283243",
      purchasePrice: 400000,
      downPayment: 100000,
      interestRate: 0.07375,
    },
    {
      id: "35123534",
      purchasePrice: 250000,
      downPayment: 50000,
      interestRate: 0.065,
    },

    // ...
  ];
}

export default function PropertyTable() {
  const data = getData();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
