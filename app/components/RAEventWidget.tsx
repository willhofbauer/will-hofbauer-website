"use client"

import { useEffect, useRef, useState } from "react"

export default function RAEventWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState(300) // Default height

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the RA domain
      if (event.origin !== "https://ra.co") return

      if (event.data && typeof event.data === "object" && "type" in event.data) {
        if (event.data.type === "ra-widget-height") {
          setIframeHeight(event.data.height)
        }
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src="https://ra.co/widget/eventlisting?dj=willhofbauer"
      width="100%"
      height={`${iframeHeight}px`}
      style={{ border: "none" }}
      title="Resident Advisor Events"
    />
  )
}

