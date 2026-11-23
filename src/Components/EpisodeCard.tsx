import { Play, Bookmark } from "lucide-react"

export type Episode = {
  id: number
  image: string
  category: string
  title: string
  duration: string
  isNew?: boolean
}

const EpisodeCard = ({ image, category, title, duration, isNew }: Episode) => {
  return (
    <article>
      {/* Image + play button */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <button
          type="button"
          aria-label={`Play ${title}`}
          className="absolute bottom-3 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#FDBF22] transition-transform hover:scale-110"
        >
          <Play className="ml-px h-2.5 w-2.5 fill-[#1F1F1F] text-[#1F1F1F]" />
        </button>
      </div>

      <p className="mt-3 text-[10px] text-gray-500">{category}</p>

      <h3 className="mt-2 font-serif text-sm font-semibold text-[#1F1F1F]">
        {title}
      </h3>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-[9px] text-gray-500">{duration}</span>
        <button
          type="button"
          className="flex items-center gap-2 text-xs text-[#1F1F1F] hover:opacity-70"
        >
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#1F1F1F]">
            <Bookmark className="h-2.5 w-2.5 fill-current" />
          </span>
          Save
        </button>
      </div>
    </article>
  )
}

export default EpisodeCard

