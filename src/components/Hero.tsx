import { useState } from "react";
import RenovationCalculatorForm from "./RenovationCalculatorForm";
import { createEmptyReturnsModel, type ReturnsModel } from "./returnsSchema";
import RenovationCalcResults from "./RenovationCalcResults";
import MyProperties from "@/pages/MyProperties";
import { type rateModel } from "./schema/rateModel";
import { getRates } from "@/components/BakendIntegration/mortgageRates";

function Hero() {
  const [returns, SetReturns] = useState<ReturnsModel>({} as ReturnsModel);

  const generateReturns = (e: ReturnsModel) => {
    SetReturns({ ...e });
  };
  const [mortgageData, SetMortgageData] = useState<rateModel>({} as rateModel);

  const handleSelect = async () => {
    const test = await getRates();
    SetMortgageData(test);
  };
  //handleSelect();
  const exampleRate: rateModel = {
    week: "2025-08-25",
    data: {
      frm_15: 6.15, // 15-year fixed mortgage rate
      frm_30: 6.85, // 30-year fixed mortgage rate
      week: "2025-08-25",
    },
  };

  return (
    <>
      <div className="flex justify-center gap-6 items-center min-h-screen bg-gray-800">
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col items-start">
            <RenovationCalculatorForm onSendData={generateReturns} />
          </div>

          <div className="grid space-y-6 ">
            <RenovationCalcResults props={returns} />
            <MyProperties props={exampleRate} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
