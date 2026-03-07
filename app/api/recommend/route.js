const TMDB_KEY = process.env.TMDB_KEY || process.env.TMDB_API_KEY
const TMDB = 'https://api.themoviedb.org/3'

async function searchMovies(query) {
  const res = await fetch(`${TMDB}/search/movie?api_key=${TMDB_KEY}&query=${encodeURIComponent(query)}&page=1`)
  const data = await res.json()
  return (data.results || []).slice(0, 3).map(m => ({
    title: m.title,
    subtitle: `${m.release_date?.split('-')[0] || ''}`,
    year: m.release_date?.split('-')[0] || '',
    description: m.overview?.slice(0, 150) + '...' || '',
    tags: [],
    rating: m.vote_average?.toFixed(1),
    match: Math.floor(75 + Math.random() * 23),
    platforms: ["Check streaming availability"],
    poster: m.poster_path ? `https://image.tmdb.org/t/p/w200${m.poster_path}` : null,
    top_pick: false,
  }))
}

async function searchBooks(query) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=3`)
  const data = await res.json()
  return (data.items || []).slice(0, 3).map(b => ({
    title: b.volumeInfo?.title,
    subtitle: `${b.volumeInfo?.authors?.[0] || 'Unknown'} · ${b.volumeInfo?.publishedDate?.split('-')[0] || ''}`,
    year: b.volumeInfo?.publishedDate?.split('-')[0] || '',
    description: b.volumeInfo?.description?.slice(0, 150) + '...' || '',
    tags: b.volumeInfo?.categories || [],
    rating: (b.volumeInfo?.averageRating || 4.0).toFixed(1),
    match: Math.floor(75 + Math.random() * 23),
    platforms: ["Google Books", "Amazon", "Kindle"],
    external_url: b.volumeInfo?.infoLink || '',
    poster: b.volumeInfo?.imageLinks?.thumbnail || null,
    top_pick: false,
  }))
}

async function searchPodcasts(query) {
  const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=podcast&limit=3`)
  const data = await res.json()
  return (data.results || []).slice(0, 3).map(p => ({
    title: p.collectionName,
    subtitle: `${p.artistName} · ${p.trackCount || '?'} Episodes`,
    description: p.description?.slice(0, 150) + '...' || `A podcast about ${query}`,
    tags: [query],
    rating: (4.0 + Math.random() * 0.9).toFixed(1),
    match: Math.floor(75 + Math.random() * 23),
    platforms: ["Apple Podcasts", "Spotify"],
    external_url: p.collectionViewUrl || '',
    poster: p.artworkUrl100 || null,
    top_pick: false,
  }))
}

async function searchDocumentaries(query) {
  const res = await fetch(`${TMDB}/search/movie?api_key=${TMDB_KEY}&query=${encodeURIComponent(query + ' documentary')}&page=1`)
  const data = await res.json()
  const docs = (data.results || []).filter(m => m.genre_ids?.includes(99)).slice(0, 3)
  const items = docs.length > 0 ? docs : (data.results || []).slice(0, 3)
  return items.map(m => ({
    title: m.title,
    subtitle: `${m.release_date?.split('-')[0] || ''}`,
    year: m.release_date?.split('-')[0] || '',
    description: m.overview?.slice(0, 150) + '...' || '',
    tags: ["Documentary"],
    rating: m.vote_average?.toFixed(1),
    match: Math.floor(70 + Math.random() * 23),
    platforms: ["Check streaming availability"],
    poster: m.poster_path ? `https://image.tmdb.org/t/p/w200${m.poster_path}` : null,
    top_pick: false,
  }))
}

export async function POST(req) {
  try {
    const { query } = await req.json()

    if (!query?.trim()) {
      return Response.json({ success: false, error: 'Query is required' }, { status: 400 })
    }

    // Fetch all in parallel
    const [movies, books, podcasts, documentaries] = await Promise.all([
      searchMovies(query),
      searchBooks(query),
      searchPodcasts(query),
      searchDocumentaries(query),
    ])

    const results = { movies, books, podcasts, documentaries }

    return Response.json({ success: true, results })

  } catch (err) {
    console.error('Recommendation error:', err)
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}