import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import MainLayout from "@/layouts/MainLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getProperty } from "@/components/BakendIntegration/calculations";

const RenovationCalculator = () => {
  /* The code here should be removed this is only for testing purposes */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    //console.log(formData.get("propertyId"));
    const propId = formData.get("propertyId");

    const propData = getProperty(Number(propId));
    console.log(propData);
  };
  /* The code here should be removed this is only for testing purposes */

  return (
    <>
      <MainLayout />
      <div className="flex h-screen justify-center items-center bg-gray-800">
        {/* The code here should be removed this is only for testing purposes */}
        <Card className="w-1/4">
          <CardHeader className="font-bold justify-center">
            Get a property and display the information by entering the ID Below
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <CardHeader>
                <Label className="font-bold p-4">
                  Enter your property ID here:
                </Label>
                <Input name="propertyId" type="number"></Input>
              </CardHeader>
            </CardContent>
            <CardFooter className="justify-center py-4">
              <Button
                type="submit"
                variant="outline"
                className="bg-green-500 font-bold"
              >
                Click Me to find your property
              </Button>
            </CardFooter>
          </form>
        </Card>
        {/* The code here should be removed this is only for testing purposes */}
      </div>
    </>
  );
};

export default RenovationCalculator;
