"use client"

import { useEffect, useState, useCallback } from "react"
import { supabase, type Registration } from "@/lib/supabase"
import {
  Search,
  RefreshCw,
  CheckCircle,
  XCircle,
  Users,
  UserCheck,
  Ticket,
  Loader2,
  LogIn,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const ADMIN_PASSWORD = "gspark2026admin"

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState("")

  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [filterCheckedIn, setFilterCheckedIn] = useState<string>("all")
  const [sortField, setSortField] = useState<string>("created_at")
  const [sortAsc, setSortAsc] = useState(false)
  const [checkingIn, setCheckingIn] = useState<string | null>(null)

  const fetchRegistrations = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      setRegistrations(data as Registration[])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (authenticated) fetchRegistrations()
  }, [authenticated, fetchRegistrations])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setAuthError("")
    } else {
      setAuthError("Incorrect password")
    }
  }

  const handleCheckIn = async (registration: Registration) => {
    if (!registration.id) return
    const newStatus = !registration.checked_in
    setCheckingIn(registration.id)

    const { error } = await supabase
      .from("registrations")
      .update({
        checked_in: newStatus,
        checked_in_at: newStatus ? new Date().toISOString() : null,
      })
      .eq("id", registration.id)

    if (!error) {
      setRegistrations((prev) =>
        prev.map((r) =>
          r.id === registration.id
            ? {
                ...r,
                checked_in: newStatus,
                checked_in_at: newStatus ? new Date().toISOString() : undefined,
              }
            : r
        )
      )
    }
    setCheckingIn(null)
  }

  // Filtering and sorting
  const filtered = registrations
    .filter((r) => {
      if (filterType !== "all" && r.ticket_type !== filterType) return false
      if (filterCheckedIn === "checked_in" && !r.checked_in) return false
      if (filterCheckedIn === "not_checked_in" && r.checked_in) return false
      if (search) {
        const q = search.toLowerCase()
        return (
          r.full_name?.toLowerCase().includes(q) ||
          r.email?.toLowerCase().includes(q) ||
          r.ticket_id?.toLowerCase().includes(q) ||
          r.phone?.toLowerCase().includes(q)
        )
      }
      return true
    })
    .sort((a, b) => {
      const aVal = (a as any)[sortField] ?? ""
      const bVal = (b as any)[sortField] ?? ""
      if (aVal < bVal) return sortAsc ? -1 : 1
      if (aVal > bVal) return sortAsc ? 1 : -1
      return 0
    })

  // Stats
  const totalRegistrations = registrations.length
  const checkedInCount = registrations.filter((r) => r.checked_in).length
  const ticketBreakdown = {
    student: registrations.filter((r) => r.ticket_type === "student").length,
    regular: registrations.filter((r) => r.ticket_type === "regular").length,
    vip: registrations.filter((r) => r.ticket_type === "vip").length,
  }

  const toggleSort = (field: string) => {
    if (sortField === field) {
      setSortAsc(!sortAsc)
    } else {
      setSortField(field)
      setSortAsc(true)
    }
  }

  const SortIcon = ({ field }: { field: string }) =>
    sortField === field ? (
      sortAsc ? (
        <ChevronUp className="w-3 h-3 inline ml-1" />
      ) : (
        <ChevronDown className="w-3 h-3 inline ml-1" />
      )
    ) : null

  // Login screen
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <img
              src="/g-spark-logo.png"
              alt="G-SPARK"
              className="h-10 mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">
              Enter password to access
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              className="w-full px-4 py-3.5 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#1FAE63] focus:ring-1 focus:ring-[#1FAE63] outline-none"
            />
            {authError && (
              <p className="text-[#E53935] text-sm text-center">{authError}</p>
            )}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-[#1FAE63] hover:bg-[#178F52] text-white rounded-xl font-semibold transition-all"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#0A0A0A]/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/g-spark-logo.png" alt="G-SPARK" className="h-8" />
            <span className="text-gray-500 text-sm font-medium">
              Admin Dashboard
            </span>
          </div>
          <button
            onClick={fetchRegistrations}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
          >
            <RefreshCw
              className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-gray-400 text-sm">Total</span>
            </div>
            <p className="text-3xl font-bold">{totalRegistrations}</p>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#1FAE63]/20 rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-[#1FAE63]" />
              </div>
              <span className="text-gray-400 text-sm">Checked In</span>
            </div>
            <p className="text-3xl font-bold">
              {checkedInCount}
              <span className="text-lg text-gray-500 ml-1">
                / {totalRegistrations}
              </span>
            </p>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#FFD700]/20 rounded-xl flex items-center justify-center">
                <Ticket className="w-5 h-5 text-[#FFD700]" />
              </div>
              <span className="text-gray-400 text-sm">VIP</span>
            </div>
            <p className="text-3xl font-bold">{ticketBreakdown.vip}</p>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Ticket className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-gray-400 text-sm">Regular / Student</span>
            </div>
            <p className="text-3xl font-bold">
              {ticketBreakdown.regular}
              <span className="text-lg text-gray-500 ml-1">
                / {ticketBreakdown.student}
              </span>
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name, email, ticket ID, or phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#1FAE63] focus:ring-1 focus:ring-[#1FAE63] outline-none text-sm"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white text-sm outline-none focus:border-[#1FAE63]"
          >
            <option value="all">All Tickets</option>
            <option value="student">Student</option>
            <option value="regular">Regular</option>
            <option value="vip">VIP</option>
          </select>
          <select
            value={filterCheckedIn}
            onChange={(e) => setFilterCheckedIn(e.target.value)}
            className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white text-sm outline-none focus:border-[#1FAE63]"
          >
            <option value="all">All Status</option>
            <option value="checked_in">Checked In</option>
            <option value="not_checked_in">Not Checked In</option>
          </select>
        </div>

        {/* Results count */}
        <p className="text-gray-500 text-sm mb-4">
          Showing {filtered.length} of {totalRegistrations} registrations
        </p>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-[#1FAE63] animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900/80 text-gray-400 text-left">
                  <th
                    className="px-4 py-3 font-medium cursor-pointer hover:text-white"
                    onClick={() => toggleSort("full_name")}
                  >
                    Name <SortIcon field="full_name" />
                  </th>
                  <th
                    className="px-4 py-3 font-medium cursor-pointer hover:text-white"
                    onClick={() => toggleSort("email")}
                  >
                    Email <SortIcon field="email" />
                  </th>
                  <th className="px-4 py-3 font-medium">Phone</th>
                  <th
                    className="px-4 py-3 font-medium cursor-pointer hover:text-white"
                    onClick={() => toggleSort("ticket_type")}
                  >
                    Ticket <SortIcon field="ticket_type" />
                  </th>
                  <th className="px-4 py-3 font-medium">Ticket ID</th>
                  <th
                    className="px-4 py-3 font-medium cursor-pointer hover:text-white"
                    onClick={() => toggleSort("created_at")}
                  >
                    Registered <SortIcon field="created_at" />
                  </th>
                  <th className="px-4 py-3 font-medium text-center">
                    Check-In
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-12 text-center text-gray-500"
                    >
                      No registrations found
                    </td>
                  </tr>
                ) : (
                  filtered.map((reg) => (
                    <tr
                      key={reg.id}
                      className={`hover:bg-gray-900/50 transition-colors ${
                        reg.checked_in ? "bg-[#1FAE63]/5" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div>
                          <p className="text-white font-medium">
                            {reg.full_name}
                          </p>
                          {reg.role && (
                            <p className="text-gray-500 text-xs">{reg.role}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-300">{reg.email}</td>
                      <td className="px-4 py-3 text-gray-300">
                        {reg.phone || "-"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                            reg.ticket_type === "vip"
                              ? "bg-[#FFD700]/20 text-[#FFD700]"
                              : reg.ticket_type === "student"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-[#1FAE63]/20 text-[#1FAE63]"
                          }`}
                        >
                          {reg.ticket_type?.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-gray-400 font-mono text-xs">
                          {reg.ticket_id || "-"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-400 text-xs">
                        {reg.created_at
                          ? new Date(reg.created_at).toLocaleDateString(
                              "en-NG",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                          : "-"}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => handleCheckIn(reg)}
                          disabled={checkingIn === reg.id}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            reg.checked_in
                              ? "bg-[#1FAE63]/20 text-[#1FAE63] hover:bg-[#E53935]/20 hover:text-[#E53935]"
                              : "bg-gray-800 text-gray-400 hover:bg-[#1FAE63]/20 hover:text-[#1FAE63]"
                          }`}
                        >
                          {checkingIn === reg.id ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : reg.checked_in ? (
                            <>
                              <CheckCircle className="w-3 h-3" />
                              Checked In
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3 h-3" />
                              Check In
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
