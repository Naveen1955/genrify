const GENRE_IDS = {
  'sci-fi': 878, 'science fiction': 878, 'fantasy': 14, 'mystery': 9648,
  'romance': 10749, 'history': 36, 'business': 99, 'technology': 878,
  'horror': 27, 'action': 28, 'comedy': 35, 'drama': 18,
  'thriller': 53, 'animation': 16, 'documentary': 99, 'true crime': 80, 'psychology': 99,
}

const PODCASTS = {
  'fantasy': [
    { title: 'Tolkien Professor', host: 'Corey Olsen', desc: 'Deep dives into Tolkien and fantasy literature.', url: 'https://www.youtube.com/@TolkienProfessor' },
    { title: 'Hello Future Me', host: 'Tim Hickson', desc: 'Worldbuilding and storytelling for fantasy fans.', url: 'https://www.youtube.com/@HelloFutureMe' },
    { title: 'Stuff You Missed in History', host: 'Holly and Tracy', desc: 'Fascinating history that inspired fantasy worlds.', url: 'https://www.youtube.com/@MissedInHistory' },
  ],
  'sci-fi': [
    { title: 'StarTalk Radio', host: 'Neil deGrasse Tyson', desc: 'Science meets pop culture.', url: 'https://www.youtube.com/@StarTalk' },
    { title: 'Lex Fridman Podcast', host: 'Lex Fridman', desc: 'AI, science and technology.', url: 'https://www.youtube.com/@lexfridman' },
    { title: 'Isaac Arthur', host: 'Isaac Arthur', desc: 'Futurism and science fiction concepts.', url: 'https://www.youtube.com/@isaacarthur' },
  ],
  'mystery': [
    { title: 'My Favorite Murder', host: 'Karen Kilgariff', desc: 'Two comedians discuss true crime cases.', url: 'https://www.youtube.com/@myfavoritemurder' },
    { title: 'Crime Junkie', host: 'Ashley Flowers', desc: 'Your weekly true crime fix.', url: 'https://www.youtube.com/@crimejunkiepodcast' },
    { title: 'Unsolved Mysteries', host: 'Various', desc: 'Deep dives into baffling unsolved cases.', url: 'https://www.youtube.com/@UnsolvedMysteries' },
  ],
  'romance': [
    { title: 'Lex Fridman Podcast', host: 'Lex Fridman', desc: 'Deep conversations about love and life.', url: 'https://www.youtube.com/@lexfridman' },
    { title: 'The Tim Ferriss Show', host: 'Tim Ferriss', desc: 'World class performers share their habits.', url: 'https://www.youtube.com/@timferriss' },
    { title: 'Hidden Brain', host: 'Shankar Vedantam', desc: 'Science exploring human relationships.', url: 'https://www.youtube.com/@hiddenbrain' },
  ],
  'history': [
    { title: 'Hardcore History', host: 'Dan Carlin', desc: 'Epic storytelling about dramatic moments in history.', url: 'https://www.youtube.com/@dancarlin' },
    { title: 'Revolutions', host: 'Mike Duncan', desc: 'History of the great political revolutions.', url: 'https://www.youtube.com/@revolutionspodcast' },
    { title: 'The History of Rome', host: 'Mike Duncan', desc: 'Complete history of Rome from founding to fall.', url: 'https://www.youtube.com/@thehistoryofrome' },
  ],
  'technology': [
    { title: 'Lex Fridman Podcast', host: 'Lex Fridman', desc: 'AI, science and technology with top minds.', url: 'https://www.youtube.com/@lexfridman' },
    { title: 'Fireship', host: 'Jeff Delaney', desc: 'High-intensity code tutorials and tech news.', url: 'https://www.youtube.com/@Fireship' },
    { title: 'Theo t3.gg', host: 'Theo', desc: 'Web development and the tech industry explained.', url: 'https://www.youtube.com/@t3dotgg' },
  ],
  'psychology': [
    { title: 'Huberman Lab', host: 'Andrew Huberman', desc: 'Science-based tools for health and performance.', url: 'https://www.youtube.com/@hubermanlab' },
    { title: 'The Tim Ferriss Show', host: 'Tim Ferriss', desc: 'World-class performers share mental models.', url: 'https://www.youtube.com/@timferriss' },
    { title: 'Hidden Brain', host: 'Shankar Vedantam', desc: 'Science exploring unconscious human behaviour.', url: 'https://www.youtube.com/@hiddenbrain' },
  ],
  'business': [
    { title: 'How I Built This', host: 'Guy Raz', desc: 'Stories behind the most successful companies.', url: 'https://www.youtube.com/@howibuiltthis' },
    { title: 'My First Million', host: 'Sam Parr and Shaan Puri', desc: 'Brainstorming business ideas that work.', url: 'https://www.youtube.com/@MyFirstMillionPod' },
    { title: 'The Knowledge Project', host: 'Shane Parrish', desc: 'Mastering what other people have figured out.', url: 'https://www.youtube.com/@ShaneAParrish' },
  ],
  'default': [
    { title: 'Lex Fridman Podcast', host: 'Lex Fridman', desc: 'Long-form conversations with brilliant minds.', url: 'https://www.youtube.com/@lexfridman' },
    { title: 'Huberman Lab', host: 'Andrew Huberman', desc: 'Science-based tools for everyday life.', url: 'https://www.youtube.com/@hubermanlab' },
    { title: 'The Tim Ferriss Show', host: 'Tim Ferriss', desc: 'World-class performers share their habits.', url: 'https://www.youtube.com/@timferriss' },
  ],
}

async function searchMovies(query, KEY) {
  const genreId = GENRE_IDS[query.toLowerCase()]
  let movies = []
  if (genreId) {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + KEY + '&with_genres=' + genreId + '&sort_by=vote_average.desc&vote_count.gte=1000&page=1', { cache: 'no-store' })
    const dat = await res.json()
    console.log('TMDB history results:', dat.total_results, dat.status_message || '')
    movies = (dat.results || []).slice(0, 3)
    if (movies.length === 0) {
      const res2 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + KEY + '&with_genres=' + genreId + '&sort_by=popularity.desc&page=1', { cache: 'no-store' })
      const dat2 = await res2.json()
      movies = (dat2.results || []).slice(0, 3)
    }
  } else {
    const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + KEY + '&query=' + encodeURIComponent(query) + '&page=1', { cache: 'no-store' })
    const dat = await res.json()
    movies = (dat.results || []).slice(0, 3)
  }
  return Promise.all(movies.map(async function(m) {
    const pr = await fetch('https://api.themoviedb.org/3/movie/' + m.id + '/watch/providers?api_key=' + KEY, { cache: 'no-store' })
    const pd = await pr.json()
    const ind = pd.results && pd.results.IN
    const platforms = []
    if (ind && ind.flatrate) ind.flatrate.forEach(function(p) { platforms.push(p.provider_name) })
    if (ind && ind.rent) ind.rent.forEach(function(p) { platforms.push('Rent: ' + p.provider_name) })
    return {
      title: m.title,
      subtitle: m.release_date ? m.release_date.split('-')[0] : '',
      description: (m.overview || '').slice(0, 150) + '...',
      tags: [],
      rating: m.vote_average ? m.vote_average.toFixed(1) : '0.0',
      match: Math.floor(75 + Math.random() * 23),
      platforms: platforms.length > 0 ? platforms : ['Check JustWatch'],
      external_url: (ind && ind.link) || 'https://www.justwatch.com/in/search?q=' + encodeURIComponent(m.title),
      poster: m.poster_path ? 'https://image.tmdb.org/t/p/w200' + m.poster_path : null,
      top_pick: false,
    }
  }))
}

async function searchBooks(query) {
  const bookQuery = query + ' fiction novel -football -sports'
  const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(bookQuery) + '&maxResults=3&orderBy=relevance&printType=books', { cache: 'no-store' })
  const data = await res.json()
  return (data.items || []).slice(0, 3).map(function(b) {
    const info = b.volumeInfo
    const isbn = info.industryIdentifiers && info.industryIdentifiers.find(function(id) { return id.type === 'ISBN_13' })
    const googleUrl = info.infoLink || 'https://books.google.com/books?q=' + encodeURIComponent(info.title || query)
    const amazonUrl = isbn ? 'https://www.amazon.in/s?k=' + isbn.identifier : 'https://www.amazon.in/s?k=' + encodeURIComponent((info.title || query) + ' book')
    const goodreadsUrl = 'https://www.goodreads.com/search?q=' + encodeURIComponent(info.title || query)
    return {
      title: info.title,
      subtitle: (info.authors ? info.authors[0] : 'Unknown') + ' · ' + (info.publishedDate ? info.publishedDate.split('-')[0] : ''),
      description: (info.description || '').slice(0, 150) + '...',
      tags: info.categories || [],
      rating: (info.averageRating || 4.0).toFixed(1),
      match: Math.floor(75 + Math.random() * 23),
      platforms: ['Google Books', 'Amazon India', 'Goodreads'],
      external_url: googleUrl,
      links: { google: googleUrl, amazon: amazonUrl, goodreads: goodreadsUrl },
      poster: info.imageLinks ? info.imageLinks.thumbnail : null,
      top_pick: false,
    }
  })
}

async function searchPodcasts(query) {
  const list = PODCASTS[query.toLowerCase()] || PODCASTS['default']
  return list.map(function(p) {
    return {
      title: p.title,
      subtitle: p.host + ' · YouTube',
      description: p.desc,
      tags: [query, 'Podcast'],
      rating: (4.2 + Math.random() * 0.7).toFixed(1),
      match: Math.floor(75 + Math.random() * 23),
      platforms: ['YouTube'],
      external_url: p.url,
      top_pick: false,
    }
  })
}

async function searchDocumentaries(query, KEY) {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + KEY + '&with_genres=99&sort_by=vote_average.desc&vote_count.gte=500&page=1', { cache: 'no-store' })
  const data = await res.json()
  return (data.results || []).slice(0, 3).map(function(m) {
    return {
      title: m.title,
      subtitle: m.release_date ? m.release_date.split('-')[0] : '',
      description: (m.overview || '').slice(0, 150) + '...',
      tags: ['Documentary'],
      rating: m.vote_average ? m.vote_average.toFixed(1) : '0.0',
      match: Math.floor(70 + Math.random() * 23),
      platforms: ['Check JustWatch'],
      external_url: 'https://www.justwatch.com/in/search?q=' + encodeURIComponent(m.title),
      poster: m.poster_path ? 'https://image.tmdb.org/t/p/w200' + m.poster_path : null,
      top_pick: false,
    }
  })
}

export async function POST(req) {
  try {
    const body = await req.json()
    const query = body.query
    const KEY = process.env.TMDB_API_KEY || '23a4fbeea2ce4cb9500177d0ea229250'
    if (!query || !query.trim()) {
      return Response.json({ success: false, error: 'Query required' }, { status: 400 })
    }
    let movies = [], books = [], podcasts = [], documentaries = []
    try { movies = await searchMovies(query, KEY) } catch(e) { console.error('movies:', e.message) }
    try { books = await searchBooks(query) } catch(e) { console.error('books:', e.message) }
    try { podcasts = await searchPodcasts(query) } catch(e) { console.error('podcasts:', e.message) }
    try { documentaries = await searchDocumentaries(query, KEY) } catch(e) { console.error('docs:', e.message) }
    return Response.json({ success: true, results: { movies: movies, books: books, podcasts: podcasts, documentaries: documentaries } })
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
