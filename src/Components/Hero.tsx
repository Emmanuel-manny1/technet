import { Play, Bookmark } from "lucide-react"

const Hero = () => {
  return ( <section className="w-full px-4 py-8 md:px-12 lg:px-36">
      <div className="grid overflow-hidden md:min-h-[360px] md:grid-cols-2">
        {/* Left: yellow content panel */}
        <div className="flex flex-col justify-center bg-[#FEC021] px-8 py-10 md:px-12 md:py-14">
          {/* Tag */}
          <span className="mb-5 w-fit rounded-sm bg-[#1F1F1F] px-2 py-1 text-[8px] font-medium text-[#FEC021]">
            #The Morning Gist
          </span>

          {/* Heading */}
          <h1 className="font-serif text-2xl font-bold leading-tight text-[#1F1F1F] md:text-[26px]">
            Fuel Prices Spark Fresh Transport Debate
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-[260px] text-xs leading-snug text-[#1F1F1F]">
            Commuters and transport operators react to another difficult week on
            the roads.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
               type="button"
  className="flex items-center gap-2 rounded-full bg-[#1F1F1F] px-5 py-2.5 text-xs font-medium text-[#FEC021] transition-opacity hover:opacity-90 cursor-pointer"
>
  <Play className="h-3 w-3 fill-current" />
              Listen Now
            </button>

            <button

               type="button"
  className="flex items-center gap-2 rounded-full bg-[#1F1F1F] px-5 py-2.5 text-xs font-medium text-[#FEC021] transition-opacity hover:opacity-90 cursor-pointer"
>
  <Bookmark className="h-3 w-3 fill-current" />
              Save to Playlist
            </button>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative h-64 md:h-full">
          <img
            src="/Frame-62.png"
            alt="Busy Lagos street with commercial buses"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
   
  )
}

export default Hero