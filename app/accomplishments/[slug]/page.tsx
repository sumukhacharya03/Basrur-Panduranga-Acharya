import { ACCOMPLISHMENTS } from '@/app/data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return ACCOMPLISHMENTS.map((item) => ({
      slug: item.slug,
    }))
  }

export default function AccomplishmentPage({ params }: { params: { slug: string } }) {
  const accomplishment = ACCOMPLISHMENTS.find((a) => a.slug === params.slug)

  if (!accomplishment) {
    notFound()
  }

  // Ensure description is always an array
  const descriptionItems = Array.isArray(accomplishment.description)
    ? accomplishment.description
    : [accomplishment.description];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{accomplishment.title}</h1>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>{descriptionItems[0]}</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          {descriptionItems.slice(1).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

