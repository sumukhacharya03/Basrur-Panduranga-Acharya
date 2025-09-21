import { PROJECTS_KANNADA } from '@/app/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export async function generateStaticParams() {
  return PROJECTS_KANNADA.map((project) => ({
    slug: project.slug,
  }))
}

export default function KannadaPublicationPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS_KANNADA.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.description}</p>
      
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

