"use client"

import { useEffect, useState } from "react"

export default function FloatingFlowers() {
  const [flowers, setFlowers] = useState<Array<{ id: number; x: number; y: number; rotation: number }>>([])

  useEffect(() => {
    // Add keyframes for floating animation
    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
        50% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(${Math.random() * 360}deg); }
        100% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(${Math.random() * 360}deg); }
      }
    `
    document.head.appendChild(style)

    const newFlowers = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
    }))
    setFlowers(newFlowers)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute flower"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            transform: `rotate(${flower.rotation}deg)`,
            animation: `float ${7 + Math.random() * 8}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * -5}s`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path
              d="M20 0 C25 10 30 15 40 20 C30 25 25 30 20 40 C15 30 10 25 0 20 C10 15 15 10 20 0"
              fill="#ff69b4"
              stroke="#ffff00"
              strokeWidth="2"
              className="animate-spin-slow"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

