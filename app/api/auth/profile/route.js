import { supabaseAdmin } from '@/lib/supabase'

export async function GET(req) {
  const authHeader = req.headers.get('Authorization')
  if (!authHeader) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const token = authHeader.replace('Bearer ', '')
  const { data: { user }, error } = await supabaseAdmin.auth.getUser(token)
  if (error || !user) return Response.json({ error: 'Invalid token' }, { status: 401 })

  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return Response.json({ profile })
}

export async function PATCH(req) {
  const authHeader = req.headers.get('Authorization')
  if (!authHeader) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const token = authHeader.replace('Bearer ', '')
  const { data: { user }, error } = await supabaseAdmin.auth.getUser(token)
  if (error || !user) return Response.json({ error: 'Invalid token' }, { status: 401 })

  const updates = await req.json()
  const allowed = ['name', 'genres', 'avatar_url']
  const safe = Object.fromEntries(
    Object.entries(updates).filter(([k]) => allowed.includes(k))
  )

  const { data, error: updateError } = await supabaseAdmin
    .from('profiles')
    .update(safe)
    .eq('id', user.id)
    .select()
    .single()

  if (updateError) return Response.json({ error: updateError.message }, { status: 400 })
  return Response.json({ profile: data })
}