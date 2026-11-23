const items = [1, 2, 3]


const ContinueListening = () => {
  return (
    <section className="w-full px-4 py-8 md:px-12 lg:px-36">
      <h2 className="mb-6 text-2xl font-bold text-[#1F1F1F] md:text-[28px]">
        Continue Listening
      </h2>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex min-h-[66px] items-center border-y border-gray-400 py-3"
          >
            {/* Row content goes here */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContinueListening