"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface SoundCloudEmbedProps {
  playlistUrl: string
}

const SoundCloudEmbed: React.FC<SoundCloudEmbedProps> = ({ playlistUrl }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (iframe) {
      iframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
        playlistUrl,
      )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
    }
  }, [playlistUrl])

  return <iframe ref={iframeRef} width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay"></iframe>
}

export default SoundCloudEmbed

