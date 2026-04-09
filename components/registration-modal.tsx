"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { X, User, Mail, Phone, Briefcase, Ticket, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase, generateTicketId } from "@/lib/supabase"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

const ticketTypes = [
  { id: "student", name: "Student", price: "Free", description: "Valid student ID required" },
  { id: "regular", name: "Regular", price: "₦5,000", description: "General admission" },
  { id: "vip", name: "VIP", price: "₦15,000", description: "Front row + exclusive networking" },
]

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    role: "",
    ticket_type: "regular" as "student" | "regular" | "vip",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const ticket_id = generateTicketId()
      const { error: supabaseError } = await supabase
        .from("registrations")
        .insert([{ ...formData, ticket_id }])

      if (supabaseError) {
        if (supabaseError.code === "23505") {
          setError("This email is already registered!")
        } else {
          setError(supabaseError.message)
        }
        setIsLoading(false)
        return
      }

      setIsSuccess(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setFormData({
      full_name: "",
      email: "",
      phone: "",
      role: "",
      ticket_type: "regular",
    })
    setIsSuccess(false)
    setError("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-primary p-6 text-primary-foreground">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold">Register for G-SPARK</h2>
          <p className="text-primary-foreground/80 mt-1">April 25, 2026 • FUNAAB, Abeokuta</p>
        </div>

        {isSuccess ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">You're Registered! 🎉</h3>
            <p className="text-muted-foreground mb-6">
              Check your email for confirmation details. We can't wait to see you at G-SPARK SUMMIT!
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => router.push(`/ticket`)}
                className="w-full py-6 bg-[#1FAE63] hover:bg-[#178F52]"
              >
                View & Download Your Ticket
              </Button>
              <Button onClick={handleClose} variant="outline" className="w-full py-6">
                Done
              </Button>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  required
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234 800 000 0000"
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Role</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g., Software Developer, Student"
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </div>

            {/* Ticket Type */}
            <div>
              <label className="block text-sm font-medium mb-3">Ticket Type *</label>
              <div className="grid grid-cols-3 gap-3">
                {ticketTypes.map((ticket) => (
                  <button
                    key={ticket.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, ticket_type: ticket.id as any })}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      formData.ticket_type === ticket.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <p className="font-semibold text-sm">{ticket.name}</p>
                    <p className="text-primary font-bold">{ticket.price}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-6 text-lg font-semibold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Registering...
                </>
              ) : (
                <>
                  <Ticket className="w-5 h-5 mr-2" />
                  Complete Registration
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By registering, you agree to receive updates about G-SPARK SUMMIT.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
