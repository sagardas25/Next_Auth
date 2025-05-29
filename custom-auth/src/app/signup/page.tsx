/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 8 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-amber-300 ">

    <Card className="flex flex-col items-center justify-center w-xs  py-2 ">
      <CardHeader className="text-center w-full p-0 m-0">
        <CardTitle className="text-xl">{loading ? "Processing" : "Signup"}</CardTitle>
        <CardDescription>sign up here</CardDescription>
      </CardHeader>
      <CardContent className="p-0 m-0">
      <div className="grid w-full my-3 max-w-xs items-center gap-1.5">
        <Label htmlFor="email">Username</Label>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="grid my-3 w-full max-w-xs items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="grid my-3 w-full max-w-xs items-center gap-1.5">
        <Label htmlFor="email">Password</Label>
        <Input
          type="password"
          id="empasswordail"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      </CardContent>
      <CardFooter className="flex flex-col">
      <button
        onClick={onSignUp}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      <Link href="/login">Visit login page</Link>
      </CardFooter>
    </Card>
    </div>

    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //   <h1>{loading ? "Processing" : "Signup"}</h1>
    //   <hr />
    //   <div className="grid w-full my-3 max-w-xs items-center gap-1.5">
    //     <Label htmlFor="email">Username</Label>
    //     <Input
    //       type="text"
    //       id="username"
    //       placeholder="Username"
    //       value={user.email}
    //       onChange={(e) => setUser({ ...user, email: e.target.value })}
    //     />
    //   </div>
    //   <div className="grid my-3 w-full max-w-xs items-center gap-1.5">
    //     <Label htmlFor="email">Email</Label>
    //     <Input
    //       type="email"
    //       id="email"
    //       placeholder="Email"
    //       value={user.email}
    //       onChange={(e) => setUser({ ...user, email: e.target.value })}
    //     />
    //   </div>
    //   <div className="grid my-3 w-full max-w-xs items-center gap-1.5">
    //     <Label htmlFor="email">Password</Label>
    //     <Input
    //       type="password"
    //       id="empasswordail"
    //       placeholder="Password"
    //       value={user.password}
    //       onChange={(e) => setUser({ ...user, password: e.target.value })}
    //     />
    //   </div>

    //   <button
    //     onClick={onSignUp}
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //   >
    //     {buttonDisabled ? "No signup" : "Signup"}
    //   </button>
    //   <Link href="/login">Visit login page</Link>
    // </div>
  );
}
