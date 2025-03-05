import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Footer from "./components/Footer"
import SillyBackground from "./components/SillyBackground"
import Navigation from "./components/Navigation"

export const metadata: Metadata = {
  title: "Will Hofbauer",
  description: "Independent artist and music producer",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen relative">
        <SillyBackground />
        <Navigation />
        <div className="relative z-10 flex flex-col justify-between min-h-screen">
          <main className="w-full max-w-3xl mx-auto px-4 py-6 md:px-6 md:py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'