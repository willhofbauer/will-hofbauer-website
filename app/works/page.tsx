import Image from "next/image"

export default function Works() {
  const releases = [
    { title: "Cosmic Drift", year: 2023, type: "EP", label: "Hypnus Records" },
    { title: "Midnight Echoes", year: 2022, type: "Single", label: "Lobster Theremin" },
    { title: "Urban Pulse", year: 2022, type: "Album", label: "Whities" },
    { title: "Technicolor Dreams", year: 2021, type: "EP", label: "Ostgut Ton" },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Discography</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {releases.map((release, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-rotate-1"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={`/placeholder.svg?height=200&width=200&text=${release.title}`}
                alt={release.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{release.title}</h2>
            <p className="text-sm text-gray-600">
              {release.year} • {release.type}
            </p>
            <p className="text-sm text-gray-600">{release.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

