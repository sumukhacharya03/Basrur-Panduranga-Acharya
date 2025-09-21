import { ACCOMPLISHMENTS } from '@/app/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export async function generateStaticParams() {
  return ACCOMPLISHMENTS.map((accomplishment) => ({
    slug: accomplishment.slug,
  }))
}

export default function AccomplishmentPage({ params }: { params: { slug: string } }) {
  const accomplishment = ACCOMPLISHMENTS.find((a) => a.slug === params.slug)

  if (!accomplishment) {
    notFound()
  }

  // Helper to check if a description item should be a list item
  const isListItem = (text: string) => {
    // Items that don't start with a capital letter or are part of a list
    // can be considered list items. Adjust logic as needed.
    return !/^[A-Z]/.test(text) || accomplishment.description.length > 1;
  }

  const introParagraph = accomplishment.description[0];
  const listItems = accomplishment.description.slice(1);


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{accomplishment.title}</h1>

      <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <p>{introParagraph}</p>

          {listItems.length > 0 && (
             <ul className="list-disc list-inside space-y-2 mt-4">
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
          )}
      </div>

      {/* Image Gallery Section */}
      {accomplishment.images && (
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {accomplishment.images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`${accomplishment.title} - image ${index + 1}`}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                />
            ))}
        </div>
      )}

    </div>
  )
}

