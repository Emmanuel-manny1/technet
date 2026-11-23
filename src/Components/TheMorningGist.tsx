


const TheMorningGist = () => {
  return (
     <section className="w-full">
      {/* Same container width as your episodes grid */}
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        {/* Yellow box */}
        <div className="flex flex-col items-center gap-6 bg-[#FEC021] px-6 py-8 md:flex-row md:justify-center md:gap-12 md:px-10 md:py-12 lg:gap-20">
          {/* Text */}
          <div className="w-full md:max-w-sm">
            <h2 className="font-['Roboto_Serif'] text-2xl font-bold leading-tight text-[#1a1a1a] sm:text-3xl">
              The Morning Gist
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#1a1a1a]">
              The show covers the day&rsquo;s biggest news, social issues,
              lifestyle trends, business updates, and everyday conversations,
              while giving listeners the chance to share their opinions and
              experience
            </p>

            <hr className="mt-4 border-0 border-t border-[#1a1a1a]/70" />
          </div>

          {/* Image */}
          <div className="w-full md:w-[40%] md:max-w-xs">
            <img
              src="/News.png"
              alt="Breaking news graphic"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheMorningGist
