import { NextResponse } from "next/server"

export async function GET() {
  try {
    // For development, return mock data until we have proper API access
    const mockEvents = [
      {
        date: "Mar 15 2024",
        venue: "Fabric",
        location: "London",
        url: "/events/fabric-london-mar15",
      },
      {
        date: "Mar 22 2024",
        venue: "Panorama Bar",
        location: "Berlin",
        url: "/events/panorama-bar-berlin-mar22",
      },
    ]

    return NextResponse.json({ events: mockEvents })
  } catch (error) {
    console.error("Error fetching RA events:", error)
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 })
  }
}

