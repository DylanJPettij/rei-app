import { useState } from "react";
import RenovationCalculatorForm from "./RenovationCalculatorForm";
import RenovationCalcResults from "./RenovationCalcResults";
import MyProperties from "@/pages/MyProperties";
import { type ReturnsModel } from "./returnsSchema";

function Hero() {
  const [returns, SetReturns] = useState<ReturnsModel>({} as ReturnsModel);

  const generateReturns = (e: ReturnsModel) => {
    SetReturns({ ...e });
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
            <MyProperties />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
