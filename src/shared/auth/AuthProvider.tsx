import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { clearAuthUser, createMockUserId, getAuthUser, setAuthUser, type AuthUser } from './mockAuth'
import {
  getSupabaseAuthUser,
  isSupabaseConfigured,
  onSupabaseAuthStateChange,
  signInWithGoogle,
  signInWithPassword,
  signOutSupabase,
  signUpWithPassword,
} from './supabaseAuth'
import type { Locale } from '../i18n/messages'

type AuthContextValue = {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  isSupabaseMode: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signInWithGoogle: (locale: Locale) => Promise<void>
  signOut: () => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<AuthUser | null>(getAuthUser())
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured)

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setIsLoading(false)
      return
    }

    let isMounted = true
    getSupabaseAuthUser()
      .then((nextUser) => {
        if (!isMounted) return
        if (nextUser) {
          setAuthUser(nextUser)
        } else {
          clearAuthUser()
        }
        setUserState(nextUser)
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false)
        }
      })

    const unsubscribe = onSupabaseAuthStateChange((nextUser) => {
      if (nextUser) {
        setAuthUser(nextUser)
      } else {
        clearAuthUser()
      }
      setUserState(nextUser)
      setIsLoading(false)
    })

    return () => {
      isMounted = false
      unsubscribe()
    }
  }, [])

  const value = useMemo<AuthContextValue>(() => ({
    user,
    isAuthenticated: Boolean(user),
    isLoading,
    isSupabaseMode: isSupabaseConfigured,
    async signIn(email, password) {
      if (isSupabaseConfigured) {
        const nextUser = await signInWithPassword(email, password)
        setAuthUser(nextUser)
        setUserState(nextUser)
        return
      }

      const nextUser: AuthUser = {
        id: createMockUserId(email, 'password'),
        email,
        name: email.split('@')[0] || 'User',
        provider: 'password',
      }
      setAuthUser(nextUser)
      setUserState(nextUser)
    },
    async signUp(name, email, password) {
      if (isSupabaseConfigured) {
        const nextUser = await signUpWithPassword(name, email, password)
        if (nextUser) {
          setAuthUser(nextUser)
          setUserState(nextUser)
        }
        return
      }

      const nextUser: AuthUser = {
        id: createMockUserId(email, 'password'),
        email,
        name,
        provider: 'password',
      }
      setAuthUser(nextUser)
      setUserState(nextUser)
    },
    async signInWithGoogle(locale) {
      if (isSupabaseConfigured) {
        await signInWithGoogle(locale)
        return
      }

      const nextUser: AuthUser = {
        id: createMockUserId('google.user@bidbidders.com', 'google'),
        email: 'google.user@bidbidders.com',
        name: 'Google User',
        provider: 'google',
      }
      setAuthUser(nextUser)
      setUserState(nextUser)
    },
    async signOut() {
      if (isSupabaseConfigured) {
        await signOutSupabase()
      }
      clearAuthUser()
      setUserState(null)
    },
    async refreshUser() {
      if (!isSupabaseConfigured) {
        setUserState(getAuthUser())
        return
      }

      const nextUser = await getSupabaseAuthUser()
      if (nextUser) {
        setAuthUser(nextUser)
      } else {
        clearAuthUser()
      }
      setUserState(nextUser)
    },
  }), [isLoading, user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}