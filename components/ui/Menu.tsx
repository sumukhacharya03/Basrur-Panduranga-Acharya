'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PROJECTS_KANNADA, PROJECTS_DEVANAGARI, MENU_LINKS } from '@/app/data'
import { cn } from '@/lib/utils'
import { HomeIcon } from 'lucide-react'

export function Menu() {
  const pathname = usePathname();

  const devanagariItems = [
    { name: 'A Great Initiative', href: '/publications/devanagari/a-great-initiative', id: 'devanagari-intro'},
    ...PROJECTS_DEVANAGARI
  ]

  return (
    <nav className="space-y-1 text-sm">
       <Link href="/" className={cn(
        "flex items-center font-semibold mb-1 p-2 rounded-md",
        pathname === '/'
            ? "bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400"
            : "text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
      )}>
        <HomeIcon className="h-4 w-4 mr-2" />
        Home
      </Link>

      <div>
        <h4 className="font-semibold mb-1 text-zinc-800 dark:text-zinc-200">Publications – Kannada</h4>
        <ul className="space-y-0">
          {PROJECTS_KANNADA.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className={cn(
                  "block pl-4 border-l-2 py-0.5",
                  pathname === item.href
                    ? "border-blue-500 text-blue-600 dark:text-blue-400 font-medium"
                    : "border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-500"
                )}>
                  {item.name.split('(')[0].trim()}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-1 text-zinc-800 dark:text-zinc-200">Publications – Devanagari</h4>
        <ul className="space-y-0">
          {devanagariItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className={cn(
                  "block pl-4 border-l-2 py-0.5",
                  pathname === item.href
                    ? "border-blue-500 text-blue-600 dark:text-blue-400 font-medium"
                    : "border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-500"
                )}>
                  {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-0">
         {MENU_LINKS.map((item) => (
            <div key={item.id}>
                <Link href={item.href} className={cn(
                    "block font-semibold py-0.5",
                     pathname === item.href
                     ? "text-blue-600 dark:text-blue-400"
                     : "text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white"
                )}>
                    {item.name}
                </Link>
            </div>
         ))}
      </div>
    </nav>
  )
}

