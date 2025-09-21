import { EDUCATION } from '@/app/data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return EDUCATION.map((education) => ({
    slug: education.slug,
  }))
}

export default function EducationPage({ params }: { params: { slug: string } }) {
  const education = EDUCATION.find((e) => e.slug === params.slug)

  if (!education) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{education.title}</h1>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        {Array.isArray(education.description) ? (
          <>
            <p>{education.description[0]}</p>
            <p>{education.description[1]}</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>{education.description[2]}</li>
              <li>{education.description[3]}</li>
            </ul>
          </>
        ) : (
          <p>{education.description}</p>
        )}
      </div>
    </div>
  )
}

