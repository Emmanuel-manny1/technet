import EpisodeCard, { type Episode } from "./EpisodeCard"


const episodes: Episode[] = [
  {
    id: 1,
    image: "/software-unsplash.png",
    category: "The Morning Gist",
    title: "Fuel Prices Spark Fresh Transport Debate",
    duration: "30 mins listen",
    isNew: true,
  },
  {
    id: 2,
    image: "/man.png",
    category: "The Morning Gist",
    title: "Nigerians Share Their Best Morning Routines",
    duration: "30 mins listen",
  },
  {
    id: 3,
    image: "/three-women.png",
    category: "The Morning Gist",
    title: "Listeners Pick Their Ultimate Breakfast",
    duration: "30 mins listen",
  },
   { id: 4, image: "/software-unsplash.png", category: "The Morning Gist", title: "Local Food Businesses See Growing Demand", duration: "30 mins listen" },
 {
    id: 5,
    image: "/software-unsplash.png",
    category: "The Morning Gist",
    title: "Fuel Prices Spark Fresh Transport Debate",
    duration: "30 mins listen",
    isNew: true,
  },
  {
    id: 6,
    image: "/man.png",
    category: "The Morning Gist",
    title: "Nigerians Share Their Best Morning Routines",
    duration: "30 mins listen",
  },
  {
    id: 7,
    image: "/three-women.png",
    category: "The Morning Gist",
    title: "Listeners Pick Their Ultimate Breakfast",
    duration: "30 mins listen",
  },
   { id: 8, image: "/software-unsplash.png", category: "The Morning Gist", title: "Local Food Businesses See Growing Demand", duration: "30 mins listen" },
]


const MorningGistEpisodes = () => {
  return (
     <section className="w-full">
      {/* Same wrapper as the MorningGist banner so the edges line up */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <h2 className="font-['Roboto_Serif'] text-xl font-bold text-[#1F1F1F] sm:text-2xl">
          The Morning Gist Episodes
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} {...episode} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-[#FEC021] px-6 py-2 text-sm font-medium text-[#1F1F1F] transition-opacity hover:opacity-90"
          >
            See more Episodes
          </button>
        </div>
      </div>
    </section>
  )
}

export default MorningGistEpisodes