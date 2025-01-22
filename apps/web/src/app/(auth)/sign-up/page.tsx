"use client";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { waredropApi } from "@/api/waredrop.api";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  CardDescription,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Separator,
} from "@waredrop/ui";

const signupSchema = z.object({
  name: z.string().min(5).max(150),
  email: z.string().email(),
  password: z.string().min(6).max(150),
});

type Signup = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const signUpMutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: (data: Signup) => waredropApi.post("/user/create-user", data),
    onSuccess(response) {
      console.log(response);
    },
    onError(error) {
      console.log(error);
    },
  });

  const form = useForm<Signup>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: Signup) => {
    console.log(data);
    signUpMutation.mutate(data);
  };

  return (
    <Card className="max-w-lg w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl">Create an account</CardTitle>
        <CardDescription>
          Create your account & Step into style with Waredrop.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-black">Enter username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John doe" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
          Already have an account{" "}
          <Link className="text-primary hover:underline" href="/sign-in">
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
