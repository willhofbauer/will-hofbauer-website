import Link from "next/link"
import pressItems from "@/content/press.json"

export default function Press() {
  return (
    <div className="space-y-8">
      <h1 className="quirky-title">Press</h1>
      <div className="space-y-4">
        {pressItems.map((item, index) => (
          <Link key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="block">
            <div
              className="bg-white/80 p-4 rounded-lg hover:bg-pink-200 transition-colors transform hover:scale-105 hover:rotate-1 border-4 border-dashed border-purple-400"
            >
              <span className="font-bold text-pink-600">{item.year}</span> -{" "}
              <span className="text-purple-800">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

