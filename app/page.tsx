'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'
import { Menu } from '@/components/ui/Menu'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Personal() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.section>
        {/* Text Content Container */}
        <div className="space-y-4">
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            Basrur Panduranga Acharya is an Author & Columnist. A Kannada &
            Hindi scholar and a teacher by profession.
          </p>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            He hails from Basrur Acharya family. Basrur being an ancient ritual
            centre of Mutts, Vrindavanas & Kuladevata Temples, the said family
            has rendered their services to all centres over the generations.
            This hereditary role has come to Acharya naturally in the form of
            ‘Purohit and Archak’ and he performed these roles over the decades.
          </p>
        </div>

        {/* Menu of Contents Trigger - Added for easier access */}
        <div className="my-6 flex flex-col items-center justify-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-2 rounded-lg border-2 border-blue-100 bg-blue-50 px-6 py-3 text-lg font-extrabold text-blue-700 shadow-sm transition-colors hover:bg-blue-100 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40"
            aria-expanded={showMenu}
          >
            CLICK HERE FOR MENU OF CONTENTS
            {showMenu ? (
              <ChevronUp className="h-5 w-5 border-2 border-current rounded-full" />
            ) : (
              <ChevronDown className="h-5 w-5 border-2 border-current rounded-full" />
            )}
          </button>

          {/* Expanded Menu Display */}
          {showMenu && (
            <div className="mt-4 w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
              <Menu />
            </div>
          )}
        </div>

        {/* Single Image Below Text and Menu Button */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/acharya2.jpg"
            alt="A portrait of Basrur Panduranga Acharya"
            width={400}
            height={300}
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      </motion.section>
    </motion.main>
  )
}