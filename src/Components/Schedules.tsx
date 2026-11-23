import { useState } from "react"
import { Play, Bookmark } from "lucide-react"

const days = [
  { id: "mon", label: "Mon" },
  { id: "tue", label: "Tue" },
  { id: "wed", label: "Wed." },
  { id: "thu", label: "Thurs." },
  { id: "fri", label: "Fri." },
  { id: "sat", label: "Sat." },
  { id: "sun", label: "Sun." },
]

type Programme = {
  id: number
  day: string
  time: string
  title: string
  presenters: string
  image: string
  isLive?: boolean
}

const programmes: Programme[] = [
  { id: 1, day: "mon", time: "7:00am – 8:30am", title: "The morning gist", presenters: "Femi Onakoya & Amaka Nwosu", image: "/Book.png", isLive: true },
  { id: 2, day: "mon", time: "7:00am – 8:30am", title: "The morning gist", presenters: "Femi Onakoya & Amaka Nwosu", image: "/Book.png" },
  { id: 3, day: "mon", time: "7:00am – 8:30am", title: "The morning gist", presenters: "Femi Onakoya & Amaka Nwosu", image: "/Book.png" },
  { id: 4, day: "mon", time: "7:00am – 8:30am", title: "The morning gist", presenters: "Femi Onakoya & Amaka Nwosu", image: "/Book.png" },
  { id: 5, day: "mon", time: "7:00am – 8:30am", title: "The morning gist", presenters: "Femi Onakoya & Amaka Nwosu", image: "/Book.png" },
  { id: 6, day: "mon", time: "7:00am – 8:30am", title: "The morning gist", presenters: "Femi Onakoya & Amaka Nwosu", image: "Book.png" },
  { id: 7, day: "mon", time: "7:00am – 8:30am", title: "The morning gist", presenters: "Femi Onakoya & Amaka Nwosu", image: "/Book.png" },
]

const Schedules = () => {
  const [activeDay, setActiveDay] = useState("mon")

  const todaysProgrammes = programmes.filter((p) => p.day === activeDay)

  return (
    <section className="w-full px-4 py-8 md:px-12 lg:px-36">
      <h1 className="text-2xl font-bold text-[#1F1F1F] md:text-[28px]">
        Programme Schedules
      </h1>

      {/* Day tabs */}
      <div className="mt-6 flex flex-wrap gap-3">
        {days.map((day) => {
          const isActive = day.id === activeDay
          return (
            <button
              key={day.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveDay(day.id)}
              className={`cursor-pointer rounded-full border border-[#1F1F1F] px-5 py-1.5 text-xs transition-colors md:w-[52px] md:px-0 ${
                isActive
                  ? "bg-[#1F1F1F] text-white"
                  : "bg-white text-[#1F1F1F] hover:bg-gray-100"
              }`}
            >
              {day.label}
            </button>
          )
        })}
      </div>

      {/* Programme list */}
      <ul className="mt-6 border-t border-gray-300">
        {todaysProgrammes.length === 0 && (
          <li className="py-8 text-sm text-gray-500">
            No programmes scheduled for this day.
          </li>
        )}

        {todaysProgrammes.map((item) => (
          <li
            key={item.id}
            className={`flex items-center gap-3 border-b border-gray-300 py-4 md:gap-6 ${
              item.isLive ? "md:py-8" : "md:py-5"
            }`}
          >
            {/* Time (desktop) */}
            <p className="hidden w-32 shrink-0 text-xs text-[#1F1F1F] md:block">
              {item.time}
            </p>

            {/* Play button */}
            <button
              type="button"
              aria-label={`Play ${item.title}`}
              className={`flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full ${
                item.isLive
                  ? "bg-[#FDBF22]"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              <Play
                className={`ml-px h-3 w-3 fill-current ${
                  item.isLive ? "text-[#1F1F1F]" : "text-gray-400"
                }`}
              />
            </button>

            {/* Thumbnail */}
            <img
              src={item.image}
              alt=""
              className="h-10 w-10 shrink-0 rounded-sm object-cover"
            />

            {/* Title + presenters */}
            <div className="flex min-w-0 flex-1 flex-col gap-1 md:grid md:grid-cols-2 md:items-center md:gap-6">
              <div className="min-w-0">
                {/* Time (mobile) */}
                <p className="text-[11px] text-gray-500 md:hidden">{item.time}</p>
                <h3 className="truncate text-sm font-medium text-[#1F1F1F] md:text-base">
                  {item.title}
                </h3>
              </div>
              <p className="truncate text-xs text-[#1F1F1F]">{item.presenters}</p>
            </div>

            {/* Live badge + bookmark */}
            <div className="flex shrink-0 items-center gap-3 md:gap-6">
              <div className="flex md:w-[90px] md:justify-end">
                {item.isLive && (
                  <span className="rounded-full bg-[#EE443F] px-3 py-1.5 text-[10px] font-medium text-white md:px-4">
                    Live Now
                  </span>
                )}
              </div>
              <button
                type="button"
                aria-label={`Save ${item.title}`}
                className="cursor-pointer text-[#1F1F1F] hover:opacity-70"
              >
                <Bookmark className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Schedules