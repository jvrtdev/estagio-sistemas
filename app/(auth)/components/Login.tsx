import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  return (
    <>
      <div className="grid gap-2 text-center text-black">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-sm">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-4 mt-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            
          </div>
          <Input id="password" type="password" required className="bg-none" />
        </div>
        <Button type="submit" className="w-full rounded-md">
          Login
        </Button>
        
      </div>
      
    </>
  )
}
