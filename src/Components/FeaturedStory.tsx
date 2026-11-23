const FeaturedStory = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-12 lg:px-36">
      <h2 className="mb-5 text-2xl font-bold text-[#1F1F1F] md:mb-6 md:text-3xl">
        Featured Story
      </h2>

      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
        {/* Image: on top for mobile, on the right from md up */}
        <div className="aspect-[16/10] overflow-hidden md:order-2 md:aspect-auto md:h-72 lg:h-80">
          <img
            src="/farm.png"
            alt="Rows of vegetables growing on a green farm"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-start md:order-1">
          <span className="mb-3 rounded-md bg-[#1F1F1F] px-3 py-1 text-[11px] font-medium text-[#FEC021]">
            Exclusive
          </span>

          <h3 className="font-serif text-xl font-bold leading-tight text-[#1F1F1F] lg:text-[25px]">
            Nigerian Farmers Turn Cassava Waste Into Eco-Friendly Packaging
          </h3>

          <p className="mt-3 max-w-md text-sm leading-snug text-[#1F1F1F]">
            Researchers say the innovation could create new income
            opportunities for rural communities.
          </p>

          <a
            href="/articles/cassava-packaging"
            className="mt-6 inline-flex items-center rounded-full bg-[#1F1F1F] px-2 py-1 text-sm font-medium text-[#FEC021] transition hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F1F1F] focus-visible:ring-offset-2"
          >
            Read Article
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;