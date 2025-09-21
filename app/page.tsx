'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

export default function Personal() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.section>
        {/* Text Content Container */}
        <div className="space-y-4">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Basrur Panduranga Acharya is an Author & Columnist. A Kannada & Hindi scholar and a teacher by profession.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                He hails from Basrur Acharya family. Basrur being an ancient ritual centre of Mutts, Vrindavanas & Kuladevata Temples, the said family has rendered their services to all centres over the generations. This hereditary role has come to Acharya naturally in the form of ‘Purohit and Archak’ and he performed these roles over the decades.
            </p>
        </div>

        {/* Single Image Below Text */}
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

