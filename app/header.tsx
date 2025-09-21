'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header>
      <div>
        <Link href="/" className="text-2xl font-bold text-black dark:text-white">
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
    </header>
  )
}

