import { Clock } from "lucide-react"

const ArticleHeader = () => {
  return (
   <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-12 lg:px-36">
    <header className="mx-auto max-w-2xl">
      <h1 className="font-serif text-2xl font-bold leading-tight text-[#1F1F1F] md:text-[26px]">
        Nigerian Farmers Turn Cassava Waste Into Eco-Friendly Packaging
      </h1>
       
        <div className= "mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#1F1F1F]">
          <div className=" flex items-center gap-2">
            <div
              className="h-4 w-4 shrink-0 rounded-full bg-[#FEC021]"
              aria-hidden="true"
            />
            <span>Seyi Moyosoreoluwa</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock size={14} aria-hidden="true" />
            <time dateTime="2026-10-15">October 15</time>
          </div>

          <span>5mins Read</span>
        </div>
    </header>

    <div className="mt-6 h-48 overflow-hidden rounded-2xl sm:mt-8 sm:h-64 md:h-80 lg:h-[360px]">
      <img src="/farm.png" alt="Article Image" className="block w-full h-full rounded-2xl object-cover" />

    </div>
   </section>
  )
}

export default ArticleHeader