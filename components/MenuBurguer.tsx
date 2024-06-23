import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Link from "next/link"
import { FiMenu } from "react-icons/fi"
import Modal from "./Modal" 


export default function MenuBurguer() {
  return (
    <Sheet >
      <SheetTrigger>
        <div className="bg-gray-700 text-4xl md:text-5xl text-white p-2 ">
          <FiMenu />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle><h1 className="text-2xl">Menu</h1></SheetTitle>
          <SheetDescription>
            <div className="flex text-lg items-center flex-col text-black font-medium ">
              <Modal />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
