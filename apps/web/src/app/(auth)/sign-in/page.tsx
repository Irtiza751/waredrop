import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@radix-ui/react-separator";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function SigninPage() {
  return (
    <Card className="max-w-lg w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome back</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label>Enter your email</Label>
            <Input placeholder="example@email.com" type="email" />
          </div>
          <div className="space-y-2">
            <Label>Enter your password</Label>
            <Input placeholder="****************" type="password" />
          </div>
          <Button size="lg" className="w-full">
            Sign in
          </Button>
        </form>
      </CardContent>
      <Separator className="my-2" />
      <CardFooter className="flex-col gap-3">
        <Button size="lg" variant="secondary" className="w-full gap-2">
          <FcGoogle size={18} />
          Continue with Google
        </Button>
        <p>
          Don&apos;t have and account{" "}
          <Link className="text-primary hover:underline" href="/sign-up">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
