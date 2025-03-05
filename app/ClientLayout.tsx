"use client"

import type React from "react"
import "./globals.css"
import Footer from "./components/Footer"
import SillyBackground from "./components/SillyBackground"
import Navigation from "./components/Navigation"
import { useEffect } from "react"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <html lang="en">
      <body className="min-h-screen relative">
        <SillyBackground />
        <Navigation />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <main className="w-full max-w-3xl mx-auto px-4 py-6">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

