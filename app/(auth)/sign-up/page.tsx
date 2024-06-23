import Image from "next/image"
import fundo from "@/public/image-6.jpg"
import Link from "next/link"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TabsDemo } from "@/components/Form"
import SignUp from "../components/SignUp"
import { FormLayout } from "../components/FormLayout"

export default function Cadastro() {
  return (
    <div className="bg-slate-300">
      <FormLayout />
      
        {/* <Image src={fundo} alt="foto fundo" className="absolute top-0" /> */}
    {/* <div className="mx-auto grid w-max-md gap-6 p-6 border-2 border-slate-300 rounded-lg mt-20 bg-opacity-50 backdrop-blur-xl text-primary">
      <SignUp />
    </div> */}
      {/* <div className="mx-auto grid w-max-md gap-6 p-6 border-2 border-gray-600 rounded-lg mt-20 bg-opacity-50 backdrop-blur-lg">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Sign-up</h1>
          <p className="text-balance ">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-4">
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
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required className="bg-none" />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </div> */}
      {/* <TabsDemo /> */}
    </div>
  )
}
