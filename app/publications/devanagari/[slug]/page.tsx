import { PROJECTS_DEVANAGARI } from '@/app/data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return PROJECTS_DEVANAGARI.map((project) => ({
    slug: project.slug,
  }))
}

export default function DevanagariPublicationPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS_DEVANAGARI.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
      {project.subtitle && (
        <p className="text-zinc-500 dark:text-zinc-400 -mt-2 mb-4">
          {project.subtitle}
        </p>
      )}
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.description}</p>
    </div>
  )
}

