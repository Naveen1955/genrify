'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

const GENRES = [
  {label:'Sci-Fi',emoji:'🚀'},{label:'Fantasy',emoji:'🧙'},
  {label:'Mystery',emoji:'🕵️'},{label:'Romance',emoji:'💘'},
  {label:'Psychology',emoji:'🧠'},{label:'History',emoji:'🏛️'},
  {label:'Business',emoji:'💼'},{label:'Technology',emoji:'💻'},
]

const CAT_STYLE: Record<string, {bg:string, color:string, border:string, dot:string}> = {
  Book:       {bg:'rgba(245,158,11,0.15)', color:'#FCD34D', border:'rgba(245,158,11,0.3)', dot:'#F59E0B'},
  Movie:      {bg:'rgba(239,68,68,0.15)',  color:'#FCA5A5', border:'rgba(239,68,68,0.3)',  dot:'#EF4444'},
  Podcast:    {bg:'rgba(139,92,246,0.15)', color:'#C4B5FD', border:'rgba(139,92,246,0.3)', dot:'#8B5CF6'},
  Journal:    {bg:'rgba(16,185,129,0.15)', color:'#6EE7B7', border:'rgba(16,185,129,0.3)', dot:'#10B981'},
  Documentary:{bg:'rgba(59,130,246,0.15)', color:'#93C5FD', border:'rgba(59,130,246,0.3)', dot:'#3B82F6'},
}

const OTT: Record<string, string[]> = {
  Book:       ['Kindle','Audible','Goodreads','Amazon','Open Library'],
  Movie:      ['Netflix','Prime Video','Disney+','Apple TV+','HBO Max','Hulu'],
  Podcast:    ['Spotify','YouTube','Apple Podcasts'],
  Journal:    ['JSTOR','PubMed','ResearchGate'],
  Documentary:['Netflix','YouTube','Disney+'],
}

interface ContentItem {
  title: string
  subtitle: string
  year?: string
  description: string
  tags: string[]
  rating: number
  match: number
  platforms: string[]
  external_url?: string
  top_pick?: boolean
  type?: string
}

function CatBadge({ type }: { type: string }) {
  const s = CAT_STYLE[type] || CAT_STYLE.Book
  return (
    <span style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, borderRadius: 5, padding: '2px 9px', fontSize: 10, fontWeight: 700, letterSpacing: 0.5, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      <span style={{ width: 4, height: 4, borderRadius: '50%', background: s.dot, display: 'inline-block' }} />
      {type}
    </span>
  )
}

function MatchPill({ match }: { match: number }) {
  const color = match >= 95 ? '#34D399' : match >= 88 ? '#FCD34D' : '#C4B5FD'
  const bg    = match >= 95 ? 'rgba(16,185,129,0.15)' : match >= 88 ? 'rgba(245,158,11,0.12)' : 'rgba(123,92,246,0.15)'
  return <span style={{ background: bg, color, border: `1px solid ${color}44`, borderRadius: 6, padding: '2px 9px', fontSize: 10, fontWeight: 700 }}>{match}% match</span>
}

function ContentCard({ item, type, saved, onSave, onLike, liked }: any) {
  const [exp, setExp] = useState(false)
  const [hov, setHov] = useState(false)
  const cs = CAT_STYLE[type] || CAT_STYLE.Book

  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.025)', border: `1px solid ${hov ? 'rgba(123,92,246,0.35)' : 'rgba(255,255,255,0.07)'}`, borderRadius: 18, overflow: 'hidden', transition: 'all 0.22s ease', transform: hov ? 'translateY(-3px)' : 'none', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ height: 3, background: `linear-gradient(90deg, ${cs.dot}, transparent)` }} />
      <div style={{ padding: '16px 16px 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          {/* Poster or initials */}
          {item.poster ? (
            <img src={item.poster} alt={item.title}
              style={{ width: 46, height: 64, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
          ) : (
            <div style={{ width: 46, height: 46, borderRadius: 10, background: `linear-gradient(135deg, ${cs.dot}88, ${cs.dot}44)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: 'rgba(255,255,255,0.8)' }}>
              {item.title?.split(' ').slice(0, 2).map((w: string) => w[0]).join('')}
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
            <MatchPill match={item.match} />
            <button onClick={() => onSave(item.title)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 15, opacity: saved ? 1 : 0.3, padding: 0 }}>🔖</button>
          </div>
        </div>

        <div style={{ marginBottom: 5 }}><CatBadge type={type} /></div>
        <div style={{ fontWeight: 700, fontSize: 14, color: '#F0EFFF', lineHeight: 1.3, marginBottom: 3 }}>{item.title}</div>
        <div style={{ fontSize: 11, color: '#6B7280', marginBottom: 6 }}>{item.subtitle}</div>
        <div style={{ fontSize: 12, color: '#9490B5', lineHeight: 1.5, marginBottom: 8 }}>{item.description}</div>

        {item.tags?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 10 }}>
            {item.tags.map((t: string) => (
              <span key={t} style={{ fontSize: 9, color: '#9490B5', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '2px 7px' }}>{t}</span>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
            <span style={{ color: '#F59E0B', fontSize: 11 }}>★</span>
            <span style={{ fontSize: 12, color: '#F0EFFF', fontWeight: 600 }}>{item.rating}</span>
          </span>
          <button onClick={() => setExp(!exp)} style={{ fontSize: 10, color: '#6B7280', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 6, padding: '3px 8px', cursor: 'pointer', fontFamily: 'Outfit, sans-serif' }}>
            {exp ? '▲ Hide' : '▼ Find it'}
          </button>
        </div>

        {/* Expanded — OTT / Links */}
        {exp && (
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            
            {/* Platforms */}
            {item.platforms?.length > 0 && (
              <>
                <div style={{ fontSize: 9, color: '#4B5563', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, marginBottom: 7 }}>
                  {type === 'Movie' || type === 'Documentary' ? 'Stream On' : type === 'Book' ? 'Read On' : 'Listen On'}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 8 }}>
                  {item.platforms.map((p: string) => (
                    <span key={p} style={{ background: 'rgba(123,92,246,0.08)', border: '1px solid rgba(123,92,246,0.2)', borderRadius: 6, padding: '3px 9px', fontSize: 10, color: '#9B7CFF', fontWeight: 500 }}>{p}</span>
                  ))}
                </div>
              </>
            )}

            {/* Book links */}
            {item.links && (
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 6 }}>
                {item.links.google && (
                  <a href={item.links.google} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 11, color: '#4285F4', fontWeight: 600, textDecoration: 'none', background: 'rgba(66,133,244,0.1)', border: '1px solid rgba(66,133,244,0.25)', borderRadius: 6, padding: '4px 10px' }}>
                    📖 Google Books
                  </a>
                )}
                {item.links.amazon && (
                  <a href={item.links.amazon} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 11, color: '#FF9900', fontWeight: 600, textDecoration: 'none', background: 'rgba(255,153,0,0.1)', border: '1px solid rgba(255,153,0,0.25)', borderRadius: 6, padding: '4px 10px' }}>
                    🛒 Amazon
                  </a>
                )}
                {item.links.goodreads && (
                  <a href={item.links.goodreads} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 11, color: '#F4C96A', fontWeight: 600, textDecoration: 'none', background: 'rgba(244,201,106,0.1)', border: '1px solid rgba(244,201,106,0.25)', borderRadius: 6, padding: '4px 10px' }}>
                    ⭐ Goodreads
                  </a>
                )}
              </div>
            )}

            {/* Movie / Podcast / Documentary watch link */}
            {item.external_url && !item.links && (
              <a href={item.external_url} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4, fontSize: 11, fontWeight: 700, textDecoration: 'none', background: type === 'Podcast' ? 'rgba(255,0,0,0.1)' : 'rgba(123,92,246,0.1)', border: `1px solid ${type === 'Podcast' ? 'rgba(255,0,0,0.25)' : 'rgba(123,92,246,0.25)'}`, borderRadius: 6, padding: '5px 12px', color: type === 'Podcast' ? '#FF4444' : '#9B7CFF' }}>
                {type === 'Movie' || type === 'Documentary' ? '🎬 Watch Now' : type === 'Podcast' ? '▶ YouTube' : '🔗 Open'}
                <span style={{ fontSize: 10 }}>→</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div style={{ padding: '0 16px 14px', marginTop: 'auto' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => onLike(item)} style={{ flex: 1, background: liked ? 'rgba(239,68,68,0.1)' : 'rgba(123,92,246,0.1)', border: `1px solid ${liked ? 'rgba(239,68,68,0.3)' : 'rgba(123,92,246,0.25)'}`, borderRadius: 8, padding: '8px 0', color: liked ? '#FCA5A5' : '#9B7CFF', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'Outfit, sans-serif' }}>
            {liked ? '❤️ Liked' : '♡ Like'}
          </button>
          <button style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '8px 0', color: '#6B7280', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit, sans-serif' }}>
            {type === 'Movie' || type === 'Documentary' ? '▶ Watch' : type === 'Podcast' ? '🎧 Listen' : type === 'Book' ? '📖 Read' : '🔗 Access'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const router = useRouter()
  const { user, profile, signOut, loading: authLoading } = useAuth()
  const [activeNav, setActiveNav] = useState('home')
  const [search, setSearch] = useState('')
  const [activeGenre, setActiveGenre] = useState('')
  const [results, setResults] = useState<Record<string, ContentItem[]> | null>(null)
  const [searching, setSearching] = useState(false)
  const [savedItems, setSavedItems] = useState<string[]>([])
  const [likedItems, setLikedItems] = useState<string[]>([])
  const [interactions, setInteractions] = useState<any[]>([])
  const [notif, setNotif] = useState(true)
  const [formatFilter, setFormatFilter] = useState('All')

  useEffect(() => {
    if (!authLoading && !user) router.push('/auth')
  }, [user, authLoading, router])

  const tasteProfile = (() => {
    const freq: Record<string, number> = {}
    interactions.forEach(item => {
      ;(item.tags || []).forEach((tag: string) => {
        freq[tag] = (freq[tag] || 0) + 1
      })
    })
    return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([t]) => t)
  })()

  const handleSearch = useCallback(async (q: string) => {
    if (!q.trim()) return
    if (q === activeGenre) setActiveGenre('')
    setSearching(true)
    setResults(null)
    setFormatFilter('All')
    setActiveGenre(q)
    try {
      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          history: interactions.slice(0, 50),
          tasteProfile,
          userId: user?.id,
        }),
      })
      const data = await res.json()
      if (data.success) {
  console.log('RESULTS:', JSON.stringify(data.results).slice(0, 200))
  setResults(data.results)
}
    } catch (err) {
      console.error(err)
    } finally {
      setSearching(false)
    }
  }, [interactions, tasteProfile, user, activeGenre])

  const toggleSave = (title: string) =>
    setSavedItems(prev => prev.includes(title) ? prev.filter(x => x !== title) : [...prev, title])

  const toggleLike = (item: any) => {
    const title = item.title
    setLikedItems(prev => prev.includes(title) ? prev.filter(x => x !== title) : [...prev, title])
    setInteractions(prev => {
      const exists = prev.find(i => i.title === title)
      return exists ? prev.filter(i => i.title !== title) : [...prev, item]
    })
  }

  const allResults = results ? Object.entries(results) : []
  const filteredResults = formatFilter === 'All' ? allResults
    : allResults.filter(([cat]) => {
        if (formatFilter === 'Books')       return cat === 'books'
        if (formatFilter === 'Movies')      return cat === 'movies' || cat === 'documentaries'
        if (formatFilter === 'Podcasts')    return cat === 'podcasts'
        if (formatFilter === 'Journals')    return cat === 'journals'
        return true
      })

  const typeMap: Record<string, string> = {
    movies: 'Movie', books: 'Book', podcasts: 'Podcast',
    journals: 'Journal', documentaries: 'Documentary'
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  if (authLoading) {
    return (
      <div style={{ minHeight: '100vh', background: '#12122A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', color: '#F0EFFF' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
          <div style={{ color: '#7B5CF6', fontWeight: 600 }}>Loading Genrify...</div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0D0D1F', color: '#F0EFFF', fontFamily: 'Outfit, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #2D2B60; border-radius: 2px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        input::placeholder { color: #374151; }
        button { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* ── Sidebar ── */}
      <aside style={{ width: 224, flexShrink: 0, background: 'rgba(255,255,255,0.02)', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', height: '100vh', position: 'sticky', top: 0, overflowY: 'auto' }}>
        <div style={{ padding: '22px 20px 14px', display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: 'linear-gradient(135deg,#7B5CF6,#5B3CD6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>✦</div>
          <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: -0.5 }}>Genrify</span>
        </div>

        {/* User card */}
        <div style={{ margin: '0 12px 16px', background: 'rgba(123,92,246,0.07)', border: '1px solid rgba(123,92,246,0.2)', borderRadius: 12, padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#7B5CF6,#EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, color: '#fff', flexShrink: 0 }}>
              {(profile?.name || user?.email || 'U')[0].toUpperCase()}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#F0EFFF', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{profile?.name || 'User'}</div>
              <div style={{ fontSize: 10, color: '#4B5563', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user?.email}</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '0 8px' }}>
          <div style={{ fontSize: 9, color: '#374151', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, padding: '0 12px 8px' }}>Menu</div>
          {[
            { id: 'home',     label: 'Home',     icon: '⌂' },
            { id: 'browse',   label: 'Browse',   icon: '◎' },
            { id: 'saved',    label: 'Saved',    icon: '🔖' },
            { id: 'profile',  label: 'Profile',  icon: '👤' },
          ].map(n => (
            <button key={n.id} onClick={() => setActiveNav(n.id)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 10, border: 'none', background: activeNav === n.id ? 'rgba(123,92,246,0.15)' : 'transparent', color: activeNav === n.id ? '#9B7CFF' : '#6B7280', fontSize: 13, cursor: 'pointer', fontWeight: activeNav === n.id ? 700 : 400, textAlign: 'left', marginBottom: 2, transition: 'all 0.15s' }}>
              <span style={{ width: 18, textAlign: 'center' }}>{n.icon}</span>
              {n.label}
              {n.id === 'saved' && savedItems.length > 0 && (
                <span style={{ marginLeft: 'auto', background: 'rgba(123,92,246,0.2)', color: '#9B7CFF', borderRadius: 20, fontSize: 10, fontWeight: 700, padding: '1px 7px' }}>{savedItems.length}</span>
              )}
            </button>
          ))}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '8px 12px' }} />
          <button onClick={handleSignOut} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 10, border: 'none', background: 'transparent', color: '#4B5563', fontSize: 13, cursor: 'pointer', textAlign: 'left' }}>
            <span style={{ width: 18, textAlign: 'center' }}>↪</span> Sign Out
          </button>
        </nav>
        <div style={{ padding: '12px 20px', fontSize: 10, color: '#1F2937' }}>Genrify v2.0 · AI-powered</div>
      </aside>

      {/* ── Main ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Topbar */}
        <header style={{ height: 62, borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 14, padding: '0 32px', background: 'rgba(13,13,31,0.95)', backdropFilter: 'blur(16px)', position: 'sticky', top: 0, zIndex: 50, flexShrink: 0 }}>
          <div style={{ flex: 1, maxWidth: 460, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: '#374151', pointerEvents: 'none' }}>⌕</span>
            <input value={search} onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch(search)}
              placeholder="Search titles, genres, formats..."
              style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '9px 14px 9px 34px', color: '#F0EFFF', fontSize: 13, outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['Trending', 'Fantasy', 'Sci-Fi'].map(g => (
              <button key={g} onClick={() => handleSearch(g)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '5px 12px', fontSize: 11, color: '#6B7280', cursor: 'pointer', whiteSpace: 'nowrap' }}>{g}</button>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <button onClick={() => setNotif(false)} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 9, width: 36, height: 36, cursor: 'pointer', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔔</button>
            {notif && <span style={{ position: 'absolute', top: 7, right: 7, width: 6, height: 6, borderRadius: '50%', background: '#EF4444', border: '1.5px solid #0D0D1F' }} />}
          </div>
          <div onClick={() => setActiveNav('profile')} style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#7B5CF6,#EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, color: '#fff', cursor: 'pointer' }}>
            {(profile?.name || user?.email || 'U')[0].toUpperCase()}
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '28px 32px 60px' }}>

          {/* ── HOME ── */}
          {activeNav === 'home' && (
            <div style={{ animation: 'fadeUp 0.35s ease' }}>
              {/* Welcome */}
              <div style={{ background: 'linear-gradient(135deg, rgba(123,92,246,0.12), rgba(123,92,246,0.03))', border: '1px solid rgba(123,92,246,0.2)', borderRadius: 20, padding: '24px 28px', marginBottom: 24 }}>
                <div style={{ fontSize: 13, color: '#6B7280', marginBottom: 4 }}>Good evening</div>
                <h1 style={{ fontSize: 26, fontWeight: 900, letterSpacing: -0.5, marginBottom: 8 }}>
                  Welcome back, {profile?.name?.split(' ')[0] || 'there'} 👋
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', animation: 'pulse 2s infinite' }} />
                  <span style={{ fontSize: 13, color: '#6B7280' }}>Search any genre to get <strong style={{ color: '#9B7CFF' }}>AI-personalized</strong> recommendations</span>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
                {[
                  { v: savedItems.length, l: 'Saved', icon: '🔖' },
                  { v: likedItems.length, l: 'Liked', icon: '❤️' },
                  { v: interactions.length, l: 'Interactions', icon: '🎯' },
                  { v: tasteProfile.length > 0 ? '✓' : '—', l: 'Taste Profile', icon: '🧠' },
                ].map(s => (
                  <div key={s.l} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '14px 16px' }}>
                    <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                    <div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontSize: 11, color: '#4B5563', marginTop: 3 }}>{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Taste profile */}
              {tasteProfile.length > 0 && (
                <div style={{ background: 'rgba(123,92,246,0.06)', border: '1px solid rgba(123,92,246,0.15)', borderRadius: 14, padding: '14px 18px', marginBottom: 24 }}>
                  <div style={{ fontSize: 11, letterSpacing: 2, color: '#7B5CF6', fontWeight: 700, textTransform: 'uppercase', marginBottom: 10 }}>🧠 Your Taste Profile</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {tasteProfile.map(tag => (
                      <span key={tag} style={{ background: 'rgba(123,92,246,0.12)', border: '1px solid rgba(123,92,246,0.25)', color: '#9B7CFF', borderRadius: 20, padding: '3px 11px', fontSize: 11, fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Genre chips */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 11, color: '#4B5563', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>Pick a genre to explore</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {GENRES.map(g => (
                    <button key={g.label} onClick={() => handleSearch(g.label)}
                      style={{ background: activeGenre === g.label ? 'rgba(123,92,246,0.15)' : 'rgba(255,255,255,0.03)', border: `1px solid ${activeGenre === g.label ? 'rgba(123,92,246,0.4)' : 'rgba(255,255,255,0.07)'}`, color: activeGenre === g.label ? '#9B7CFF' : '#6B7280', borderRadius: 20, padding: '7px 16px', fontSize: 13, cursor: 'pointer', fontWeight: activeGenre === g.label ? 700 : 400, transition: 'all 0.15s' }}>
                      {g.emoji} {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Searching */}
              {searching && (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <div style={{ fontSize: 36, marginBottom: 14, animation: 'pulse 1.5s infinite' }}>✦</div>
                  <div style={{ color: '#7B5CF6', fontWeight: 600, marginBottom: 4 }}>
                    {interactions.length > 0 ? 'Personalizing based on your taste...' : 'Finding the best content...'}
                  </div>
                  <div style={{ color: '#4B5563', fontSize: 13 }}>Powered by Claude AI</div>
                </div>
              )}

              {/* Results */}
              {results && !searching && (
                <div style={{ animation: 'fadeUp 0.4s ease' }}>
                  {/* Format filter */}
                  <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
                    {['All', 'Books', 'Movies', 'Podcasts', 'Journals'].map(f => (
                      <button key={f} onClick={() => setFormatFilter(f)}
                        style={{ background: formatFilter === f ? 'rgba(123,92,246,0.15)' : 'transparent', border: `1px solid ${formatFilter === f ? 'rgba(123,92,246,0.4)' : 'rgba(255,255,255,0.07)'}`, color: formatFilter === f ? '#9B7CFF' : '#6B7280', borderRadius: 20, padding: '6px 16px', fontSize: 12, cursor: 'pointer', fontWeight: formatFilter === f ? 700 : 400 }}>{f}</button>
                    ))}
                  </div>

                  {interactions.length > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: 10, padding: '10px 14px', marginBottom: 20, fontSize: 12, color: '#6EE7B7' }}>
                      🎯 Results personalized based on your {interactions.length} interaction{interactions.length > 1 ? 's' : ''}
                    </div>
                  )}

                  {filteredResults.map(([category, items]) => (
                    <div key={category} style={{ marginBottom: 32 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                        <h2 style={{ fontSize: 18, fontWeight: 800, textTransform: 'capitalize', margin: 0 }}>
                          {category === 'movies' ? '🎬' : category === 'books' ? '📚' : category === 'podcasts' ? '🎙️' : category === 'journals' ? '📰' : '🎥'} {category}
                        </h2>
                        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                        {(items as ContentItem[]).map((item, idx) => (
                          <ContentCard
                            key={idx}
                            item={item}
                            type={typeMap[category] || 'Book'}
                            saved={savedItems.includes(item.title)}
                            liked={likedItems.includes(item.title)}
                            onSave={toggleSave}
                            onLike={toggleLike}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Empty state */}
              {!results && !searching && (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <div style={{ fontSize: 52, marginBottom: 16 }}>🧭</div>
                  <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>What are you into?</div>
                  <div style={{ color: '#4B5563', fontSize: 14, maxWidth: 360, margin: '0 auto' }}>Pick a genre above or type anything in the search bar to get AI recommendations.</div>
                </div>
              )}
            </div>
          )}

          {/* ── SAVED ── */}
          {activeNav === 'saved' && (
            <div style={{ animation: 'fadeUp 0.35s ease' }}>
              <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 6, letterSpacing: -0.5 }}>Saved Items</h1>
              <p style={{ color: '#4B5563', fontSize: 13, marginBottom: 24 }}>{savedItems.length} item{savedItems.length !== 1 ? 's' : ''} saved</p>
              {savedItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '80px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🔖</div>
                  <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Nothing saved yet</div>
                  <div style={{ color: '#4B5563', fontSize: 13 }}>Tap the bookmark icon on any card</div>
                </div>
              ) : (
                <p style={{ color: '#6B7280', fontSize: 13 }}>Search for content and bookmark items to see them here.</p>
              )}
            </div>
          )}

          {/* ── PROFILE ── */}
          {activeNav === 'profile' && (
            <div style={{ animation: 'fadeUp 0.35s ease' }}>
              <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 24, letterSpacing: -0.5 }}>Profile</h1>
              <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: '24px 28px', marginBottom: 20, display: 'flex', gap: 18, alignItems: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#7B5CF6,#EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 26, color: '#fff', flexShrink: 0 }}>
                  {(profile?.name || user?.email || 'U')[0].toUpperCase()}
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 2 }}>{profile?.name || 'User'}</div>
                  <div style={{ color: '#4B5563', fontSize: 13, marginBottom: 10 }}>{user?.email}</div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <span style={{ background: 'rgba(123,92,246,0.12)', border: '1px solid rgba(123,92,246,0.3)', color: '#9B7CFF', borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 700 }}>✦ Member</span>
                    {tasteProfile.length > 0 && <span style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#34D399', borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 700 }}>🧠 Taste Profile Active</span>}
                  </div>
                </div>
              </div>
              {profile?.genres && profile.genres.length > 0 && (
                <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '18px 22px' }}>
                  <div style={{ fontSize: 11, color: '#4B5563', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>Your Genres</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {profile.genres.map((g: string) => (
                      <span key={g} style={{ background: 'rgba(123,92,246,0.1)', border: '1px solid rgba(123,92,246,0.2)', color: '#9B7CFF', borderRadius: 20, padding: '5px 14px', fontSize: 12, fontWeight: 600 }}>
                        {GENRES.find(x => x.label === g)?.emoji} {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── BROWSE ── */}
          {activeNav === 'browse' && (
            <div style={{ animation: 'fadeUp 0.35s ease' }}>
              <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 6, letterSpacing: -0.5 }}>Browse</h1>
              <p style={{ color: '#4B5563', fontSize: 13, marginBottom: 24 }}>Search for any topic to discover content</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {GENRES.map(g => (
                  <button key={g.label} onClick={() => { setActiveNav('home'); handleSearch(g.label) }}
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: '#6B7280', borderRadius: 20, padding: '8px 18px', fontSize: 13, cursor: 'pointer' }}>
                    {g.emoji} {g.label}
                  </button>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}