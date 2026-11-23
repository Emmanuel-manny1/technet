import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6"

const columns = [
  {
    id: 1,
    title: "About & Help",
    links: ["Help", "The News Agents", "How to listen", "Contact us"],
  },
  {
    id: 2,
    title: "Legal & Info",
    links: [
      "Terms & conditions",
      "Privacy policy",
      "Cookies",
      "Company details",
      "Public file",
    ],
  },
  {
    id: 3,
    title: "Business & Careers",
    links: ["Advertise", "Global careers"],
  },
  {
    id: 4,
    title: "Legal & Info",
    links: [
      "Terms & conditions",
      "Privacy policy",
      "Cookies",
      "Company details",
      "Public file",
    ],
  },
]

const socials = [
  { id: 1, label: "Facebook", href: "#", Icon: FaSquareFacebook },
  { id: 2, label: "Instagram", href: "#", Icon: FaSquareInstagram },
  { id: 3, label: "X", href: "#", Icon: FaSquareXTwitter },
]




const Footer = () => {
  return (
    <footer className="w-full bg-[#1F1F1F] px-4 py-12 text-white md:px-12 md:py-14 lg:px-36">
      {/* Logo */}
      <a
        href="/"
        className="text-lg font-bold tracking-[0.4em] text-[#FEC021] md:text-xl"
      >
        TECHNET
      </a>

      {/* Columns */}
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {columns.map((column) => (
          <div key={column.id}>
            <h3 className="font-serif text-sm font-semibold">{column.title}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-gray-200 transition-colors hover:text-[#FEC021]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Follow */}
        <div>
          <h3 className="font-serif text-sm font-semibold">Follow TECHNET</h3>
          <div className="mt-4 flex items-center gap-3">
            {socials.map(({ id, label, href, Icon }) => (
              <a
                key={id}
                href={href}
                aria-label={label}
                className="text-white transition-colors hover:text-[#FDBF22]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer