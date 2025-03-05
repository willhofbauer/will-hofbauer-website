"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import SoundCloudEmbed from "../components/SoundCloudEmbed"

const releases = [
  {
    title: "Pond Party",
    year: 2024,
    label: "Third Place",
    url: "https://thirdplacerecords.bandcamp.com/album/will-hofbauer-pond-party",
    artworkUrl: "https://f4.bcbits.com/img/a3820815548_10.jpg",
  },
  {
    title: "Dingers",
    year: 2024,
    label: "Optimo Music",
    url: "https://optimomusic.bandcamp.com/album/dingers",
    artworkUrl: "https://f4.bcbits.com/img/a1253488339_10.jpg",
  },
  {
    title: "Four! Beats!",
    year: 2024,
    label: "Aus Music",
    url: "https://willhofbauer.bandcamp.com/album/four-beats",
    artworkUrl: "https://f4.bcbits.com/img/a0821494841_10.jpg",

  },
  {
    title: "The Shovel Is A Shovel Was A Shovel",
    year: 2023,
    label: "Wisdom Teeth",
    url: "https://willhofbauer.bandcamp.com/album/the-shovel-is-a-shovel-was-a-shovel",
    artworkUrl: "https://f4.bcbits.com/img/a0401658093_10.jpg",
  },
  {
    title: "Drip Dip Drip The Dip Drip",
    year: 2022,
    label: "Rinse",
    url: "https://willhofbauer.bandcamp.com/album/will-hofbauer-drip-dip-drip-the-dip-drip",
    artworkUrl: "https://f4.bcbits.com/img/a0038515437_10.jpg",
  },
  {
    title: "Steppe EP (w/ Sangre Voss)",
    year: 2021,
    label: "Control Freak",
    url: "https://controlfreakrecordings.bandcamp.com/album/steppe-ep-inc-ciel-remix",
    artworkUrl: "https://f4.bcbits.com/img/a3490672157_10.jpg",
  },
  {
    title: "Where Did All The Hay Go?",
    year: 2020,
    label: "Third Place",
    url: "https://thirdplacerecords.bandcamp.com/album/will-hofbauer-where-did-all-the-hay-go",
    artworkUrl: "https://f4.bcbits.com/img/a2975384738_10.jpg",
  },
]

const labels = [
  {
    name: "whirm",
    url: "https://whirm.online",
    soundcloudUrl: "https://soundcloud.com/willhofbauer/sets/whirm",
  },
  {
    name: "Third Place",
    url: "https://thirdplacerecords.com",
    soundcloudUrl: "https://soundcloud.com/willhofbauer/sets/label-third-place",
  },
]

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

