'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { Menu } from '@/components/ui/Menu'
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="flex w-full items-start justify-between">
        <div>
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
        <div className="flex items-center gap-4">
          {/* Laptop: Show ThemeSwitcher normally */}
          <div className="hidden flex-shrink-0 md:block">
            <ThemeSwitcher />
          </div>

          {/* Mobile: BIG, BOLD, BLUE Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              title="Open menu"
              aria-label="Open menu"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-base font-extrabold text-white shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <span>MENU</span>
              <MenuIcon className="h-6 w-6" strokeWidth={3} />
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