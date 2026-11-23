import { Bookmark, Play } from "lucide-react"

import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6"


type LatestEpisode = {
  id: number
  image: string
  category: string
  title: string
  time: string
}

const latestEpisodes: LatestEpisode[] = [
  {
    id: 1,
    image: "/software-unsplash.png",
    category: "Naija Tech Today",
    title: "Nigerian Startups Explore New AI Tools",
    time: "1 day ago",
  },
  {
    id: 2,
    image: "/software-unsplash.png",
    category: "Naija Tech Today",
    title: "Nigerian Startups Explore New AI Tools",
    time: "1 day ago",
  },
]

const PresenterProfile = () => {
  return (
        <section className="w-full">
      {/* Same wrapper as the other sections so the edges line up */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-12 lg:px-36">
        <h2 className="font-['Roboto_Serif'] text-xl font-bold text-[#1F1F1F] sm:text-2xl">
          Presenters
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left: photo + name */}
          <div>
            <div className="flex aspect-[6/5] items-end justify-center overflow-hidden rounded-2xl bg-[#FEC021]">
              <img
                src="/suitee.png"
                alt="Tolani Adisa"
                className="h-[95%] w-auto object-contain object-bottom"
              />
            </div>
            <h3 className="mt-3 font-['Roboto_Serif'] text-xl font-semibold text-[#1F1F1F] sm:text-2xl">
              Tolani Adisa
            </h3>
          </div>

          {/* Right: bio + latest episodes */}
          <div className="text-sm text-[#1F1F1F]">
            <p className="leading-relaxed text-gray-500">
              <span className="font-semibold text-[#1F1F1F]">Amaka Nwosu</span>{" "}
              is a vibrant Nigerian radio presenter and media personality known
              for her warm voice, sharp opinions, and natural ability to
              connect with listeners. Born and raised in Enugu, Amaka developed
              a passion for storytelling and broadcasting while studying Mass
              Communication at university.
            </p>

            <p className="mt-4">
              <span className="font-semibold">Show Host:</span>{" "}
              <span className="text-gray-500">
                The Morning Gist, Naija Tech Today
              </span>
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="font-semibold">Socials:</span>
              <span className="text-gray-500">@thenwosuama</span>
              <div className="flex items-center gap-1.5">
                 <FaInstagram className="h-3 w-3" aria-label="Instagram" />
                 <FaFacebook className="h-3 w-3" aria-label="Facebook" />
                 <FaXTwitter className="h-3 w-3" aria-label="X" />
               </div>
            </div>

            {/* Latest episodes box */}
            <div className="mt-5 rounded-xl border border-gray-300 p-4 md:max-w-md">
              <h4 className="font-['Roboto_Serif'] text-lg font-semibold sm:text-xl">
                Lastest Episodes
              </h4>

              <ul className="mt-3 space-y-4">
                {latestEpisodes.map((ep) => (
                  <li key={ep.id} className="flex items-center gap-3">
                    <img
                      src={ep.image}
                      alt={ep.title}
                      className="h-14 w-14 shrink-0 rounded-md object-cover sm:h-16 sm:w-16"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-gray-500">{ep.category}</p>
                      <h5 className="mt-1 font-['Roboto_Serif'] text-xs font-semibold leading-snug sm:text-sm">
                        {ep.title}
                      </h5>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-[9px] text-gray-500">{ep.time}</span>
                        <button
                          type="button"
                          className="flex items-center gap-1.5 text-[10px] hover:opacity-70"
                        >
                          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#1F1F1F]">
                            <Bookmark className="h-2 w-2 fill-current" />
                          </span>
                          Save
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      aria-label={`Play ${ep.title}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1F1F1F] transition-transform hover:scale-110"
                    >
                      <Play className="ml-px h-3 w-3 fill-[#1F1F1F]" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresenterProfile