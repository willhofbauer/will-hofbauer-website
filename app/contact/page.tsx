import fs from "fs"
import path from "path"
import MovingWorm from "../components/MovingWorm"

interface Contact {
  label: string
  email: string
}

function getContactContent() {
  const filePath = path.join(process.cwd(), "app/content/contact.json")
  const raw = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(raw) as { contacts: Contact[] }
}

export const dynamic = "force-static"

export default function Contact() {
  const { contacts } = getContactContent()

  return (
    <div className="space-y-8 relative mb-2">
      <h1 className="quirky-title">Contact</h1>
      <div className="content-card mt-8">
        {contacts.map((contact, index) => (
          <p key={index} className={index < contacts.length - 1 ? "mb-4 text-lg" : "text-lg"}>
            {contact.label}:{" "}
            <a href={`mailto:${contact.email}`} className="text-pink-500 hover:underline font-bold">
              {contact.email}
            </a>
          </p>
        ))}
      </div>

      <MovingWorm />
    </div>
  )
}
