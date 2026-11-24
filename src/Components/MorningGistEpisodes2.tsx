import EpisodeCard, {type Episode} from "./EpisodeCard";

const episodes: Episode[] = [
  { id: 1, image: "/software-unsplash.png", category: "Naija Business Hour", title: "Small Businesses Embrace Digital Payments", duration: "20 mins Listen" },
  { id: 2, image: "/three-women.png", category: "Street Talk Naija", title: "Should Friends Always Tell You the Truth?", duration: "30 mins Listen" },
  {
    id: 3,
    image: "/man.png",
    category: "Afrobeats After Dark",
    title: "New Afrobeats Voices Take Centre Stage",
    duration: "20 mins Listen",
  },
  {
    id: 4,
    image: "/software-unsplash.png",
    category: "Naija Tech Today",
    title: "Nigerian Startups Explore New AI Tools",
    duration: "20 mins Listen",
  },
]

const MorningGistEpisodes2 = () => {
  return (
    
         <section className="w-full">
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-12 lg:px-36">

          <h2 className="mb-6 text-2xl font-bold text-[#1F1F1F]">The Morning Gist Episodes</h2>
    
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} {...episode} />
            ))}
          </div>
          </div>
        </section>
  )
}

export default MorningGistEpisodes2