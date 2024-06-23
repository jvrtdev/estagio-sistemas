import Image from "next/image"
import Link from "next/link"
import fundo from "@/public/image-7.jpg"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SignUp from "./SignUp"

export function FormLayout() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <SignUp />   
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src={fundo}
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
