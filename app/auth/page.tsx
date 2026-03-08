'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

const GENRES = [
  { label: 'Sci-Fi', emoji: '🚀' }, { label: 'Fantasy', emoji: '🧙' },
  { label: 'Mystery', emoji: '🕵️' }, { label: 'Romance', emoji: '💘' },
  { label: 'Psychology', emoji: '🧠' }, { label: 'History', emoji: '🏛️' },
  { label: 'Business', emoji: '💼' }, { label: 'Philosophy', emoji: '🔮' },
  { label: 'True Crime', emoji: '🔪' }, { label: 'Self-Help', emoji: '⚡' },
  { label: 'Technology', emoji: '💻' }, { label: 'Art', emoji: '🎨' },
]

export default function AuthPage() {
  const router = useRouter()
  const { signIn, signUp } = useAuth()
  const [mode, setMode] = useState<'login' | 'signup'>('signup')
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [genres, setGenres] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleGenre = (g: string) =>
    setGenres(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g])

  const handleSubmit = async () => {
    setError('')
    if (mode === 'signup' && step === 1) { setStep(2); return }
    setLoading(true)
    try {
      if (mode === 'signup') {
        await signUp({ email, password, name, genres })
      } else {
        await signIn({ email, password })
      }
      window.location.href = '/dashboard'
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#12122A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 20px', fontFamily: 'Outfit, sans-serif', color: '#F0EFFF', position: 'relative' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; }`}</style>

      {/* Background glow */}
      <div style={{ position: 'fixed', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(123,92,246,0.15) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      {/* Back button */}
      <button onClick={() => router.push('/')} style={{ position: 'absolute', top: 28, left: 32, background: 'transparent', border: 'none', color: '#9490B5', fontSize: 14, cursor: 'pointer', fontFamily: 'Outfit, sans-serif', display: 'flex', alignItems: 'center', gap: 6 }}>
        ← Back
      </button>

      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: 32, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#7B5CF6,#5B3CD6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>✦</div>
          <span style={{ fontWeight: 800, fontSize: 24, letterSpacing: -0.5 }}>Genrify</span>
        </div>
        <p style={{ fontSize: 14, color: '#9490B5' }}>Your AI-powered content universe</p>
      </div>

      {/* Card */}
      <div style={{ width: '100%', maxWidth: 420, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: '32px 28px', position: 'relative', zIndex: 2 }}>

        {step === 1 && (
          <>
            <h2 style={{ fontWeight: 800, fontSize: 22, marginBottom: 4 }}>
              {mode === 'signup' ? 'Create your account' : 'Welcome back'}
            </h2>
            <p style={{ fontSize: 13, color: '#9490B5', marginBottom: 24 }}>
              {mode === 'signup' ? 'Start discovering content tailored to you' : 'Sign in to continue your journey'}
            </p>

            {mode === 'signup' && (
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12, color: '#9490B5', display: 'block', marginBottom: 6, fontWeight: 500 }}>Name</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 10, padding: '11px 14px', color: '#F0EFFF', fontSize: 14, outline: 'none', fontFamily: 'Outfit, sans-serif' }} />
              </div>
            )}

            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 12, color: '#9490B5', display: 'block', marginBottom: 6, fontWeight: 500 }}>Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" type="email"
                style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 10, padding: '11px 14px', color: '#F0EFFF', fontSize: 14, outline: 'none', fontFamily: 'Outfit, sans-serif' }} />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 12, color: '#9490B5', display: 'block', marginBottom: 6, fontWeight: 500 }}>Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Min. 8 characters" type="password"
                style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 10, padding: '11px 14px', color: '#F0EFFF', fontSize: 14, outline: 'none', fontFamily: 'Outfit, sans-serif' }} />
            </div>

            {error && <p style={{ color: '#FCA5A5', fontSize: 13, marginBottom: 14, background: 'rgba(239,68,68,0.1)', padding: '10px 14px', borderRadius: 8 }}>{error}</p>}

            <button onClick={handleSubmit} disabled={loading}
              style={{ width: '100%', background: 'linear-gradient(135deg,#7B5CF6,#5B3CD6)', border: 'none', borderRadius: 12, padding: '13px 0', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'Outfit, sans-serif', marginBottom: 10 }}>
              {loading ? 'Loading...' : mode === 'signup' ? 'Continue →' : 'Sign In'}
            </button>

            <button onClick={async () => {
  const { supabase } = await import('@/lib/supabase')
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${window.location.origin}/dashboard` }
  })
}}
style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '11px 0', color: '#F0EFFF', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
  <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
  Continue with Google
</button>
<button onClick={() => { setMode(m => m === 'signup' ? 'login' : 'signup'); setError('') }}
              style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '11px 0', color: '#9490B5', fontSize: 14, cursor: 'pointer', fontFamily: 'Outfit, sans-serif' }}>
              {mode === 'signup' ? 'Already have an account? Log in' : 'New to Genrify? Sign up'}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 style={{ fontWeight: 800, fontSize: 22, marginBottom: 4 }}>What do you love?</h2>
            <p style={{ fontSize: 13, color: '#9490B5', marginBottom: 22 }}>Pick genres to personalize your feed</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 24 }}>
              {GENRES.map(g => {
                const sel = genres.includes(g.label)
                return (
                  <button key={g.label} onClick={() => toggleGenre(g.label)}
                    style={{ background: sel ? 'rgba(123,92,246,0.18)' : 'rgba(255,255,255,0.03)', border: `1px solid ${sel ? 'rgba(123,92,246,0.5)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 12, padding: '10px 4px', cursor: 'pointer', color: sel ? '#9B7CFF' : '#9490B5', fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: sel ? 700 : 400, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                    <span style={{ fontSize: 20 }}>{g.emoji}</span>
                    {g.label}
                  </button>
                )
              })}
            </div>

            {error && <p style={{ color: '#FCA5A5', fontSize: 13, marginBottom: 14, background: 'rgba(239,68,68,0.1)', padding: '10px 14px', borderRadius: 8 }}>{error}</p>}

            <button onClick={handleSubmit} disabled={loading}
              style={{ width: '100%', background: 'linear-gradient(135deg,#7B5CF6,#5B3CD6)', border: 'none', borderRadius: 12, padding: '13px 0', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'Outfit, sans-serif' }}>
              {loading ? 'Setting up your feed...' : `Get Started${genres.length > 0 ? ` (${genres.length} genres)` : ''} →`}
            </button>
          </>
        )}
      </div>
    </div>
  )
}