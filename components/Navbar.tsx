"use client"
import Image from "next/image"
import { MaxWidthWrapper } from "./MaxWidthWrapper"
import logo from "@/public/marca.svg"
import { Input } from "./ui/input"
import { FaSearch } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"
import { cn } from "@/utils/cn"
import { motion } from "framer-motion"


import { Label } from "./ui/label"
import Link from "next/link"

import React, { useState } from "react"
import MenuBurguer from "./MenuBurguer"

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 p-2 flex w-full z-50 items-center drop-shadow-sm"
      initial={{ y: -80, opacity: 0 }}
      whileInView={{y:0, opacity: 1}}
      transition={{ delay:1 ,ease:"easeInOut",duration: 1, }}
    >
      <MaxWidthWrapper className="flex justify-between">
        <Link href="/">
          <Image src={logo} alt="logomarca" className="cursor-pointer" />
        </Link>

        <div className="flex items-center gap-2 ">
          <div className="hidden md:flex gap-2 items-center">
            <Label htmlFor="search">
              <FaSearch className="text-2xl cursor-pointer" />
            </Label>

            <Input
              id="search"
              type="search"
              placeholder="SEARCH"
              className="rounded-full h-8 max-w-max min-w-min"
            />
          </div>

          <div className="flex items-center ml-10">
            <MenuBurguer />
          </div>
        </div>
      </MaxWidthWrapper>
    </motion.header>
  )
}
