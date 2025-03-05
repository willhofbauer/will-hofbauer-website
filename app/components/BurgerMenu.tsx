"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
]

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 hover:bg-white/30 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-white/10 backdrop-blur-md p-4 flex flex-col">
          <button onClick={() => setIsOpen(false)} className="self-end p-2 mb-4 text-white/90 hover:text-white">
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

