import { type rateModel } from "@/components/schema/rateModel";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import formatPercentage from "@/utils/formatPercentage";

const MyProperties = ({ props }: { props: rateModel }) => {
  console.log(props?.data?.frm_15);
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
              <div>{formatPercentage(props.data.frm_15 / 100)}</div>
            </Card>
            <Card className="items-center bg-white p-2 shadow rounded-xl font-bold">
              30 Year
              <div>{formatPercentage(props.data.frm_30 / 100)}</div>
            </Card>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default MyProperties;
