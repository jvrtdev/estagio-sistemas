import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Company Name",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/marca.svg" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <main className="relative flex flex-col min-h-screen overflow-hidden scroll-smooth">
          <Toaster />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
