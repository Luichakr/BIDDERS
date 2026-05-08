import type { User } from '@supabase/supabase-js'
import type { Locale } from '../i18n/messages'
import type { AuthUser } from './mockAuth'
import { getAuthCallbackUrl } from './authRouting'
import { isSupabaseConfigured, supabaseClient } from './supabaseClient'

export { isSupabaseConfigured }

function mapSupabaseUser(user: User): AuthUser {
  const provider = user.app_metadata?.provider === 'google' ? 'google' : 'password'
  const userName = String(user.user_metadata?.full_name ?? user.user_metadata?.name ?? user.email?.split('@')[0] ?? 'User')

  return {
    id: user.id,
    name: userName,
    email: String(user.email ?? ''),
    provider,
  }
}

function requireSupabase() {
  if (!supabaseClient) {
    throw new Error('Supabase is not configured')
  }
  return supabaseClient
}

export async function getSupabaseAuthUser(): Promise<AuthUser | null> {
  if (!isSupabaseConfigured) return null
  const client = requireSupabase()
  const { data, error } = await client.auth.getUser()
  if (error) throw error
  if (!data.user) return null
  return mapSupabaseUser(data.user)
}

export async function signInWithPassword(email: string, password: string): Promise<AuthUser> {
  const client = requireSupabase()
  const { data, error } = await client.auth.signInWithPassword({ email, password })
  if (error) throw error
  if (!data.user) throw new Error('No user returned')
  return mapSupabaseUser(data.user)
}

export async function signUpWithPassword(name: string, email: string, password: string): Promise<AuthUser | null> {
  const client = requireSupabase()
  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  })
  if (error) throw error
  if (!data.user) return null
  return mapSupabaseUser(data.user)
}

export async function signInWithGoogle(locale: Locale): Promise<void> {
  const client = requireSupabase()
  const { error } = await client.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: getAuthCallbackUrl(locale),
    },
  })
  if (error) throw error
}

export async function signOutSupabase(): Promise<void> {
  if (!isSupabaseConfigured) return
  const client = requireSupabase()
  const { error } = await client.auth.signOut()
  if (error) throw error
}

export type UserProfile = {
  name: string
  phone: string
  company: string
}

export async function updateUserProfile(profile: Partial<UserProfile>): Promise<void> {
  const client = requireSupabase()
  const updateData: Record<string, string> = {}
  if (profile.name !== undefined) updateData.full_name = profile.name
  if (profile.phone !== undefined) updateData.phone = profile.phone
  if (profile.company !== undefined) updateData.company = profile.company
  const { error } = await client.auth.updateUser({ data: updateData })
  if (error) throw error
}

export async function getUserProfile(): Promise<UserProfile> {
  const client = requireSupabase()
  const { data, error } = await client.auth.getUser()
  if (error) throw error
  const meta = data.user?.user_metadata ?? {}
  return {
    name: String(meta.full_name ?? meta.name ?? ''),
    phone: String(meta.phone ?? ''),
    company: String(meta.company ?? ''),
  }
}

export function onSupabaseAuthStateChange(callback: (user: AuthUser | null) => void) {
  if (!supabaseClient) {
    return () => {}
  }

  const { data } = supabaseClient.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ? mapSupabaseUser(session.user) : null)
  })

  return () => {
    data.subscription.unsubscribe()
  }
}
