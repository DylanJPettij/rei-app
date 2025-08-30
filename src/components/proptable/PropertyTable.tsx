import { columns, type Property } from "@/components/proptable/Columns";
import { DataTable } from "@/components/proptable/dataTable";
import { Button } from "../ui/button";
import { useState } from "react";
import { Card } from "../ui/card";

const getData = (): Property[] => {
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
};

const PropertyTable = () => {
  const data = getData();
  const [downPayment, setDownPayment] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  const handleSubmit = (event: Property) => {
    const submission = {
      id: "44352",
      purchasePrice: purchasePrice,
      downPayment: downPayment,
      interestRate: interestRate,
    };
    data.push(submission);
    console.log(data);

    //this is where this data will be passed to the API to be added to the database "Stub database for now"
  };

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-end py-2"></div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};
