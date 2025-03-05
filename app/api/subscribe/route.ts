import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const SUBSCRIBERS_FILE = path.join(process.cwd(), "data", "subscribers.json")

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Read existing subscribers
    let subscribers = []
    if (fs.existsSync(SUBSCRIBERS_FILE)) {
      const data = fs.readFileSync(SUBSCRIBERS_FILE, "utf8")
      subscribers = JSON.parse(data)
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      return NextResponse.json({ error: "Email already subscribed" }, { status: 400 })
    }

    // Add new subscriber
    subscribers.push(email)

    // Write updated subscribers list
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

