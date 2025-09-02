import { useState } from "react";
import RenovationCalculatorForm from "./renovationCalculatorForm";
import { createEmptyReturnsModel, type ReturnsModel } from "./returnsSchema";
import RenovationCalcResults from "./RenovationCalcResults";

function Hero() {
  const [returns, SetReturns] = useState<ReturnsModel | null>();
  const [goBack, SetGoBack] = useState(false);
  const generateReturns = (e: ReturnsModel) => {
    SetReturns({ ...e });
    console.log(e);
  };
  const handleReturn = (e: any) => {
    SetGoBack(true);
    SetReturns(null);
    SetGoBack(false);
    return;
  };

  return (
    <>
      <div className="flex justify-center gap-6 items-center min-h-screen bg-gray-800">
        {returns == null && (
          <RenovationCalculatorForm onSendData={generateReturns} />
        )}
        {returns != null && (
          <RenovationCalcResults props={returns} previousPage={handleReturn} />
        )}
      </div>
    </>
  );
}

export default Hero;
