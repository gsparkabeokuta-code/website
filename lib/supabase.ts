import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

let _supabase: SupabaseClient | null = null

export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    if (!_supabase) {
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error(
          'Supabase environment variables are not set. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment.'
        )
      }
      _supabase = createClient(supabaseUrl, supabaseAnonKey)
    }
    return (_supabase as any)[prop]
  },
})

export type Registration = {
  id?: string
  created_at?: string
  full_name: string
  email: string
  phone?: string
  role?: string
  ticket_type: 'student' | 'regular' | 'vip'
  status?: 'pending' | 'confirmed' | 'cancelled'
  ticket_id?: string
  checked_in?: boolean
  checked_in_at?: string
  job_title?: string
  organization?: string
  track?: string
  source?: string
}

export function generateTicketId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let id = 'GSPARK-'
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return id
}
