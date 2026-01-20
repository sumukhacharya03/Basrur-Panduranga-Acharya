'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { useState } from 'react'
import { Menu as MenuIcon, X, Home } from 'lucide-react'
import { Menu } from '@/components/ui/Menu'
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  // Check if we are on the home page
  const isHomePage = pathname === '/'

  return (
    <>
      <header className="flex w-full items-start justify-between">
        <div className="flex-1 pr-2">
          <Link
            href="/"
            className="text-2xl font-bold text-black dark:text-white"
          >
            Basrur Panduranga Acharya
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="font-bold text-blue-600 dark:text-blue-500"
            delay={0.5}
          >
            Author & Columnist
          </TextEffect>
        </div>
        
        {/* Adjusted gap for mobile to prevent overflow */}
        <div className="flex flex-shrink-0 items-center gap-2 md:gap-4">
          {/* Laptop: Show ThemeSwitcher normally */}
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>

          {/* Home Button: Smaller padding/text on mobile */}
          {!isHomePage && (
            <Link
              href="/"
              title="Go to Home"
              aria-label="Go to Home"
              className="flex items-center gap-1.5 rounded-lg border-2 border-blue-600 px-3 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 md:gap-2 md:px-4 md:text-base dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-900/20"
            >
              <span>HOME</span>
              <Home className="h-4 w-4 md:h-5 md:w-5" strokeWidth={3} />
            </Link>
          )}

          {/* Mobile: BIG, BOLD, BLUE Menu Button - Compacted for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              title="Open menu"
              aria-label="Open menu"
              className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-sm font-extrabold text-white shadow-md hover:bg-blue-700 md:px-5 md:py-2.5 md:text-base dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <span>MENU</span>
              <MenuIcon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={3} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden dark:bg-zinc-950">
          <div className="flex items-center justify-between border-b border-zinc-100 p-4 dark:border-zinc-900">
            {/* ThemeSwitcher moved here for accessible mobile access */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Theme:
              </span>
              <ThemeSwitcher />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              title="Close menu"
              aria-label="Close menu"
              className="flex h-12 w-12 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div onClick={() => setIsOpen(false)}>
              <Menu />
            </div>
          </div>
        </div>
      )}
    </>
  )
}