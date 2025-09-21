import { PROJECTS_KANNADA } from '@/app/data'
import { notFound } from 'next/navigation'

export default function KannadaPublicationPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS_KANNADA.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">{project.description}</p>
    </div>
  )
}