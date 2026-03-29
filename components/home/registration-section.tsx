"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, ChevronUp, Loader2, CheckCircle } from "lucide-react"
import { supabase, generateTicketId } from "@/lib/supabase"

/* ─── Corner spark pattern (reusable) ─── */
function CornerSparks() {
  const maskCls =
    "mask-[url('/bg-pattern.svg')] mask-center mask-no-repeat mask-contain [-webkit-mask-image:url('/bg-pattern.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"

  const spark = (extraCls: string, size: string) => (
    <span
      className={`absolute ${extraCls} ${size} bg-[#f2b4b2] opacity-60 ${maskCls}`}
      aria-hidden="true"
    />
  )

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Top-left cluster */}
      {spark("left-2 top-2 rotate-12", "h-16 w-16 sm:h-20 sm:w-20")}
      {spark("left-10 top-14 -rotate-6", "h-10 w-10 sm:h-14 sm:w-14")}
      {/* Top-right cluster */}
      {spark("right-2 top-2 -rotate-12", "h-16 w-16 sm:h-20 sm:w-20")}
      {spark("right-12 top-16 rotate-6", "h-10 w-10 sm:h-14 sm:w-14")}
      {/* Bottom-left cluster */}
      {spark("left-2 bottom-2 rotate-45", "h-16 w-16 sm:h-20 sm:w-20")}
      {spark("left-14 bottom-12 -rotate-12", "h-10 w-10 sm:h-14 sm:w-14")}
      {/* Bottom-right cluster */}
      {spark("right-2 bottom-2 -rotate-45", "h-16 w-16 sm:h-20 sm:w-20")}
      {spark("right-14 bottom-14 rotate-12", "h-10 w-10 sm:h-14 sm:w-14")}
    </div>
  )
}

/* ─── Custom dropdown select ─── */
type DropdownOption = { label: string; emoji?: string }

function CustomSelect({
  placeholder,
  options,
  value,
  onChange,
  openUp = false,
}: {
  placeholder: string
  options: DropdownOption[]
  value: string
  onChange: (v: string) => void
  openUp?: boolean
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selected = options.find((o) => o.label === value)

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3.5 sm:py-4 rounded-xl border bg-white text-left transition-all text-sm sm:text-base ${
          open
            ? "border-[#1FAE63] ring-2 ring-[#1FAE63]/20"
            : "border-[#E5E5E5] hover:border-[#ccc]"
        }`}
      >
        <span className={selected ? "text-[#2B2B2B] font-medium" : "text-[#8A8A8A]"}>
          {selected ? `${selected.emoji ? selected.emoji + " " : ""}${selected.label}` : placeholder}
        </span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-[#1FAE63] flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#1FAE63] flex-shrink-0" />
        )}
      </button>

      {open && (
        <div className={`absolute z-50 w-full rounded-2xl bg-[#C8C8C8] p-2.5 shadow-xl ${openUp ? "bottom-full mb-2" : "top-full mt-2"}`}>
          <div className="rounded-xl overflow-hidden">
            {options.map((option, i) => (
              <button
                key={option.label}
                type="button"
                onClick={() => {
                  onChange(option.label)
                  setOpen(false)
                }}
                className={`w-full text-left px-5 py-3.5 text-base sm:text-lg font-extrabold transition-colors ${
                  value === option.label
                    ? "bg-[#E53935] text-white"
                    : "bg-[#FAE5E4] text-[#E53935] hover:bg-[#f5d0cf]"
                } ${i < options.length - 1 ? "border-b border-[#eecfce]" : ""}`}
              >
                <span className="font-black mr-2">{i + 1}.</span>
                {option.emoji && <span className="mr-1">{option.emoji}</span>}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Track options ─── */
const trackOptions: DropdownOption[] = [
  { label: "Agritech", emoji: "🌾" },
  { label: "AI/ML", emoji: "🤖" },
  { label: "African Tech", emoji: "💻" },
  { label: "All of the above" },
]

const sourceOptions: DropdownOption[] = [
  { label: "Social Media" },
  { label: "Friend/Colleague" },
  { label: "Email" },
  { label: "Website" },
  { label: "Other" },
]

const roleOptions: DropdownOption[] = [
  { label: "Student" },
  { label: "Startup Founder" },
  { label: "Industry Professional" },
  { label: "Investor" },
  { label: "Other" },
]

/* ─── Main Registration Section ─── */
export function HomeRegistrationSection() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    job_title: "",
    organization: "",
    track: "",
    source: "",
    role: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (!formData.first_name.trim() || !formData.last_name.trim()) {
      setError("Please enter your first and last name.")
      return
    }
    if (!formData.email.trim()) {
      setError("Please enter your email address.")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.")
      return
    }
    if (!formData.phone.trim()) {
      setError("Please enter your phone number.")
      return
    }
    if (formData.phone.length < 10 || formData.phone.length > 11) {
      setError("Phone number must be 10-11 digits.")
      return
    }
    if (!formData.organization.trim()) {
      setError("Please enter your organization / company / school.")
      return
    }
    if (!formData.track) {
      setError("Please select a track.")
      return
    }
    if (!formData.role) {
      setError("Please select who you are.")
      return
    }

    setIsLoading(true)

    try {
      const ticket_id = generateTicketId()
      const { error: supabaseError } = await supabase
        .from("registrations")
        .insert([
          {
            full_name: `${formData.first_name} ${formData.last_name}`,
            email: formData.email,
            phone: formData.phone ? `+234${formData.phone}` : null,
            role: formData.role || null,
            ticket_type: "regular",
            ticket_id,
            job_title: formData.job_title || null,
            organization: formData.organization || null,
            track: formData.track || null,
            source: formData.source || null,
          },
        ])

      if (supabaseError) {
        if (supabaseError.code === "23505") {
          setError("This email is already registered! 🎉")
        } else {
          setError(supabaseError.message)
        }
        setIsLoading(false)
        return
      }

      setIsSuccess(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="register"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FCEAE9] overflow-hidden"
    >
      <CornerSparks />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 border border-[#E53935]/20 rounded-full text-sm font-semibold text-[#E53935]">
            ✿ Registration ✿
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl leading-tight mb-3 font-(--font-display-family)">
          <span className="text-[#2A3D34]">Secure a </span>
          <span className="text-[#E53935] italic">Seat</span>
        </h2>
        <p className="text-center text-[#4B4B4B] text-sm sm:text-base mb-10">
          Complete this form to successfully register for the summit
        </p>

        {isSuccess ? (
          /* ─── Success state ─── */
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg text-center">
            <div className="w-20 h-20 bg-[#1FAE63]/15 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#1FAE63]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2A3D34] mb-2">
              You're In, {formData.first_name}! 🎉
            </h3>
            <p className="text-[#4B4B4B] mb-6">
              Your registration is confirmed! We'll send a confirmation email shortly. See you at G-SPARK SUMMIT!
            </p>
            <div className="p-5 bg-[#FCEAE9] rounded-2xl">
              <p className="text-sm text-[#8A8A8A] mb-1">Attendee</p>
              <p className="text-lg font-bold text-[#2A3D34]">
                {formData.first_name} {formData.last_name}
              </p>
              <p className="text-sm text-[#4B4B4B] mt-1">{formData.track} Track</p>
              <div className="mt-3 pt-3 border-t border-[#E5E5E5]">
                <p className="text-[#4B4B4B] text-sm">📅 SAT. 16TH MAY'26 • 📍 FUNAAB, Abeokuta</p>
              </div>
            </div>
            <button
              onClick={() => router.push(`/ticket?email=${encodeURIComponent(formData.email)}`)}
              className="mt-6 w-full px-6 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              View & Download Your Ticket
            </button>
          </div>
        ) : (
          /* ─── Form ─── */
          <form onSubmit={handleSubmit}>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-5 sm:p-8 shadow-sm border border-white/80">
              <div className="space-y-4">
                {/* Row 1: First Name + Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={(e) => handleChange("first_name", e.target.value)}
                    className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-[#E5E5E5] bg-white text-[#2B2B2B] placeholder-[#8A8A8A] text-sm sm:text-base focus:border-[#1FAE63] focus:ring-2 focus:ring-[#1FAE63]/20 outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={(e) => handleChange("last_name", e.target.value)}
                    className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-[#E5E5E5] bg-white text-[#2B2B2B] placeholder-[#8A8A8A] text-sm sm:text-base focus:border-[#1FAE63] focus:ring-2 focus:ring-[#1FAE63]/20 outline-none transition-all"
                  />
                </div>

                {/* Row 2: Email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-[#E5E5E5] bg-white text-[#2B2B2B] placeholder-[#8A8A8A] text-sm sm:text-base focus:border-[#1FAE63] focus:ring-2 focus:ring-[#1FAE63]/20 outline-none transition-all"
                />

                {/* Row 3: Phone + Job Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                      <span className="inline-flex items-center gap-0.5">
                        <span className="inline-block w-2.5 h-4 rounded-sm bg-[#008751]" />
                        <span className="inline-block w-2.5 h-4 rounded-sm bg-white border border-[#E5E5E5]" />
                        <span className="inline-block w-2.5 h-4 rounded-sm bg-[#008751]" />
                      </span>
                      <span className="text-[#2B2B2B] text-sm font-medium">+234</span>
                    </div>
                    <input
                      type="tel"
                      placeholder=""
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "")
                        if (val.length <= 11) handleChange("phone", val)
                      }}
                      className="w-full pl-24 pr-4 py-3.5 sm:py-4 rounded-xl border border-[#E5E5E5] bg-white text-[#2B2B2B] placeholder-[#8A8A8A] text-sm sm:text-base focus:border-[#1FAE63] focus:ring-2 focus:ring-[#1FAE63]/20 outline-none transition-all"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={formData.job_title}
                    onChange={(e) => handleChange("job_title", e.target.value)}
                    className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-[#E5E5E5] bg-white text-[#2B2B2B] placeholder-[#8A8A8A] text-sm sm:text-base focus:border-[#1FAE63] focus:ring-2 focus:ring-[#1FAE63]/20 outline-none transition-all"
                  />
                </div>

                {/* Row 4: Organization */}
                <input
                  type="text"
                  placeholder="Organization / Company / School"
                  value={formData.organization}
                  onChange={(e) => handleChange("organization", e.target.value)}
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-[#E5E5E5] bg-white text-[#2B2B2B] placeholder-[#8A8A8A] text-sm sm:text-base focus:border-[#1FAE63] focus:ring-2 focus:ring-[#1FAE63]/20 outline-none transition-all"
                />

                {/* Row 5: Track interest */}
                <CustomSelect
                  placeholder="Which track interests you most?"
                  options={trackOptions}
                  value={formData.track}
                  onChange={(v) => handleChange("track", v)}
                />

                {/* Row 6: How did you hear */}
                <CustomSelect
                  placeholder="How did you hear about G-SPARK SUMMIT?"
                  options={sourceOptions}
                  value={formData.source}
                  onChange={(v) => handleChange("source", v)}
                />

                {/* Row 7: Who are you */}
                <CustomSelect
                  placeholder="Who are you?"
                  options={roleOptions}
                  value={formData.role}
                  onChange={(v) => handleChange("role", v)}
                  openUp
                />
              </div>

              {/* Error */}
              {error && (
                <div className="mt-4 p-3.5 bg-[#E53935]/10 border border-[#E53935]/20 rounded-xl text-[#E53935] text-sm font-medium text-center">
                  {error}
                </div>
              )}
            </div>

            {/* Submit button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={isLoading}
                className="px-10 py-3.5 bg-[#E53935] hover:bg-[#C62828] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm sm:text-base font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#E53935]/30 active:scale-95"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
