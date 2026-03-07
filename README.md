# ✦ Genrify — AI Content Recommendation Platform

> Every Genre. Every Format. Perfectly Recommended.

![Genrify](https://img.shields.io/badge/Genrify-v2.0-7B5CF6?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

---

## 🚀 Live Demo

🔗 **[genrify.vercel.app](https://genrify.vercel.app)**

---

## 📖 About

Genrify is a full-stack content recommendation platform that helps users discover **movies, books, podcasts, journals, and documentaries** tailored to their personal taste.

The platform learns from every like, save, and interaction — building a taste profile that gets smarter over time and delivers increasingly personalized recommendations.

---

## ✨ Features

- 🔐 **Authentication** — Secure signup/login with Supabase Auth
- 🎯 **Personalization** — Taste profile built from user interactions
- 🎬 **Real Movie Data** — Live data from TMDB API
- 📚 **Real Book Data** — Live data from Google Books API
- 🎙️ **Podcast Discovery** — Live data from iTunes API
- 🔖 **Save Items** — Bookmark content across all formats
- ❤️ **Like System** — Like content to improve recommendations
- 📊 **Taste Profile** — Visual display of your top interest tags
- 🌙 **Dark UI** — Premium dark theme with purple accents
- 📱 **Responsive** — Works on all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, React, Tailwind CSS |
| Backend | Next.js API Routes (Serverless) |
| Database | Supabase (PostgreSQL) |
| Authentication | Supabase Auth |
| Movie Data | TMDB API |
| Book Data | Google Books API |
| Podcast Data | iTunes Search API |
| Deployment | Vercel |

---

## 📁 Project Structure

```
genrify/
├── app/
│   ├── page.tsx                 ← Landing page
│   ├── auth/page.tsx            ← Login / Signup
│   ├── dashboard/page.tsx       ← Main app
│   └── api/
│       ├── recommend/route.js   ← Recommendation engine
│       └── auth/
│           ├── signup/route.js  ← User registration
│           └── profile/route.js ← Profile management
├── lib/
│   ├── supabase.js              ← Database client
│   ├── auth-context.js          ← Auth state management
│   └── hooks.js                 ← Custom React hooks
├── components/                  ← Reusable UI components
└── middleware.js                ← Route protection
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- Supabase account (free)
- TMDB API key (free)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Naveen1955/genrify.git
cd genrify
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Create a `.env.local` file in the root:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
TMDB_KEY=your-tmdb-api-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**4. Set up the database**

Run the SQL schema in your Supabase SQL editor:
```bash
# Copy contents of schema.sql into Supabase SQL Editor and run
```

**5. Start the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🗄️ Database Schema

```
profiles        → User info, genres, preferences
content         → Content catalog
saved_items     → User bookmarks
interactions    → Likes, watches, listens (feeds personalization)
search_history  → Cached search results
```

Row Level Security (RLS) is enabled on all tables — users can only access their own data.

---

## 🔑 API Keys Required

| Key | Where to get it | Cost |
|-----|----------------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | supabase.com → Settings → API | Free |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | supabase.com → Settings → API | Free |
| `SUPABASE_SERVICE_ROLE_KEY` | supabase.com → Settings → API | Free |
| `TMDB_KEY` | themoviedb.org → Settings → API | Free |

---

## 🚀 Deployment

**Deploy to Vercel in 4 steps:**

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Click Deploy ✅

---

## 🧠 How Personalization Works

```
User likes content (tags: epic, sci-fi, politics)
         ↓
Taste profile computed from interaction history
         ↓
Search sends taste tags with every request
         ↓
Results ranked by tag overlap score
         ↓
Best matches shown first (98% → 85%)
```

---

## 🔮 Roadmap

- [ ] AI-powered recommendations (Claude / Gemini)
- [ ] Social features — follow friends, share lists
- [ ] Mobile app (React Native)
- [ ] Streaming platform availability (JustWatch API)
- [ ] Mood-based filtering
- [ ] Export to Notion / Obsidian

---

👨‍💻 Author

**Naveen Chary**
- GitHub: [@Naveen1955](https://github.com/Naveen1955)

---

## 📄 License

MIT License — feel free to use this project as inspiration!

---

<div align="center">
  <strong>Built with ❤️ using Next.js and Supabase</strong>
</div>
