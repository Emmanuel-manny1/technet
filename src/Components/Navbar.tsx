 import { Link } from "react-router-dom"

const links = [
  "Live",
  "Shows",
  "Schedules",
  "Presenters",
  "Podcasts",
  "News",
  "Contact",
]

type NavbarProps = {
  onLinkClick?: () => void
}

const Navbar = ({ onLinkClick }: NavbarProps) => {
  return (
    <nav className="flex flex-col gap-4 text-sm font-semibold text-[#1F1F1F] lg:flex-row lg:items-center lg:gap-5 lg:text-xs">
      {links.map((link) => (
       <Link
  to={`/${link.toLowerCase()}`}
  key={link}
  onClick={onLinkClick}
  className="transition-colors hover:text-blue-600"
>
  {link}
</Link>
      ))}
    </nav>
  )
}

export default Navbar