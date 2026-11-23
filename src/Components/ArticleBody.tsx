import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { Link2 } from "lucide-react"

const ArticleBody = () => {
  const paragraph = "text-sm leading-relaxed text-[#1F1F1F] md:text-[15px]"

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12 md:px-12 lg:px-36">
      <article className="mx-auto max-w-2xl space-y-5">
        <p className={paragraph}>
          A group of Nigerian farmers working in Ozo-State has developed a new
          way of turning cassava waste into environmentally friendly packaging,
          in what they say could provide an additional source of income for
          farmers while reducing plastic waste.
        </p>

        <p className={paragraph}>
          The initiative, led locally by the Ibo-Ozo Agro-Innovation
          Cooperative, uses cassava peels and other agricultural residues that
          would traditionally be discarded after processing.
        </p>

        <blockquote className="py-2 font-serif text-xl font-bold leading-snug text-[#1F1F1F] md:text-2xl">
          “We wanted to find another use for something that farmers already
          have in large quantities,” Oladimeji said. “Instead of seeing cassava
          waste as rubbish, we are treating it as a valuable raw material.”
        </blockquote>

        <p className={paragraph}>
          The cooperative says the packaging is designed to be lightweight,
          durable and biodegradable. Early trials have reportedly focused on
          takeaway food containers and protective trays for markets and
          restaurants.
        </p>

        <p className={paragraph}>
          Farmers participating in the program are also expected to benefit
          financially, rather than disposing of cassava waste, they can sell
          the material to local processing centres, creating an additional
          revenue stream alongside their traditional agricultural activities.
        </p>

        <p className={paragraph}>
          Environmental advocates involved in the project say agricultural
          waste could play a bigger role in Nigeria’s growing search for
          alternatives to conventional plastic packaging.
        </p>

        <figure>
          <img
            src="/green.png"
            alt="A farmer in a green field reviewing notes on a tablet"
            className="aspect-[3/2] w-full rounded-2xl object-cover"
          />
        </figure>

        <p className={paragraph}>
          The project is currently being tested with several food vendors and
          small businesses in Ibadan. Participating vendors are providing
          feedback on the packaging’s strength, moisture resistance and
          suitability for different types of food.
        </p>

        <p className={paragraph}>
          However, the organisers acknowledge that challenges remain,
          particularly around production costs, large-scale processing and
          ensuring that the packaging can compete with cheaper conventional
          alternatives.
        </p>

        <footer className="flex items-center gap-4 border-t border-[#1F1F1F]/10 pt-4">
          <span className="text-sm font-bold text-[#1F1F1F]">Share</span>
          <div className="flex items-center gap-3">
           <a href="#" aria-label="Share on Facebook" className="text-[#1F1F1F] transition hover:text-[#FEC021]">
         <FaFacebookF size={16} />
          </a>
          <a href="#" aria-label="Share on LinkedIn" className="text-[#1F1F1F] transition hover:text-[#FEC021]">
          <FaLinkedinIn size={16} />
            </a>
            <button type="button" aria-label="Copy link" className="text-[#1F1F1F] transition hover:text-[#FEC021]">
              <Link2 size={18} />
            </button>
          </div>
        </footer>
      </article>
    </section>
  )
}

export default ArticleBody