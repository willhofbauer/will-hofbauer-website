import { NextResponse } from "next/server"
import * as cheerio from "cheerio"

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 })
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    const imageUrl = $('meta[property="og:image"]').attr("content") || $("img#tralbumArt").attr("src")

    if (imageUrl) {
      return NextResponse.json({ imageUrl })
    } else {
      console.error("Image not found in HTML:", html.substring(0, 500)) // Log first 500 characters of HTML
      return NextResponse.json({ error: "Image not found" }, { status: 404 })
    }
  } catch (error) {
    console.error("Error in fetch-artwork route:", error)
    return NextResponse.json({ error: "Failed to fetch artwork", details: error.message }, { status: 500 })
  }
}

