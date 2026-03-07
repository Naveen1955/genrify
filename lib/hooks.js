'use client'
import { useState, useEffect, useCallback } from 'react'
import { supabase } from './supabase'
import { useAuth } from './auth-context'

export function useSaved() {
  const { user } = useAuth()
  const [savedIds, setSavedIds] = useState([])
  const [loading,  setLoading]  = useState(false)

  useEffect(() => {
    if (!user) { setSavedIds([]); return }
    setLoading(true)
    supabase
      .from('saved_items')
      .select('content_id')
      .eq('user_id', user.id)
      .then(({ data }) => {
        setSavedIds((data || []).map(r => r.content_id))
        setLoading(false)
      })
  }, [user])

  const toggle = useCallback(async (contentId) => {
    if (!user) return
    const isSaved = savedIds.includes(contentId)
    setSavedIds(prev =>
      isSaved ? prev.filter(id => id !== contentId) : [...prev, contentId]
    )
    if (isSaved) {
      await supabase
        .from('saved_items')
        .delete()
        .eq('user_id', user.id)
        .eq('content_id', contentId)
    } else {
      await supabase
        .from('saved_items')
        .insert({ user_id: user.id, content_id: contentId })
    }
  }, [user, savedIds])

  return { savedIds, isSaved: id => savedIds.includes(id), toggle, loading }
}

export function useInteractions() {
  const { user } = useAuth()
  const [history, setHistory] = useState([])

  useEffect(() => {
    if (!user) { setHistory([]); return }
    supabase
      .from('interactions')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(100)
      .then(({ data }) => setHistory(data || []))
  }, [user])

  const tasteProfile = (() => {
    const freq = {}
    history.forEach(row => {
      const w = row.action === 'liked' ? 3 : row.action === 'disliked' ? -2 : 2
      ;(row.content_tags || []).forEach(tag => {
        freq[tag] = (freq[tag] || 0) + w
      })
    })
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .filter(([, v]) => v > 0)
      .slice(0, 12)
      .map(([tag]) => tag)
  })()

  const track = useCallback(async (item, action) => {
    if (!user) return
    const row = {
      user_id:       user.id,
      content_id:    item.db_id || null,
      content_title: item.title,
      content_type:  item.type,
      content_tags:  item.tags || [],
      action,
    }
    const existing = history.find(
      h => h.content_title === item.title && h.action === action
    )
    if (existing) {
      await supabase.from('interactions').delete().eq('id', existing.id)
      setHistory(prev => prev.filter(h => h.id !== existing.id))
    } else {
      const { data } = await supabase
        .from('interactions')
        .insert(row)
        .select()
        .single()
      if (data) setHistory(prev => [data, ...prev])
    }
  }, [user, history])

  const isTracked = (title, action) =>
    history.some(h => h.content_title === title && h.action === action)

  return { history, tasteProfile, track, isTracked }
}

export function useRecommendations() {
  const { user } = useAuth()
  const { tasteProfile, history } = useInteractions()
  const [results,  setResults]  = useState(null)
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState(null)
  const [lastQuery,setLastQuery]= useState('')

  const search = useCallback(async (query) => {
    if (!query.trim()) return
    setLoading(true)
    setError(null)
    setLastQuery(query)
    try {
      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          history: history.slice(0, 50),
          tasteProfile,
          userId: user?.id,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.error)
      setResults(data.results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [history, tasteProfile, user])

  return { results, loading, error, search, lastQuery }
}