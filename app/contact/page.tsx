"use client"
import MovingWorm from "../components/MovingWorm"

export default function Contact() {
  return (
    <div className="space-y-8 relative mb-2">
      <h1 className="quirky-title">Contact</h1>
      <div className="content-card mt-8">
        <p className="mb-4 text-lg">
          General:{" "}
          <a href="mailto:will@thirdplacerecords.com" className="text-pink-500 hover:underline font-bold">
            will@thirdplacerecords.com
          </a>
        </p>
        <p className="text-lg">
          DJ Bookings:{" "}
          <a href="mailto:george@leftbank.agency" className="text-pink-500 hover:underline font-bold">
            george@leftbank.agency
          </a>
        </p>
      </div>

      <MovingWorm />
    </div>
  )
}

