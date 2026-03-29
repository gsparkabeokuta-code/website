"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { supabase, type Registration } from "@/lib/supabase"
import { EventTicket } from "@/components/event-ticket"
import { Loader2, AlertCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

function TicketContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email")
  const [registration, setRegistration] = useState<Registration | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!email) {
      setError("No email provided. Please register first.")
      setLoading(false)
      return
    }

    async function fetchRegistration() {
      const { data, error: fetchError } = await supabase
        .from("registrations")
        .select("*")
        .eq("email", email)
        .single()

      if (fetchError || !data) {
        setError("Ticket not found. Please check your email or register first.")
        setLoading(false)
        return
      }

      setRegistration(data as Registration)
      setLoading(false)
    }

    fetchRegistration()
  }, [email])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-10 h-10 text-[#1FAE63] animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading your ticket...</p>
        </div>
      </div>
    )
  }

  if (error || !registration) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-[#E53935]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-[#E53935]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Ticket Not Found</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <Link
            href="/#register"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1FAE63] hover:bg-[#178F52] text-white rounded-xl font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Go to Registration
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] py-12 px-4">
      {/* Header */}
      <div className="max-w-lg mx-auto mb-8 text-center">
        <Link href="/" className="inline-block mb-6">
          <img src="/g-spark-logo.png" alt="G-SPARK" className="h-10 mx-auto" />
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Your Event Ticket
        </h1>
        <p className="text-gray-400">
          Download or share your ticket for G-SPARK SUMMIT 1.0
        </p>
      </div>

      <EventTicket registration={registration} />

      {/* Back link */}
      <div className="text-center mt-8">
        <Link
          href="/"
          className="text-gray-500 hover:text-[#1FAE63] text-sm transition-colors"
        >
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
          <Loader2 className="w-10 h-10 text-[#1FAE63] animate-spin" />
        </div>
      }
    >
      <TicketContent />
    </Suspense>
  )
}
