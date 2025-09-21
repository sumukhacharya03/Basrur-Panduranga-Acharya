'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogTitle,
  MorphingDialogDescription,
} from '@/components/ui/morphing-dialog'
import {
  PROJECTS_KANNADA,
  PROJECTS_DEVANAGARI,
  EDUCATION,
  ACCOMPLISHMENTS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Basrur Panduranga Acharya is an Author & Columnist. A Kannada & Hindi scholar and a teacher by profession. He hails from Basrur Acharya family. Basrur being an ancient ritual centre of Mutts, Vrindavanas & Kuladevata Temples, the said family has rendered their services to all centres over the generations. This hereditary role has come to Acharya naturally in the form of ‘Purohit and Archak’ and he performed these roles over the decades.
          </p>
        </div>
      </motion.section>

      {/* Education Boxes Section - Full Width */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col gap-8">
          {/* Vaidik Education Box */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">Vaidik Education</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Basrur Panduranga Acharya was born on 29th January 1940 in Basrur, Kundapura Tq, Udupi District. He had his vaidik studies under his father Basrur Vasudev Acharya and Higher vedik studies under his father’s younger brother Basur Ramdas Acharya.
            </p>
          </div>

          {/* Formal Education Box */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">Formal Education</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Basrur Panduranga Acharya studied his schooling at Hindu School Basrur and Board High School Basrur. Interestingly, he was the FIRST student of Board High School Basrur and subsequently he became a teacher in the same High School and served for many years.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Secondary Teacher’s Training at Government Training School in Udupi and B.Ed training at Manipal College of Education.</li>
              <li>Mysore Kannada Pandit (Final) Exam by Karnataka Government.</li>
              <li>Hindi Ratna by Mysore Hindi Parishat.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Unified Publications Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-2xl font-bold">Publications</h3>
        <p className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
          All these books have been published by the “Acharya Prakashana, Basrur”. Under the leadership & initiative led by Basrur (late) Damodara Acharya, with the Finance support from the generous donors Shri U. Govindaraya Acharya & SMT Kusuma G Acharya Siddapura. Panduranga Acharya has played an instrumental role in terms of collecting enormous data & artefacts, assisted by Kundapura Ved. Jagdeesh Bhat & Agniman Talari Vaman Bhat while coming up these books.
        </p>

        {/* Kannada Publications */}
        <div>
            <h4 className="mb-3 text-lg font-medium">Publications – Kannada</h4>
            <p className="mb-5 text-xs italic text-zinc-400 dark:text-zinc-500">
              Click on a box to see the description.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {PROJECTS_KANNADA.map((project) => (
                <MorphingDialog key={project.id}>
                  <MorphingDialogTrigger>
                    <div className="w-full cursor-pointer rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-left transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800/80">
                      <h4 className="font-normal text-zinc-800 dark:text-zinc-100">
                        {project.name}
                      </h4>
                    </div>
                  </MorphingDialogTrigger>
                  <MorphingDialogContainer>
                    <MorphingDialogContent className="relative w-full max-w-lg rounded-2xl bg-white p-6 dark:bg-zinc-950">
                      <MorphingDialogTitle>
                        <h2 className="text-xl font-bold">{project.name}</h2>
                      </MorphingDialogTitle>
                      <MorphingDialogDescription>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                          {project.description}
                        </p>
                      </MorphingDialogDescription>
                      <MorphingDialogClose>
                        <XIcon className="h-5 w-5 text-zinc-500" />
                      </MorphingDialogClose>
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>
              ))}
            </div>
          </div>

        {/* Devanagari Publications */}
        <div className="mt-12">
          <h4 className="mb-3 text-lg font-medium">Publications – Devanagari Script</h4>
          <p className="mb-5 text-xs italic text-zinc-400 dark:text-zinc-500">
              Click on a box to see the description.
            </p>
          <div className="grid grid-cols-1 gap-3">
            {PROJECTS_DEVANAGARI.map((project) => (
              <MorphingDialog key={project.id}>
                <MorphingDialogTrigger>
                  <div className="w-full cursor-pointer rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-left transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800/80">
                    <h4 className="font-normal text-zinc-800 dark:text-zinc-100">
                        {project.name}
                    </h4>
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent className="relative w-full max-w-lg rounded-2xl bg-white p-6 dark:bg-zinc-950">
                    <MorphingDialogTitle>
                      <h2 className="text-xl font-bold">{project.name}</h2>
                    </MorphingDialogTitle>
                    <MorphingDialogDescription>
                      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>
                    </MorphingDialogDescription>
                    <MorphingDialogClose>
                      <XIcon className="h-5 w-5 text-zinc-500" />
                    </MorphingDialogClose>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Accomplishments Section - Full Width */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col gap-8">
          {ACCOMPLISHMENTS.map((accomplishment) => (
            <div key={accomplishment.id} className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">{accomplishment.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                {accomplishment.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

    </motion.main>
  )
}