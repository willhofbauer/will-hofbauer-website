import { NextResponse } from "next/server"
import axios from "axios"
import * as cheerio from "cheerio"

const MAX_RETRIES = 3
const RETRY_DELAY = 2000 // 2 seconds

async function fetchWithRetry(url: string, retries = MAX_RETRIES): Promise<string | null> {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
      timeout: 10000, // 10 seconds timeout
    })

    const $ = cheerio.load(response.data)
    const imageUrl = $('meta[property="og:image"]').attr("content") || $("img#tralbumArt").attr("src")

    if (imageUrl) {
      return imageUrl
    } else {
      console.warn("Image not found in HTML")
      return null
    }
  } catch (error) {
    console.error(`Attempt ${MAX_RETRIES - retries + 1} failed:`, error.message)
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY))
      return fetchWithRetry(url, retries - 1)
    } else {
      console.error("All attempts failed")
      return null
    }
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 })
  }

  try {
    const imageUrl = await fetchWithRetry(url)
    if (imageUrl) {
      return NextResponse.json(
        { imageUrl },
        {
          headers: {
            "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
        },
      )
    } else {
      return NextResponse.json({ error: "Failed to fetch artwork", imageUrl: null }, { status: 404 })
    }
  } catch (error) {
    console.error("Error in GET handler:", error)
    return NextResponse.json({ error: "Internal server error", details: error.message }, { status: 500 })
  }
}

