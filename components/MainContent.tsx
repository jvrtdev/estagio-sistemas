"use client"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Modal from "./Modal"

export default function MainContent() {
  return (
    <div className="w-full z-10">
      <MaxWidthWrapper>
        <div className="w-full flex flex-col text-end p-2 items-end mt-32 md:mt-90 lg:mt-52 xl:mt-20 2xl:mt-auto flex-wrap overflow-hidden">
          <motion.h1
            className="font-bold font-sans md:text-nowrap text-7xl sm:text-8xl md:text-9xl text-gray-900 leading-none"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, ease: "easeOut" }}
          >
            IT'S TIME!
          </motion.h1>
          <motion.p
            className="font-light text-gray-900 font-sans text-xl sm:text-3xl md:text-4xl tracking-wide"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, ease: "easeOut" }}
          >
            THE NEW ROAD IT'S BEGINNING
          </motion.p>
          <motion.p
            className="text-sm sm:text-normal max-w-sm md:text-xl mt-10  text-white md:max-w-lg"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, ease: "easeInOut", duration: 1 }}
            className="flex flex-row-reverse items-center gap-2"
          >
            <Modal />
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
