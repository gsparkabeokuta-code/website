"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ImageIcon, X, Sparkles, Zap, ArrowRight } from "lucide-react"

export function AttendanceCard() {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [photo, setPhoto] = useState<string | null>(null)
  const [isGenerated, setIsGenerated] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB")
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => setPhoto(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = () => {
    if (!name.trim()) {
      alert("Please enter your name")
      return
    }
    setIsGenerated(true)
  }

  const handleReset = () => {
    setName("")
    setRole("")
    setPhoto(null)
    setIsGenerated(false)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const handleShare = () => {
    const text = `⚡ I'm attending G-SPARK SUMMIT 1.0!\n\nNigeria's Premier Tech Summit 🇳🇬\n\n📅 April 25, 2026\n📍 FUNAAB, Abeokuta\n\nSee you there! 🚀\n\n#GSPARK #TechSummit #AfricaTech`
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1FAE63 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#1FAE63]/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E53935]/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1FAE63]/10 border border-[#1FAE63]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#1FAE63]" />
            <span className="text-[#1FAE63] text-sm font-medium">Create Your Pass</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Get Your <span className="text-[#1FAE63]">Spark</span> Pass
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            Generate your personalized event pass and share it with the community
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Form - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Photo Upload */}
            <div 
              className="relative group cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className={`
                w-full aspect-square rounded-2xl border-2 border-dashed 
                flex flex-col items-center justify-center
                transition-all duration-300
                ${photo 
                  ? "border-[#1FAE63] bg-[#1FAE63]/5" 
                  : "border-gray-700 hover:border-[#1FAE63]/50 bg-gray-900/50"
                }
              `}>
                {photo ? (
                  <div className="relative w-full h-full p-4">
                    <img 
                      src={photo} 
                      alt="Your photo" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setPhoto(null)
                      }}
                      className="absolute top-6 right-6 bg-[#E53935] text-white p-2 rounded-full hover:bg-[#E53935]/80 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#1FAE63]/20 transition-colors">
                      <ImageIcon className="w-8 h-8 text-gray-500 group-hover:text-[#1FAE63] transition-colors" />
                    </div>
                    <p className="text-gray-400 font-medium">Click to upload photo</p>
                    <p className="text-gray-600 text-sm mt-1">PNG, JPG up to 5MB</p>
                  </>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-4 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:border-[#1FAE63] focus:ring-1 focus:ring-[#1FAE63] outline-none transition-all"
              />
            </div>

            {/* Role Input */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">Your Role (Optional)</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g., Software Developer"
                className="w-full px-4 py-4 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:border-[#1FAE63] focus:ring-1 focus:ring-[#1FAE63] outline-none transition-all"
              />
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              className="w-full bg-[#1FAE63] hover:bg-[#178F52] text-white py-6 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#1FAE63]/20"
            >
              Generate My Pass
              <Zap className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Preview Card - 3 columns */}
          <div className="lg:col-span-3">
            <div className={`
              relative rounded-3xl overflow-hidden
              transition-all duration-500
              ${isGenerated ? "scale-100" : "scale-95 opacity-80"}
            `}>
              {/* Card Background */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-800 rounded-3xl p-8">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <img src="/g-spark-logo.png" alt="G-SPARK" className="h-10" />
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1FAE63]/10 border border-[#1FAE63]/30 rounded-full">
                    <span className="w-2 h-2 bg-[#1FAE63] rounded-full animate-pulse" />
                    <span className="text-[#1FAE63] text-xs font-medium uppercase tracking-wider">VIP Pass</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex gap-6">
                  {/* Photo */}
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-800 border-2 border-gray-700 flex-shrink-0">
                    {photo ? (
                      <img src={photo} alt="Attendee" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="w-10 h-10 text-gray-600" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-500 text-sm mb-1">Attendee</p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white truncate">
                      {name || "Your Name"}
                    </h3>
                    <p className="text-gray-400 mt-1 truncate">
                      {role || "Tech Enthusiast"}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-500 text-xs uppercase tracking-wider">Date</p>
                          <p className="text-white font-medium">April 25, 2026</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs uppercase tracking-wider">Location</p>
                          <p className="text-white font-medium">FUNAAB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Name Banner */}
                <div className="mt-8 py-4 px-6 bg-gradient-to-r from-[#1FAE63]/20 via-transparent to-[#E53935]/20 rounded-xl border border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">I'm attending</p>
                      <p className="text-2xl font-bold text-white">G-SPARK SUMMIT <span className="text-[#1FAE63]">1.0</span></p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-xs">Nigeria's Premier</p>
                      <p className="text-[#1FAE63] font-semibold">Tech Summit</p>
                    </div>
                  </div>
                </div>

                {/* QR-like pattern decoration */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-8 rounded-full"
                        style={{
                          backgroundColor: i % 2 === 0 ? "#1FAE63" : "#E53935",
                          opacity: 0.3 + (i * 0.1),
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs font-mono">GSPARK-2026-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {isGenerated && (
              <div className="flex gap-4 mt-6">
                <Button
                  onClick={handleShare}
                  className="flex-1 bg-white hover:bg-gray-100 text-gray-900 py-5 rounded-xl font-medium"
                >
                  Share on 𝕏
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="px-6 py-5 rounded-xl border-gray-700 text-gray-400 hover:text-white hover:border-gray-600"
                >
                  Reset
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
      
      </div>
    </section>
  )
}
