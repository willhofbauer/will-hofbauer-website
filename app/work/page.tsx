"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import SoundCloudEmbed from "../components/SoundCloudEmbed"
import releases from "@/content/releases.json"
import labels from "@/content/labels.json"

export default function Work() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200
      container.scrollLeft += scrollAmount
    }
  }

  return (
    <div className="space-y-6 sm:space-y-12 mb-2">
      <h1 className="quirky-title">Work</h1>
      <section className="relative">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center text-purple-800 transform -rotate-2">
          Selected Discography
        </h2>
        <div className="relative">
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-pink-300/80 text-purple-800 rounded-full p-2 hover:bg-pink-400/80 transition-colors"
            aria-label="Scroll left"
          >
            ←
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {releases.map((release, index) => (
              <Link
                key={index}
                href={release.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-36 sm:w-40 release-item"
              >
                <div className="relative group">
                  <div className="aspect-square relative overflow-hidden rounded-lg shadow-md border-2 sm:border-4 border-pink-400">
                    <Image
                      src={release.artworkUrl || "/placeholder.svg"}
                      alt={release.title}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-1 sm:mt-2 text-xs">
                    <p className="font-bold text-purple-800">{release.title}</p>
                    <p className="text-pink-600">
                      {release.year} - {release.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-pink-300/80 text-purple-800 rounded-full p-2 hover:bg-pink-400/80 transition-colors"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center text-purple-800 transform rotate-2">
          DJ Mixes
        </h2>
        <div className="aspect-w-16 aspect-h-9 border-2 sm:border-4 border-purple-400 rounded-lg overflow-hidden">
          <SoundCloudEmbed playlistUrl="https://soundcloud.com/willhofbauer/sets/mixes-1" />
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center text-purple-800 transform -rotate-2">
          Labels
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {labels.map((label, index) => (
            <div key={index} className="space-y-4">
              <Link href={label.url} target="_blank" rel="noopener noreferrer" className="block text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-800 transform hover:scale-105 transition-transform inline-block">
                  {label.name}
                </h3>
              </Link>
              <div className="aspect-w-16 aspect-h-9 border-2 sm:border-4 border-purple-400 rounded-lg overflow-hidden">
                <SoundCloudEmbed playlistUrl={label.soundcloudUrl} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

