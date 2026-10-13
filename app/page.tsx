import Image from "next/image"
import fs from "fs"
import path from "path"
import MailingListForm from "./components/MailingListForm"

function getHomeContent() {
  const filePath = path.join(process.cwd(), "app/content/home.json")
  const raw = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(raw) as { bio: string }
}

// The CMS stores the bio as Markdown, so turn blank-line-separated blocks into
// paragraphs and handle the basic inline formatting the editor produces.
function markdownToHtml(markdown: string) {
  return markdown
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const inline = block
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>")
        .replace(/\n/g, "<br />")
      return `<p>${inline}</p>`
    })
    .join("")
}

export const dynamic = "force-static"

export default function Home() {
  const { bio } = getHomeContent()

  return (
    <div className="flex flex-col items-center justify-center space-y-6 mb-2">
      <h1 className="quirky-title wiggle">Will Hofbauer</h1>

      {/* Bio content */}
      <div className="content-card bio-content">
        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(bio) }} />
      </div>

      {/* Main image */}
      <div className="relative w-full max-w-xs transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-27%20at%2021.17.30-mlgeoeXDwNh2vqVrRcBUNdCoS9Ns6G.png"
          alt="Will Hofbauer standing next to a hay bale in a sunny field"
          width={300}
          height={300}
          layout="responsive"
          className="rounded-lg object-cover border-4 border-pink-400"
        />
      </div>

      {/* Mailchimp signup form */}
      <MailingListForm />
    </div>
  )
}
