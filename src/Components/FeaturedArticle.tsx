
const FeaturedArticle = () => {
  return (
     <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-12 lg:px-36">
      <div className="grid overflow-hidden md:min-h-[360px] md:grid-cols-2">
        {/* Left: yellow content panel */}
        <div className="flex flex-col justify-center bg-[#FEC021] px-8 py-10 md:px-12 md:py-14">
        
          {/* Heading */}
          <h1 className="font-serif text-2xl font-bold leading-tight text-[#1F1F1F] md:text-[26px]">
            Community Volunteers Rescue Historic Market From Demolition
          </h1>

          {/* Description */}
          <p className=" mt-3 text-sm leading-snug text-[#1F1F1F]">
            Residents have proposed turning the old marketplace into a cultural and tourism centre.
          </p>
        </div>

        {/* Right: image */}
        <div className="relative h-64 md:h-full">
          <img
            src="/fruits.png"
            alt="Busy Lagos street with commercial buses"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticle