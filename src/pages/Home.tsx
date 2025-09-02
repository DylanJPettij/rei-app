import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getProperty } from "@/components/BakendIntegration/calculations";

const Home = () => {
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
              <CardHeader className="justify-center py-2">
                <Button
                  type="submit"
                  variant="outline"
                  className="bg-yellow-500 font-bold"
                >
                  See mortgage rates
                </Button>
              </CardHeader>
            </CardContent>
            <CardFooter className="justify-center py-4">
              <Button
                type="submit"
                variant="outline"
                className="bg-green-500 font-bold"
              >
                Use the renovation calculator
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
      {/* The code here should be removed this is only for testing purposes */}
    </>
  );
};

export default Home;
