"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, Mail, Phone, Briefcase, Loader2, CheckCircle, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase, generateTicketId } from "@/lib/supabase"

const ticketTypes = [
  { 
    id: "student", 
    name: "Student", 
    price: "Free", 
    priceValue: 0,
    description: "Perfect for students",
    features: ["General admission", "Access to all sessions", "Networking", "Valid student ID required"]
  },
  { 
    id: "regular", 
    name: "Regular", 
    price: "₦5,000", 
    priceValue: 5000,
    description: "For professionals",
    features: ["General admission", "Access to all sessions", "Networking", "Event merchandise", "Lunch included"],
    popular: true
  },
  { 
    id: "vip", 
    name: "VIP", 
    price: "₦15,000", 
    priceValue: 15000,
    description: "The full experience",
    features: ["Front row seating", "Exclusive networking", "Meet the speakers", "VIP lounge access", "All meals included", "Certificate"]
  },
]

export function Registration() {
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

  const selectedTicket = ticketTypes.find(t => t.id === formData.ticket_type)

  return (
    <section id="register" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1FAE63]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E53935]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1FAE63]/10 border border-[#1FAE63]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#1FAE63]" />
            <span className="text-[#1FAE63] text-sm font-medium">Limited Spots Available</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Secure Your Spot
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Join 2,000+ innovators at Nigeria's premier tech summit
          </p>
        </div>

        {isSuccess ? (
          /* Success State */
          <div className="max-w-lg mx-auto text-center py-16">
            <div className="w-20 h-20 bg-[#1FAE63]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#1FAE63]" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">You're In, {formData.full_name.split(' ')[0]}! 🎉</h3>
            <p className="text-gray-400 text-lg mb-8">
              Your registration is confirmed! Save this page or take a screenshot. 
              We can't wait to see you at G-SPARK SUMMIT!
            </p>
            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
              <p className="text-gray-500 text-sm mb-1">Attendee</p>
              <p className="text-xl font-bold text-white mb-3">{formData.full_name}</p>
              <div className="border-t border-gray-700 pt-3 mt-3">
                <p className="text-gray-500 text-sm mb-1">Your ticket</p>
                <p className="text-2xl font-bold text-[#1FAE63]">{selectedTicket?.name} - {selectedTicket?.price}</p>
              </div>
              <p className="text-gray-400 mt-4 text-sm">📅 April 25, 2026 • 📍 FUNAAB, Abeokuta</p>
            </div>
            <Button
              onClick={() => router.push(`/ticket?email=${encodeURIComponent(formData.email)}`)}
              className="mt-6 w-full bg-[#1FAE63] hover:bg-[#178F52] text-white py-5 rounded-xl text-lg font-semibold"
            >
              View & Download Your Ticket
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Ticket Selection */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Choose Your Ticket</h3>
              <div className="space-y-4">
                {ticketTypes.map((ticket) => (
                  <button
                    key={ticket.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, ticket_type: ticket.id as any })}
                    className={`w-full p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                      formData.ticket_type === ticket.id
                        ? "border-[#1FAE63] bg-[#1FAE63]/5"
                        : "border-gray-800 bg-gray-900/30 hover:border-gray-700"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-semibold text-white">{ticket.name}</h4>
                          {ticket.popular && (
                            <span className="px-2 py-0.5 bg-[#1FAE63] text-white text-xs font-medium rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 text-sm">{ticket.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#1FAE63]">{ticket.price}</p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                      {ticket.features.map((feature, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#1FAE63] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">Your Details</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#1FAE63] focus:ring-1 focus:ring-[#1FAE63] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#1FAE63] focus:ring-1 focus:ring-[#1FAE63] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#1FAE63] focus:ring-1 focus:ring-[#1FAE63] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Your Role</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g., Software Developer"
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#1FAE63] focus:ring-1 focus:ring-[#1FAE63] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="p-4 bg-[#E53935]/10 border border-[#E53935]/20 rounded-xl text-[#E53935] text-sm">
                    {error}
                  </div>
                )}

                {/* Selected Ticket Summary */}
                <div className="p-4 bg-[#1FAE63]/10 border border-[#1FAE63]/20 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Selected ticket:</span>
                    <span className="text-white font-semibold">{selectedTicket?.name} - {selectedTicket?.price}</span>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#1FAE63] hover:bg-[#178F52] text-white py-6 rounded-xl text-lg font-semibold transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Registration
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By registering, you agree to receive updates about G-SPARK SUMMIT
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
