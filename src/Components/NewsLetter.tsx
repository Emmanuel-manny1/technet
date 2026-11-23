import { useState } from "react"





const NewsLetter = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Send the email to your backend or email service here
    console.log("Subscribed:", email)
    setEmail("")
  }

  return (
    <section className="w-full px-4 py-10 md:px-12 md:py-14 lg:px-36">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-6">
        {/* Left: heading + text */}
        <div className="max-w-[360px]">
          <h2 className="font-serif text-xl font-bold text-[#1F1F1F] md:text-2xl">
            Subscribe to News Briefing
          </h2>
          <p className="mt-2 text-xs leading-snug text-[#1F1F1F]">
            News and expert analysis for every schedule. Get morning and evening
            editions of our flagship newsletter in your inbox.
          </p>
        </div>

        {/* Right: email form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="h-11 w-full rounded-md border-2 border-[#1F1F1F] px-3 text-xs text-[#1F1F1F] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FDBF22] sm:flex-1 lg:w-[260px] lg:flex-none"
          />
          <button
            type="submit"
            className="h-11 rounded-md bg-[#FDBF22] px-8 text-xs font-medium text-[#1F1F1F] transition-opacity hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsLetter