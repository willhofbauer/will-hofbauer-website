"use client"
import { FaInstagram, FaBandcamp, FaSoundcloud, FaSpotify, FaApple } from "react-icons/fa"

// Social media links
const socialLinks = [
  { href: "https://www.instagram.com/willhofbauer", Icon: FaInstagram },
  { href: "https://willhofbauer.bandcamp.com", Icon: FaBandcamp },
  { href: "https://soundcloud.com/willhofbauer", Icon: FaSoundcloud },
  { href: "https://open.spotify.com/artist/5ph5qdAJXZPWas7Ch9f6Uf", Icon: FaSpotify },
  { href: "https://music.apple.com/gb/artist/will-hofbauer/1253762215", Icon: FaApple },
]

// IconLink component for social media icons
const IconLink = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-800 hover:text-pink-400 transition-colors duration-300 p-2 wiggle-hover"
  >
    <Icon className="text-2xl" />
  </a>
)

// Footer component
export default function Footer() {
  return (
    <footer className="mt-2 relative z-20 py-2">
      <div className="flex justify-center items-center space-x-6">
        {socialLinks.map((link, index) => (
          <IconLink key={index} href={link.href} Icon={link.Icon} />
        ))}
      </div>
    </footer>
  )
}

