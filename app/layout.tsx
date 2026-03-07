import { AuthProvider } from '@/lib/auth-context'
import './globals.css'

export const metadata = {
  title: 'Genrify — AI Content Recommendations',
  description: 'Every genre. Every format. Perfectly recommended.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}