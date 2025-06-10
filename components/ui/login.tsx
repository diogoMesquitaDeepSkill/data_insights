// Login1.tsx
/* eslint-disable @next/next/no-img-element */

"use client"; // Add this at the very top of the file, before imports

import { Globe, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login1 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container py-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 justify-center">
            <img
              src="https://www.shadcnblocks.com/images/block/block-1.svg"
              className="w-8"
              alt="logo"
            />
            <span className="text-xl font-bold">Data Insights</span>
          </div>
          <Card className="mx-auto w-full max-w-md">
            <CardHeader className="items-center">
              <UserRound className="size-10 rounded-full bg-accent p-2.5 text-muted-foreground" />
              <CardTitle className="text-xl">Log in with your email</CardTitle>
              <CardDescription>Enter your information to login</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  <Globe className="mr-2 size-4" />
                  Sign up with Google
                </Button>
                <div className="flex items-center gap-4">
                  <span className="h-px w-full bg-input"></span>
                  <span className="text-xs text-muted-foreground">OR</span>
                  <span className="h-px w-full bg-input"></span>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-sm underline">
                      Forgot password
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button asChild type="submit" className="w-full">
                  <a href="./dashboard">Log in</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="mx-auto flex gap-1 text-sm">
            <p>Don&apos;t have an account yet?</p>
            <a href="#" className="underline">
              Register here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login1;
