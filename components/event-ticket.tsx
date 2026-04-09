"use client"

import { useRef, useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Download, Share2, X, Camera } from "lucide-react"
import { toPng } from "html-to-image"
import { GDG_COMMUNITY_REGISTRATION_URL } from "@/lib/links"

interface EventTicketProps {
  displayName: string
  ticketId: string
  onRegenerate: () => void
}

export function EventTicket({ displayName, ticketId, onRegenerate }: EventTicketProps) {
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

  const ticketName = displayName || "Anonymous Attendee"
  const qrData = JSON.stringify({
    ticket_id: ticketId,
    name: ticketName,
    event: "G-SPARK SUMMIT 1.0",
    registration_url: GDG_COMMUNITY_REGISTRATION_URL,
  })

  const shareText = `I'm attending G-SPARK SUMMIT 1.0 at FUNAAB, Abeokuta on April 25, 2026. Join me and register at ${GDG_COMMUNITY_REGISTRATION_URL}`

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

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "G-SPARK SUMMIT 1.0",
          text: shareText,
          url: GDG_COMMUNITY_REGISTRATION_URL,
        })
        return
      }

      await navigator.clipboard.writeText(`${shareText}\n${GDG_COMMUNITY_REGISTRATION_URL}`)
      alert("Ticket link copied to clipboard.")
    } catch {
      alert("Sharing was not available. Copy the registration link and share it manually.")
    }
  }

  return (
    <div className="mx-auto w-full max-w-lg">
      <div
        ref={ticketRef}
        className="relative overflow-hidden rounded-3xl border border-gray-800 bg-linear-to-br from-gray-900 via-gray-900 to-gray-800 p-6 text-white sm:p-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <img src="/g-spark-logo.png" alt="G-SPARK" className="h-8 sm:h-10" />
          <div className="flex items-center gap-2 rounded-full border border-[#1FAE63]/25 bg-[#1FAE63]/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#1FAE63]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1FAE63]">Ticket Pass</span>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-4">
          {photo ? (
            <img
              src={photo}
              alt={ticketName}
              className="h-16 w-16 shrink-0 rounded-full border-2 object-cover sm:h-20 sm:w-20"
            />
          ) : (
            <div
              className="flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-gray-600 bg-gray-800/50 transition-colors hover:border-gray-500 sm:h-20 sm:w-20"
              onClick={() => photoInputRef.current?.click()}
            >
              <Camera className="h-6 w-6 text-gray-500" />
            </div>
          )}
          <div className="min-w-0">
            <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">Attendee</p>
            <h3 className="truncate text-2xl font-bold text-white sm:text-3xl">{ticketName}</h3>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">Date</p>
            <p className="font-medium text-white">April 25, 2026</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">Location</p>
            <p className="font-medium text-white">FUNAAB, Abeokuta</p>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-gray-700/50 bg-linear-to-r from-[#1FAE63]/20 via-transparent to-[#E53935]/20 px-5 py-3">
          <p className="text-sm text-gray-400">I'm attending</p>
          <p className="text-xl font-bold text-white">
            G-SPARK SUMMIT <span className="text-[#1FAE63]">1.0</span>
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="rounded-xl bg-white p-3">
            <QRCodeSVG value={qrData} size={96} level="M" />
          </div>
          <div className="text-right">
            <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">Ticket ID</p>
            <p className="font-mono text-sm font-semibold text-white">{ticketId}</p>
            <p className="mt-1 text-xs text-gray-600">Scan QR to verify</p>
          </div>
        </div>

        <input
          ref={photoInputRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="hidden"
        />
      </div>

      <button
        onClick={() => photoInputRef.current?.click()}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-gray-700 bg-gray-800/50 px-5 py-3 font-medium text-gray-400 transition-all hover:bg-gray-800 hover:text-white"
      >
        <Camera className="h-4 w-4" />
        {photo ? "Change Photo" : "Add Your Photo"}
      </button>

      <div className="mt-3 flex gap-3">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex-1 rounded-xl bg-[#1FAE63] px-5 py-3.5 font-medium text-white transition-all hover:bg-[#178F52] disabled:opacity-60"
        >
          <span className="inline-flex items-center justify-center gap-2">
            <Download className="h-4 w-4" />
            {downloading ? "Saving..." : "Download Ticket"}
          </span>
        </button>
        <div className="relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-5 py-3.5 font-medium text-white transition-all hover:bg-gray-700"
          >
            <Share2 className="h-4 w-4" />
            Share
          </button>

          {showShareMenu && (
            <div className="absolute bottom-full right-0 z-50 mb-2 w-56 overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl">
              <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                <span className="text-sm font-medium text-white">Share on</span>
                <button onClick={() => setShowShareMenu(false)} className="text-gray-500 hover:text-white">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => {
                  handleShare()
                  setShowShareMenu(false)
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-800"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 text-sm font-bold text-white">
                  Link
                </span>
                <span className="text-sm text-gray-300">Copy / Share link</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={onRegenerate}
        className="mt-3 w-full rounded-xl border border-gray-700 bg-gray-800 px-5 py-3.5 font-medium text-white transition-all hover:bg-gray-700"
      >
        Regenerate ID
      </button>
    </div>
  )
}
