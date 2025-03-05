import Image from "next/image"

export default function Discography() {
  const releases = [
    { title: "Cosmic Boogie", year: 2023, label: "Groovy Tunes Records" },
    { title: "Midnight Melodies", year: 2022, label: "Deep Vibes Audio" },
    { title: "Funky Frequencies", year: 2021, label: "Rhythm Nation" },
    { title: "Dancefloor Dreams", year: 2020, label: "Beats & Beyond" },
  ]

  return (
    <div className="space-y-8">
      <h1 className="quirky-title">My Tunes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {releases.map((release, index) => (
          <div key={index} className="quirky-border">
            <div className="relative w-full h-48 mb-4">
              <Image src={`/placeholder.svg`} alt={release.title} width={200} height={200} className="rounded-md" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{release.title}</h2>
            <p className="text-sm text-gray-600">{release.year}</p>
            <p className="text-sm text-gray-600">{release.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

