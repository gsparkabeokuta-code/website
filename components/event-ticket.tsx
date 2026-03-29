"use client"

import { useRef, useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Download, Share2, X, Camera } from "lucide-react"
import { toPng } from "html-to-image"
import type { Registration } from "@/lib/supabase"

const SHARE_PLATFORMS = [
  {
    name: "Twitter / X",
    icon: "𝕏",
    getUrl: (text: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
  },
  {
    name: "Facebook",
    icon: "f",
    getUrl: (text: string) =>
      `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(text)}`,
  },
  {
    name: "LinkedIn",
    icon: "in",
    getUrl: (text: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://gsparksummit.com")}&summary=${encodeURIComponent(text)}`,
  },
  {
    name: "WhatsApp",
    icon: "wa",
    getUrl: (text: string) =>
      `https://wa.me/?text=${encodeURIComponent(text)}`,
  },
]

function getShareText(name: string, ticketType: string) {
  return `I just secured my ${ticketType.toUpperCase()} ticket for G-SPARK SUMMIT 1.0!\n\nNigeria's Premier Tech Summit\n\nApril 25, 2026 | FUNAAB, Abeokuta\n\nRegister now at gsparksummit.com\n\n#GSPARK #TechSummit #AfricaTech`
}

interface EventTicketProps {
  registration: Registration
}

export function EventTicket({ registration }: EventTicketProps) {
  const ticketRef = useRef<HTMLDivElement>(null)
  const photoInputRef = useRef<HTMLInputElement>(null)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [photo, setPhoto] = useState<string | null>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setPhoto(reader.result as string)
    reader.readAsDataURL(file)
  }

  const ticketId = registration.ticket_id || "GSPARK-XXXXXXXX"
  const qrData = JSON.stringify({
    ticket_id: ticketId,
    name: registration.full_name,
    email: registration.email,
    type: registration.ticket_type,
  })

  const ticketLabel =
    registration.ticket_type === "vip"
      ? "VIP"
      : registration.ticket_type === "student"
        ? "Student"
        : "Regular"

  const ticketColor =
    registration.ticket_type === "vip"
      ? "#FFD700"
      : registration.ticket_type === "student"
        ? "#1FAE63"
        : "#1FAE63"

  const handleDownload = async () => {
    if (!ticketRef.current) return
    setDownloading(true)
    try {
      const dataUrl = await toPng(ticketRef.current, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#0D0D0D",
      })
      const link = document.createElement("a")
      link.download = `gspark-ticket-${ticketId}.png`
      link.href = dataUrl
      link.click()
    } catch {
      alert("Failed to download ticket. Please try taking a screenshot instead.")
    } finally {
      setDownloading(false)
    }
  }

  const shareText = getShareText(registration.full_name, ticketLabel)

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Ticket Card */}
      <div
        ref={ticketRef}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-800 p-6 sm:p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <img src="/g-spark-logo.png" alt="G-SPARK" className="h-8 sm:h-10" />
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
            style={{
              backgroundColor: `${ticketColor}15`,
              borderColor: `${ticketColor}40`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: ticketColor }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: ticketColor }}
            >
              {ticketLabel} Pass
            </span>
          </div>
        </div>

        {/* Attendee Info */}
        <div className="flex items-center gap-4 mb-6">
          {photo ? (
            <img
              src={photo}
              alt={registration.full_name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 flex-shrink-0"
              style={{ borderColor: ticketColor }}
            />
          ) : (
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gray-800 border-2 border-dashed border-gray-600 flex-shrink-0 cursor-pointer hover:border-gray-500 transition-colors"
              onClick={() => photoInputRef.current?.click()}
            >
              <Camera className="w-6 h-6 text-gray-500" />
            </div>
          )}
          <div className="min-w-0">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Attendee
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white truncate">
              {registration.full_name}
            </h3>
            {registration.role && (
              <p className="text-gray-400 mt-1">{registration.role}</p>
            )}
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider">
              Date
            </p>
            <p className="text-white font-medium">April 25, 2026</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider">
              Location
            </p>
            <p className="text-white font-medium">FUNAAB, Abeokuta</p>
          </div>
        </div>

        {/* Event Banner */}
        <div className="py-3 px-5 bg-gradient-to-r from-[#1FAE63]/20 via-transparent to-[#E53935]/20 rounded-xl border border-gray-700/50 mb-6">
          <p className="text-gray-400 text-sm">I'm attending</p>
          <p className="text-xl font-bold text-white">
            G-SPARK SUMMIT <span className="text-[#1FAE63]">1.0</span>
          </p>
        </div>

        {/* QR Code + Ticket ID */}
        <div className="flex items-end justify-between">
          <div className="bg-white p-3 rounded-xl">
            <QRCodeSVG value={qrData} size={96} level="M" />
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Ticket ID
            </p>
            <p className="text-white font-mono text-sm font-semibold">
              {ticketId}
            </p>
            <p className="text-gray-600 text-xs mt-1">Scan QR to verify</p>
          </div>
        </div>
      </div>

      {/* Photo Upload */}
      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        className="hidden"
      />
      <button
        onClick={() => photoInputRef.current?.click()}
        className="w-full flex items-center justify-center gap-2 mt-6 px-5 py-3 bg-gray-800/50 hover:bg-gray-800 text-gray-400 hover:text-white rounded-xl font-medium transition-all border border-dashed border-gray-700"
      >
        <Camera className="w-4 h-4" />
        {photo ? "Change Photo" : "Add Your Photo"}
      </button>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-3">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1FAE63] hover:bg-[#178F52] disabled:opacity-60 text-white rounded-xl font-medium transition-all"
        >
          <Download className="w-4 h-4" />
          {downloading ? "Saving..." : "Download Ticket"}
        </button>
        <div className="relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex items-center justify-center gap-2 px-5 py-3.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-all border border-gray-700"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>

          {/* Share dropdown */}
          {showShareMenu && (
            <div className="absolute bottom-full mb-2 right-0 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-white text-sm font-medium">
                  Share on
                </span>
                <button
                  onClick={() => setShowShareMenu(false)}
                  className="text-gray-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {SHARE_PLATFORMS.map((platform) => (
                <button
                  key={platform.name}
                  onClick={() => {
                    window.open(platform.getUrl(shareText), "_blank")
                    setShowShareMenu(false)
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors text-left"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-lg text-white text-sm font-bold">
                    {platform.icon}
                  </span>
                  <span className="text-gray-300 text-sm">
                    {platform.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
