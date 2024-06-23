import { FormLayout } from "@/app/(auth)/components/FormLayout"
import SignUp from "@/app/(auth)/components/SignUp"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

export default function Modal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "circInOut" }}
    >
      <Dialog>
        <DialogTrigger className="mt-4 bg-white text-gray-900 font-bold font-sans text-xl max-w-max duration-200 h-10 px-14 rounded-none py-1 bg-primary hover:bg-primary/90 hover:text-white transition-all ease-in-out">
          JOIN US
        </DialogTrigger>
        <DialogContent className="">
          <SignUp />
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
