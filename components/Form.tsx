"use client";

import Image from "next/image";
import { Tabs } from "./ui/aceternity/tabs";
import Login from "@/app/(auth)/components/Login";
import SignUp from "@/app/(auth)/components/SignUp";

export function TabsDemo() {
  const tabs = [
    {
      title: "Sign-up",
      value: "sign-up",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-xl p-10 text-xl md:text-4xl bg-gradient-to-br  border-2 bg-yellow-secondary">
          <SignUp />
          
        </div>
      ),
    },
    {
      title: "Login",
      value: "login",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-xl p-10 md:text-4xl bg-gradient-to-br border-2 bg-yellow-primary">
          <Login />
        </div>
      ),
    },
   
  ];

  return (
    <div className="h-[20rem] md:h-[30rem] [perspective:1000px] relative flex flex-col mx-auto w-full max-w-md mt-20 items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
}
