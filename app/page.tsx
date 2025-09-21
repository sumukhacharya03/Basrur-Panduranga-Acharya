'use client'
import { motion } from 'motion/react'

export default function Personal() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.section>
        <div className="flex-1 space-y-4 text-zinc-600 dark:text-zinc-400">
          <p>
            Basrur Panduranga Acharya is an Author & Columnist. A Kannada & Hindi scholar and a teacher by profession.
          </p>
          <p>
            He hails from Basrur Acharya family. Basrur being an ancient ritual centre of Mutts, Vrindavanas & Kuladevata Temples, the said family has rendered their services to all centres over the generations. This hereditary role has come to Acharya naturally in the form of 'Purohit and Archak' and he performed these roles over the decades.
          </p>
        </div>
      </motion.section>
    </motion.main>
  )
}

