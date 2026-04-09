"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Suspense } from "react"
import { Loader2 } from "lucide-react"
import { EventTicket } from "@/components/event-ticket"
import { generateTicketId } from "@/lib/supabase"

function TicketContent() {
  const searchParams = useSearchParams()
  const initialName = searchParams.get("name") || searchParams.get("full_name") || ""
  const [displayName, setDisplayName] = useState(initialName)
  const [ticketId, setTicketId] = useState(() => generateTicketId())
  const [loading] = useState(false)

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto mb-4 h-10 w-10 animate-spin text-[#1FAE63]" />
          <p className="text-gray-400">Loading your ticket...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] py-12 px-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto mb-8 max-w-lg text-center">
        <Link href="/" className="mb-6 inline-block">
          <img src="/g-spark-logo.png" alt="G-SPARK" className="mx-auto h-10" />
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
          Your Event Ticket
        </h1>
        <p className="text-gray-400">
          Download or share your ticket for G-SPARK SUMMIT 1.0
        </p>
      </div>

      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-8">
        <label className="block text-sm font-medium text-white/80">Name on ticket</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Enter your name"
          className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#1FAE63]/50 focus:bg-white/[0.07]"
        />
        <p className="mt-2 text-xs leading-6 text-white/45">
          This only updates the name shown on your ticket. Nothing is stored here.
        </p>

        <div className="mt-6">
          <EventTicket
            displayName={displayName.trim()}
            ticketId={ticketId}
            onRegenerate={() => setTicketId(generateTicketId())}
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-gray-500 transition-colors hover:text-[#1FAE63]">
          Back to G-SPARK SUMMIT
        </Link>
      </div>
    </div>
  )
}

export default function TicketPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-[#1FAE63]" />
        </div>
      }
    >
      <TicketContent />
    </Suspense>
  )
}