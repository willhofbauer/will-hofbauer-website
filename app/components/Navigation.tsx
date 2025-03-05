"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Navigation menu items
const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
]

// Navigation component
const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 z-20 w-full md:w-auto md:h-full flex md:flex-col justify-start md:justify-center items-center md:items-start p-2 md:p-4 bg-yellow-100/80 md:bg-transparent overflow-x-auto md:overflow-x-visible">
      <div className="flex md:flex-col w-full md:w-auto space-x-2 md:space-x-0 md:space-y-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${pathname === item.href ? "active" : ""} ${
              item.label === "Home" ? "home-wobble" : item.label === "Press" ? "press-wobble" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation

