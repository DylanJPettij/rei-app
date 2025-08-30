import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function LoginForm() {
  const [signIn, SetsignIn] = useState(false);

  if (signIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="mx-auto w-1/4">
        <CardHeader>
          <CardTitle className="text-2x1">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">Email</div>
          <Input
            id="email"
            type="email"
            placeholder="youremail@gmail.com"
            required
          />
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <CardFooter>
            <Button onClick={() => SetsignIn(!signIn)} className="w-full">
              Sign in
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
