import { EDUCATION } from '@/app/data'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return EDUCATION.map((education) => ({
    slug: education.slug,
  }))
}

export default function EducationPage({ params }: PageProps) {
  const education = EDUCATION.find((e) => e.slug === params.slug)

  if (!education) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{education.title}</h1>
      
      {Array.isArray(education.description) ? (
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <p>{education.description[0]}</p>
          <p>{education.description[1]}</p>
          <ul className="list-disc list-inside space-y-2 !mt-4">
            <li>{education.description[2]}</li>
            <li>{education.description[3]}</li>
          </ul>
        </div>
      ) : (
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {education.description}
        </p>
      )}
    </div>
  )
}

