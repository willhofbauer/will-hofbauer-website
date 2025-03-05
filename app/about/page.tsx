// About page component
export default function About() {
  return (
    <div className="content-container mb-2">
      <h1 className="quirky-title">About</h1>
      <div className="content-card">
        <p className="mb-4">Will Hofbauer is an Australian-born producer and DJ living and working in London.</p>
        <p className="mb-4">
          His productions have been released on{" "}
          <a
            href="https://wisdomteethuk.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-500 font-bold"
          >
            Wisdom Teeth
          </a>
          ,{" "}
          <a
            href="https://ausmusic.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-500 font-bold"
          >
            Aus Music
          </a>
          ,{" "}
          <a
            href="https://www.rinse.fm/label/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-500 font-bold"
          >
            Rinse
          </a>
          ,{" "}
          <a
            href="https://www.wearerhythmsection.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-500 font-bold"
          >
            Rhythm Section
          </a>
          , and more since his debut 12" in 2019.
        </p>
        <p className="mb-4">
          As a DJ, he has played in Europe, Australia, China, and Japan, and has recorded mixes for Crack Magazine, The
          Ransom Note, and more, including a takeover of the long-running Hessle Audio radio show.
        </p>
        <p className="mb-4">
          Will runs the playful{" "}
          <a
            href="https://thirdplacerecords.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-500 font-bold"
          >
            Third Place
          </a>{" "}
          label, which has put out music by Sangre Voss, Stones Taro, Yetsuby, maya q, and himself, among others.
        </p>
        <p className="mb-4">
          He also co-runs{" "}
          <a
            href="https://whirm.online"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-500 font-bold"
          >
            whirm
          </a>{" "}
          with Sangre Voss, an imprint for their joint productions.
        </p>
        <p>
          His music has received support from the likes of Ben UFO, Four Tet, Mary Anne Hobbs, Gilles Peterson, and
          more.
        </p>
      </div>
    </div>
  )
}

