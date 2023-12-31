import Logo from './logo'

const links = [
  {
    id: 'home',
    to: '#home',
    label: 'Home',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-xl"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    id: 'residences',
    to: '#popular',
    label: 'Residences',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-xl"
      >
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    )
  },
  {
    id: 'value',
    to: '#value',
    label: 'Value',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-xl"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    )
  },
  {
    id: 'contact',
    to: '#contact',
    label: 'Contact',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-xl"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
        <path d="M14.05 6A5 5 0 0 1 18 10" />
      </svg>
    )
  }
]

function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 bg-transparent transition-colors">
      <div>
        <div className="container">
          <div className="flex items-center justify-between h-[3.5rem]">
            <Logo />

            <div className="fixed right-4 bottom-8 left-4 py-5 px-12 rounded-[1.25rem] bg-card shadow-[0_8px_24px_hsla(228,66%,45%,0.15)] transition-colors md:hidden">
              <nav>
                <ul className="flex items-center justify-between">
                  {links.map((link) => (
                    <li key={link.id}>
                      <a
                        className="inline-flex p-2 rounded-full"
                        href={`${link.to}`}
                      >
                        {link.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="hidden md:block">
              <nav>
                <ul className="flex items-center gap-x-4">
                  {links.map((link) => (
                    <li key={link.id}>
                      <a href={`${link.to}`}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <a href="">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
