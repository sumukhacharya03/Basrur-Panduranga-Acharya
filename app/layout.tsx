import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { ThemeProvider } from 'next-themes'
import { Menu } from '@/components/ui/Menu'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nim-fawn.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Basrur Panduranga Acharya - Author & Columnist',
    template: '%s | Basrur Panduranga Acharya',
  },
  description:
    'The personal website of Basrur Panduranga Acharya, an Author & Columnist.',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
        >
          <div className="flex min-h-screen w-full font-[family-name:var(--font-inter-tight)]">
            <aside className="fixed top-0 left-0 hidden h-full w-64 overflow-y-auto border-r border-zinc-200 p-4 pt-8 md:block dark:border-zinc-800">
              <Menu />
            </aside>
            <main className="flex-1 p-4 pt-8 md:ml-64 md:p-8">
              <div className="mb-12">
                <Header />
              </div>
              <div>{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
