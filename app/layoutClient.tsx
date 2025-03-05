"use client"

import type React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Disc3, Mail, Menu, X, Music, Headphones } from "lucide-react"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#f9f5f0] text-[#2d2d2d] min-h-screen noise-overlay`}
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Header />
          <main className="mt-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex justify-between items-center relative">
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#FFB549]/10 rounded-full blur-md"></div>

      <Link
        href="/"
        className="text-2xl md:text-3xl font-bold font-space tracking-tight hover:rotate-1 transition-transform flex items-center gap-2"
      >
        <span className="relative">
          Will Hofbauer
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#FF5E5B]/30"></span>
        </span>
        <Disc3 size={20} className="text-[#FF5E5B] rotate-12" />
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 hover:rotate-3 transition-transform"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-8 text-lg">
        <NavLinks />
      </nav>

      {/* Mobile navigation overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#f9f5f0] z-50 flex flex-col items-center justify-center md:hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#FFB549]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#4CB5AE]/10 rounded-full blur-xl"></div>

          <button
            className="absolute top-8 right-8 hover:rotate-12 transition-transform"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center gap-8 text-2xl relative z-10">
            <NavLinks onClick={() => setMenuOpen(false)} />
          </nav>

          <div className="absolute bottom-10 flex gap-6">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-[#2d2d2d]/70 hover:text-[#2d2d2d] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://soundcloud.com"
              aria-label="SoundCloud"
              className="text-[#2d2d2d]/70 hover:text-[#2d2d2d] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 13.5v-4.178a2.5 2.5 0 0 1 5 0V15" />
                <path d="M16 16.5v-13a3 3 0 0 1 6 0v13" />
                <path d="M8 21h12a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4h6z" />
              </svg>
            </a>
            <a
              href="https://spotify.com"
              aria-label="Spotify"
              className="text-[#2d2d2d]/70 hover:text-[#2d2d2d] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 11.999c5.999 1.284 8 2.143 8 2.143" />
                <path d="M9.138 8.333c5.099 1.142 7.151 2.656 7.151 2.656" />
                <path d="M9.64 15.667c3.985.89 5.993 1.92 5.993 1.92" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link
        href="/"
        className="hover:underline decoration-wavy decoration-[#FF5E5B] underline-offset-4 transition-all hover:-rotate-1 relative group"
        onClick={onClick}
      >
        Home
        <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Music size={12} className="text-[#FF5E5B]" />
        </span>
      </Link>
      <Link
        href="/works"
        className="hover:underline decoration-wavy decoration-[#4CB5AE] underline-offset-4 transition-all hover:rotate-1 relative group"
        onClick={onClick}
      >
        Works
        <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Disc3 size={12} className="text-[#4CB5AE]" />
        </span>
      </Link>
      <Link
        href="/info"
        className="hover:underline decoration-wavy decoration-[#FFB549] underline-offset-4 transition-all hover:-rotate-1 relative group"
        onClick={onClick}
      >
        Info
        <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Headphones size={12} className="text-[#FFB549]" />
        </span>
      </Link>
      <Link
        href="/contact"
        className="hover:underline decoration-wavy decoration-[#8A4FFF] underline-offset-4 transition-all hover:rotate-1 relative group"
        onClick={onClick}
      >
        Contact
        <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Mail size={12} className="text-[#8A4FFF]" />
        </span>
      </Link>
    </>
  )
}

function Footer() {
  return (
    <footer className="mt-20 pt-6 border-t border-[#2d2d2d]/20 text-sm text-[#2d2d2d]/70">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-[#FF5E5B] rounded-full"></span>© {new Date().getFullYear()} Will
          Hofbauer
        </p>
        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            className="hover:text-[#2d2d2d] transition-colors wiggle-hover"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://soundcloud.com"
            className="hover:text-[#2d2d2d] transition-colors wiggle-hover"
            aria-label="SoundCloud"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 13.5v-4.178a2.5 2.5 0 0 1 5 0V15" />
              <path d="M16 16.5v-13a3 3 0 0 1 6 0v13" />
              <path d="M8 21h12a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4h6z" />
            </svg>
          </a>
          <a
            href="https://spotify.com"
            className="hover:text-[#2d2d2d] transition-colors wiggle-hover"
            aria-label="Spotify"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 11.999c5.999 1.284 8 2.143 8 2.143" />
              <path d="M9.138 8.333c5.099 1.142 7.151 2.656 7.151 2.656" />
              <path d="M9.64 15.667c3.985.89 5.993 1.92 5.993 1.92" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

