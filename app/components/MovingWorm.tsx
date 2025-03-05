"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface WormPosition {
  x: number
  y: number
}

// MovingWorm component for the easter egg animation
const MovingWorm: React.FC = () => {
  const [position, setPosition] = useState<WormPosition>({ x: 0, y: 0 })
  const router = useRouter()

  useEffect(() => {
    // Add wriggle animation
    const style = document.createElement("style")
    style.textContent = `
      @keyframes wriggle {
        0%, 100% { d: path('M10,50 Q30,30 50,50 Q70,70 90,50'); }
        50% { d: path('M10,50 Q30,70 50,50 Q70,30 90,50'); }
      }
    `
    document.head.appendChild(style)

    // Move worm to a random position
    const moveWorm = () => {
      setPosition({
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
      })
    }

    moveWorm()
    const moveInterval = setInterval(moveWorm, 3000)

    return () => {
      clearInterval(moveInterval)
      document.head.removeChild(style)
    }
  }, [])

  // Navigate to secret snake game when clicked
  const handleClick = () => {
    router.push("/secret-snake")
  }

  return (
    <div
      className="fixed cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transition: "left 2s, top 2s",
        zIndex: 1000,
      }}
      onClick={handleClick}
    >
      {/* SVG worm animation */}
      <svg width="80" height="40" viewBox="0 0 100 50">
        <path
          d="M10,25 Q30,15 50,25 Q70,35 90,25"
          fill="none"
          stroke="#FF69B4"
          strokeWidth="10"
          strokeLinecap="round"
          style={{ animation: "wriggle 2s ease-in-out infinite" }}
        />
        <circle cx="90" cy="25" r="8" fill="#FF69B4" />
        <circle cx="87" cy="22" r="2" fill="white" />
        <circle cx="93" cy="22" r="2" fill="white" />
        <path d="M86,29 Q90,33 94,29" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  )
}

export default MovingWorm

