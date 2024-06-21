'use client'
import waves2 from "@/public/wave-yellow-2.svg"
import lines from "@/public/linhas.svg"
import fundo from "@/public/image-8.jpg"
import Image from "next/image"
import MainContent from "@/components/MainContent"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.main className="flex min-h-screen flex-col items-center justify-between overflow-auto bg-yellow-primary"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ease: "circIn", duration: 1}}
    >
      <Image
        src={fundo}
        alt="foto fundo"
        className="absolute w-full lg:h-screen 2xl:left-[-200px]"
        loading="eager"
      />

      <div className="flex w-full h-screen justify-center items-center">
        <Image
          src={waves2}
          alt="Fundo amarelo"
          className="absolute top-2 md:bottom-0 lg:top-auto md:w-full"
          loading="eager"
        />
        <Image
          src={lines}
          alt="Linhas"
          className="absolute bottom-0 w-full"
          loading="eager"
        />

        <MainContent />
      </div>
    </motion.main>
  )
}
