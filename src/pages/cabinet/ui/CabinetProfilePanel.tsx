import { type FormEvent, useEffect, useState } from 'react'
import { useAuth } from '../../../shared/auth/AuthProvider'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import type { UserProfile } from '../../../shared/auth/AuthProvider'

export function CabinetProfilePanel() {
  const { user, updateProfile } = useAuth()
  const { t } = useI18n()
  const [name, setName] = useState(user?.name ?? '')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState<'success' | 'error' | ''>('')

  // Load extended profile from Supabase user_metadata
  useEffect(() => {
    import('../../../shared/auth/supabaseAuth').then(({ getUserProfile, isSupabaseConfigured }) => {
      if (!isSupabaseConfigured) return
      getUserProfile().then(p => {
        setName(p.name || user?.name || '')
        setPhone(p.phone)
        setCompany(p.company)
      }).catch(() => {})
    })
  }, [user])

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setSaveMsg('')
    try {
      const profile: Partial<UserProfile> = {
        name: name.trim(),
        phone: phone.trim(),
        company: company.trim(),
      }
      await updateProfile(profile)
      setSaveMsg('success')
      setTimeout(() => setSaveMsg(''), 3000)
    } catch {
      setSaveMsg('error')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="cb-panel">
      <div className="cb-panel-head">
        <div>
          <h2>{t('profileTitle')}</h2>
          <p className="cb-panel-head-sub">{t('profileLead')}</p>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="cb-section">
          <div className="cb-grid-2">
            <div className="cb-field">
              <label>{t('profileNameLabel')}</label>
              <input value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="cb-field">
              <label>{t('profilePhoneLabel')}</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+48 000 000 000" />
            </div>
            <div className="cb-field">
              <label>{t('profileCompanyLabel')}</label>
              <input value={company} onChange={e => setCompany(e.target.value)} />
            </div>
            <div className="cb-field">
              <label>{t('profileEmailLabel')}</label>
              <input value={user?.email ?? ''} disabled style={{ opacity: 0.6 }} />
            </div>
          </div>
        </div>
        <div className="cb-panel-footer">
          <button type="submit" className="cb-btn cb-btn-primary" disabled={isSaving}>
            {t('profileSaveBtn')}
          </button>
          {saveMsg === 'success' && <span style={{ color: '#059669', fontWeight: 600, fontSize: '13px' }}>{t('profileSaveSuccess')}</span>}
          {saveMsg === 'error' && <span style={{ color: '#b42318', fontWeight: 600, fontSize: '13px' }}>{t('profileSaveError')}</span>}
        </div>
      </form>

      {/* Auth info section */}
      <div className="cb-section" style={{ borderTop: '1px solid #F1F5F9' }}>
        <div className="cb-section-title">Metoda logowania</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {user?.provider === 'google' ? (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 14px', borderRadius: '10px',
              background: 'rgba(66,133,244,0.08)', border: '1px solid rgba(66,133,244,0.2)',
              fontSize: '14px', fontWeight: 600, color: '#4285F4'
            }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </span>
          ) : (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 14px', borderRadius: '10px',
              background: 'rgba(15,23,42,0.06)', border: '1px solid rgba(15,23,42,0.12)',
              fontSize: '14px', fontWeight: 600, color: '#1B2A4A'
            }}>
              ✉ Email / Hasło
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
