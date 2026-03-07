import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req) {
  try {
    const { email, password, name, genres } = await req.json()

    if (!email || !password) {
      return Response.json({ error: 'Email and password required' }, { status: 400 })
    }
    if (password.length < 8) {
      return Response.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { name },
    })

    if (error) throw error

    await supabaseAdmin
      .from('profiles')
      .update({ name, genres: genres || [] })
      .eq('id', data.user.id)

    return Response.json({ success: true, userId: data.user.id })

  } catch (err) {
    const msg = err.message?.includes('already registered')
      ? 'An account with this email already exists'
      : err.message
    return Response.json({ error: msg }, { status: 400 })
  }
}