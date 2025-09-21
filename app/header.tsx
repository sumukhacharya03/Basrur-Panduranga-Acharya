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
          <div className="flex-shrink-0">
            <ThemeSwitcher />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              title="Open menu"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden dark:bg-zinc-950">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              title="Close menu"
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>
          <div className="p-4" onClick={() => setIsOpen(false)}>
            <Menu />
          </div>
        </div>
      )}
    </>
  )
}
