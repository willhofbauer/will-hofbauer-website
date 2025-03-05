import Link from "next/link"

const pressItems = [
  {
    year: 2024,
    title: "BBC 6Music with Mary Anne Hobbs - \"Sounds of the Near Future: 'UKA' by Will Hofbauer and Sangre Voss\"",
    url: "https://www.bbc.co.uk/programmes/m001vjd0",
  },
  {
    year: 2024,
    title: 'Mixmag - "Will Hofbauer and Sangre Voss launch new label, whirm"',
    url: "https://mixmag.net/read/will-hofbauer-and-sangre-voss-launch-new-label-whirm-news",
  },
  {
    year: 2024,
    title: 'Resident Advisor - "Review: Will Hofbauer & Sangre Voss - I feel U"',
    url: "https://ra.co/reviews/36044",
  },
  {
    year: 2023,
    title: 'Crack Magazine - "Crack Mix 510"',
    url: "https://crackmagazine.net/article/mixprofile/will-hofbauer/",
  },
  {
    year: 2023,
    title: 'Resident Advisor - "Review: Will Hofbauer - LKX004"',
    url: "https://ra.co/reviews/35837",
  },
  {
    year: 2023,
    title: 'Resident Advisor - "Review: Will Hofbauer - The Shovel Is A Shovel Was A Shovel"',
    url: "https://ra.co/reviews/35487",
  },
  {
    year: 2021,
    title: "The Ransom Note - \"'Shine A Light On' Mix & Interview\"",
    url: "https://www.theransomnote.com/music/mixes/will-hofbauer-the-shine-a-light-on-mix/",
  },
]

export default function Press() {
  return (
    <div className="space-y-8">
      <h1 className="quirky-title">Press</h1>
      <div className="space-y-4">
        {pressItems.map((item, index) => (
          <Link href={item.url} target="_blank" rel="noopener noreferrer" className="block">
            <div
              key={index}
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

