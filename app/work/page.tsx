import { getReleases, getLabels } from './data'
import ReleaseScroller from './ReleaseScroller'
import SoundCloudEmbed from "../components/SoundCloudEmbed"
import Link from "next/link"

// This makes the page static by default
export const dynamic = 'force-static'

export default function WorkPage() {
  const releases = getReleases()
  const labels = getLabels()

  return (
    <div className="space-y-6 sm:space-y-12 mb-2">
      <h1 className="quirky-title">Work</h1>

      <section className="relative">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center text-purple-800 transform -rotate-2">
          Selected Discography
        </h2>
        {/* Only the interactive scroller is a client component */}
        <ReleaseScroller releases={releases} />
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