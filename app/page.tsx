'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

export default function LandingPage() {
  const router = useRouter()
  const { isLoggedIn, loading } = useAuth()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!loading && isLoggedIn) router.push('/dashboard')
  }, [isLoggedIn, loading, router])

  return (
    <div style={{ minHeight: '100vh', background: '#12122A', color: '#F0EFFF', fontFamily: "'Outfit', sans-serif", overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(var(--r)); } 50% { transform: translateY(-12px) rotate(var(--r)); } }
      `}</style>

      {/* Background glow */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(123,92,246,0.2) 0%, transparent 65%)', filter: 'blur(40px)' }} />
      </div>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', background: scrolled ? 'rgba(13,13,31,0.9)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none', transition: 'all 0.3s' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#7B5CF6,#5B3CD6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>✦</div>
          <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: -0.5 }}>Genrify</span>
        </div>
        <div style={{ display: 'flex', gap: 36 }}>
          {['Features', 'Explore', 'About'].map(l => (
            <span key={l} style={{ fontSize: 15, color: '#9490B5', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => router.push('/auth')} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '9px 22px', color: '#F0EFFF', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit, sans-serif' }}>
            Log In
          </button>
          <button onClick={() => router.push('/auth')} style={{ background: 'linear-gradient(135deg,#7B5CF6,#5B3CD6)', border: 'none', borderRadius: 10, padding: '9px 22px', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'Outfit, sans-serif', boxShadow: '0 4px 20px rgba(123,92,246,0.35)' }}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, padding: '100px 20px 60px', textAlign: 'center' }}>

        {/* Floating cards left */}
        <div style={{ position: 'absolute', left: '5%', top: '15%', animation: 'float 6s ease-in-out infinite', '--r': '-12deg' } as React.CSSProperties}>
          <div style={{ background: 'rgba(20,18,50,0.9)', border: '1px solid rgba(123,92,246,0.3)', borderRadius: 16, padding: '12px', width: 160, backdropFilter: 'blur(20px)', transform: 'rotate(-12deg)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <img src="/Shawshank.jpg" alt="Shawshank" style={{ width: '100%', height: 90, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }} />
            <div style={{ fontSize: 9, background: 'rgba(245,158,11,0.2)', color: '#FCD34D', borderRadius: 4, padding: '2px 6px', display: 'inline-block', marginBottom: 6 }}>Movie</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#F0EFFF' }}>The Shawshank Redeemption</div>
            <div style={{ fontSize: 10, color: '#9490B5' }}>Crime/Drama</div>
            <div style={{ fontSize: 11, color: '#F59E0B', marginTop: 4 }}>★ 4.9</div>
          </div>
        </div>

        <div style={{ position: 'absolute', left: '6%', top: '55%', animation: 'float 7s ease-in-out infinite', '--r': '-15deg' } as React.CSSProperties}>
          <div style={{ background: 'rgba(20,18,50,0.9)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 15, padding: '30px', width: 155, backdropFilter: 'blur(20px)', transform: 'rotate(-5deg)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <img src="/The_Fountain_Head.jpg" alt="Fountainhead" style={{ width: '100%', height: 85, objectFit: 'cover', objectPosition: 'center top', borderRadius: 10, marginBottom: 10 }} />
            <div style={{ fontSize: 9, background: 'rgba(139,92,246,0.2)', color: '#C4B5FD', borderRadius: 4, padding: '2px 6px', display: 'inline-block', marginBottom: 6 }}>Book</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#F0EFFF' }}>The Fountainhead </div>
            <div style={{ fontSize: 10, color: '#9490B5' }}>Philosophical</div>
            <div style={{ fontSize: 11, color: '#F59E0B', marginTop: 4 }}>★ 4.8</div>
          </div>
        </div>

        {/* Floating cards right */}
        <div style={{ position: 'absolute', right: '5%', top: '15%', animation: 'float 5s ease-in-out infinite', '--r': '-15deg' } as React.CSSProperties}>
          <div style={{ background: 'rgba(20,18,50,0.9)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 16, padding: '12px', width: 165, backdropFilter: 'blur(20px)', transform: 'rotate(30deg)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <img src="https://image.tmdb.org/t/p/w200/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="Interstellar" style={{ width: '100%', height: 95, objectFit: 'cover', objectPosition: 'center 30%', borderRadius: 10, marginBottom: 10 }} />
            <div style={{ fontSize: 9, background: 'rgba(239,68,68,0.2)', color: '#FCA5A5', borderRadius: 4, padding: '2px 6px', display: 'inline-block', marginBottom: 6 }}>Music</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#F0EFFF' }}>"S.T.A.Y."</div>
            <div style={{ fontSize: 10, color: '#9490B5' }}>Ambient Music</div>
            <div style={{ fontSize: 11, color: '#F59E0B', marginTop: 4 }}>★ 4.5</div>
          </div>
        </div>

        <div style={{ position: 'absolute', right: '6%', top: '52%', animation: 'float 6.5s ease-in-out infinite', '--r': '-12deg' } as React.CSSProperties}>
          <div style={{ background: 'rgba(20,18,50,0.9)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 16, padding: '12px', width: 158, backdropFilter: 'blur(20px)', transform: 'rotate(22deg)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <img src="/curry.jpg" alt="Podcast" style={{ width: '100%', height: 100, objectFit: 'cover', objectPosition: 'center 60%', borderRadius: 10, marginBottom: 10 }} />
            <div style={{ fontSize: 9, background: 'rgba(230, 207, 131, 0.2)', color: '#FCD34D', borderRadius: 4, padding: '2px 6px', display: 'inline-block', marginBottom: 6 }}>Documentary</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#F0EFFF' }}>Curry & Cyanide</div>
            <div style={{ fontSize: 10, color: '#9490B5' }}>True Crime Documentaries</div>
            <div style={{ fontSize: 11, color: '#F59E0B', marginTop: 4 }}>★ 4.6</div>
          </div>
        </div>

        {/* AI pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(123,92,246,0.12)', border: '1px solid rgba(123,92,246,0.35)', borderRadius: 30, padding: '7px 18px', marginBottom: 40, animation: 'fadeUp 0.6s ease both' }}>
          <span>✦</span>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#9B7CFF', textTransform: 'uppercase' }}>AI-Powered Discovery</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontWeight: 900, fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05, letterSpacing: -2, marginBottom: 28, maxWidth: 860, animation: 'fadeUp 0.7s ease 0.1s both' }}>
          <span style={{ color: '#F0EFFF' }}>Every Genre. </span>
          <span style={{ background: 'linear-gradient(90deg,#9B7CFF,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Every<br />Format.</span>
          <br />
          <span style={{ color: '#F0EFFF' }}>Perfectly<br />Recommended.</span>
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 18, color: '#9490B5', maxWidth: 540, lineHeight: 1.65, marginBottom: 44, animation: 'fadeUp 0.7s ease 0.2s both' }}>
          Genrify intelligently connects books, movies, podcasts, and journals — personalized just for you through the power of AI.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, animation: 'fadeUp 0.7s ease 0.3s both' }}>
          <button onClick={() => router.push('/auth')} style={{ background: 'linear-gradient(135deg,#7B5CF6,#5B3CD6)', border: 'none', borderRadius: 12, padding: '15px 32px', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer', fontFamily: 'Outfit, sans-serif', boxShadow: '0 8px 32px rgba(123,92,246,0.35)', display: 'flex', alignItems: 'center', gap: 8 }}>
            Get Started <span>→</span>
          </button>
          <button onClick={() => router.push('/auth')} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '15px 32px', color: '#F0EFFF', fontSize: 16, fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit, sans-serif' }}>
            Explore Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 60px', position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#7B5CF6', fontWeight: 700, textTransform: 'uppercase', marginBottom: 12 }}>Why Genrify</div>
          <h2 style={{ fontWeight: 800, fontSize: 38, letterSpacing: -1 }}>One platform. Every story.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1100, margin: '0 auto' }}>
          {[
            { icon: '🧠', title: 'Learns Your Taste', desc: 'The more you like and save, the smarter your recommendations become.' },
            { icon: '🌐', title: 'Every Format', desc: 'Books, movies, podcasts, journals — all unified in one beautiful place.' },
            { icon: '🎯', title: 'Precision Matching', desc: 'Up to 98% match accuracy using AI that understands your unique taste.' },
          ].map(f => (
            <div key={f.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '28px 26px' }}>
              <div style={{ fontSize: 34, marginBottom: 14 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{f.title}</div>
              <div style={{ fontSize: 14, color: '#9490B5', lineHeight: 1.65 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}