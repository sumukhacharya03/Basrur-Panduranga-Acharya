import { EDUCATION } from '@/app/data'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return EDUCATION.map((education) => ({
    slug: education.slug,
  }))
}

export default async function EducationPage({ params }: PageProps) {
  const { slug } = await params
  const education = EDUCATION.find((e) => e.slug === slug)

  if (!education) {
    notFound()
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">{education.title}</h1>

      {Array.isArray(education.description) ? (
        <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>{education.description[0]}</p>
          <p>{education.description[1]}</p>
          <ul className="!mt-4 list-inside list-disc space-y-2">
            <li>{education.description[2]}</li>
            <li>{education.description[3]}</li>
          </ul>
        </div>
      ) : (
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {education.description}
        </p>
      )}
    </div>
  )
}
