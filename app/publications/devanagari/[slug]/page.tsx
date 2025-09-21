import { PROJECTS_DEVANAGARI } from '@/app/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return PROJECTS_DEVANAGARI.map((project) => ({
    slug: project.slug,
  }))
}

export default function DevanagariPublicationPage({ params }: PageProps) {
  const project = PROJECTS_DEVANAGARI.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{project.name}</h1>
      {project.subtitle && (
        <h2 className="mt-1 text-lg text-zinc-500 dark:text-zinc-400">
          {project.subtitle}
        </h2>
      )}
      <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      {project.image && (
        <div className="mt-8 flex justify-center">
          <Image
            src={project.image}
            alt={`Cover of ${project.name}`}
            width={300}
            height={450}
            className="rounded-lg object-contain shadow-md"
          />
        </div>
      )}
    </div>
  )
}
