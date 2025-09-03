import { type rateModel } from "@/components/schema/rateModel";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import formatPercentage from "@/utils/formatPercentage";
import { useState } from "react";
import { getRates } from "@/components/BakendIntegration/mortgageRates";
import { Button } from "@/components/ui/button";
const MyProperties = () => {
  const [mortgageData, SetMortgageData] = useState<rateModel>({} as rateModel);

  const handleSelect = async () => {
    const test = await getRates();
    SetMortgageData(test);
  };

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader className="justify-center font-bold">
          Mortgage Rates
        </CardHeader>
        <CardContent className="justify-center items-center">
          <div className="grid grid-cols-2 gap-2">
            <Card className="items-center bg-white p-2 shadow rounded-xl font-bold">
              15 Year
              <div>
                {mortgageData.data === undefined
                  ? "#.##%"
                  : formatPercentage(mortgageData.data.frm_15 / 100)}
              </div>
            </Card>
            <Card className="items-center bg-white p-2 shadow rounded-xl font-bold">
              30 Year
              <div>
                {mortgageData?.data === undefined
                  ? "#.##%"
                  : formatPercentage(mortgageData.data.frm_30 / 100)}
              </div>
            </Card>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full items-center justify-center">
            <Button onClick={handleSelect} className="w-full">
              Get Mortgage Rates
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default MyProperties;
