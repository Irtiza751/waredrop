"use client";

import { Button, CardDescription } from "@waredrop/ui";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@waredrop/ui";
import { Input } from "@waredrop/ui";
import { Separator } from "@waredrop/ui";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@waredrop/ui";

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(150),
});

type Signin = z.infer<typeof signinSchema>;

export default function SigninPage() {
  const form = useForm<Signin>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: Signin) => {
    console.log(data);
  };

  return (
    <Card className="max-w-lg w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl">Welcome back!</CardTitle>
        <CardDescription>
          Please enter your credentials & start building your Waredrop
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-black">Enter email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="example@email.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-black">Enter password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*************"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size="lg" className="w-full">
              Sign in
            </Button>
          </form>
        </Form>
      </CardContent>
      <Separator className="mb-4" />
      <CardFooter className="flex-col gap-3">
        <Button size="lg" variant="secondary" className="w-full gap-2">
          <FcGoogle size={18} />
          Continue with Google
        </Button>
        <p>
          Don&apos;t have an account?{" "}
          <Link className="text-primary hover:underline" href="/sign-up">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
