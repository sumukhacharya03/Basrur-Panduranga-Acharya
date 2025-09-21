import { ACCOMPLISHMENTS } from '@/app/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return ACCOMPLISHMENTS.map((accomplishment) => ({
    slug: accomplishment.slug,
  }))
}

// The 'async' keyword has been removed from this line
export default function AccomplishmentPage({ params }: PageProps) {
  const accomplishment = ACCOMPLISHMENTS.find((a) => a.slug === params.slug)

  if (!accomplishment) {
    notFound()
  }

  const introParagraph = accomplishment.description[0]
  const listItems = accomplishment.description.slice(1)

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">{accomplishment.title}</h1>

      <div className="leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>{introParagraph}</p>

        {listItems.length > 0 && (
          <ul className="!mt-4 list-inside list-disc space-y-2">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Image Gallery Section */}
      {accomplishment.images && (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {accomplishment.images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`${accomplishment.title} - image ${index + 1}`}
              width={200}
              height={200}
              className="h-auto w-full rounded-lg object-cover shadow-md"
            />
          ))}
        </div>
      )}
    </div>
  )
}
