import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import Navbar from "./Navbar"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative w-full bg-gray-100">
      <div className="flex h-[70px] w-full items-center justify-between px-4 md:px-12 lg:px-36">
        {/* Logo */}
        <a
          href="/"
          className="text-lg font-bold tracking-[0.3em] text-black md:text-2xl md:tracking-[0.4em]"
        >
          TECHNET
        </a>

        {/* Desktop links */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Right side: search + hamburger */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="cursor-pointer text-gray-800 transition-colors hover:text-blue-600"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="cursor-pointer text-gray-800 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-gray-100 px-4 py-5 md:px-12 lg:hidden">
          <Navbar onLinkClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  )
}

export default Header