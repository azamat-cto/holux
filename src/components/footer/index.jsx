import { cn } from '@/lib/utils'

const itmes = [
  {
    id: 'about',
    title: 'About',
    links: [
      {
        id: 'about-us',
        url: '',
        label: 'About Us'
      },
      {
        id: 'features',
        url: '',
        label: 'Features'
      },
      {
        id: 'news',
        url: '',
        label: 'News & Blog'
      }
    ]
  },
  {
    id: 'company',
    title: 'Company',
    links: [
      {
        id: 'how-we-work',
        url: '',
        label: 'How We Work?'
      },
      {
        id: 'capital',
        url: '',
        label: 'Capital'
      },
      {
        id: 'security',
        url: '',
        label: 'Security'
      }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    links: [
      {
        id: 'faqs',
        url: '',
        label: 'FAQs'
      },
      {
        id: 'support-center',
        url: '',
        label: 'Support center'
      },
      {
        id: 'contact-us',
        url: '',
        label: 'Contact Us'
      }
    ]
  },
  {
    id: 'follow',
    title: 'Follow us',
    links: [
      {
        id: 'facebook',
        url: 'https://www.facebook.com/',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
          </svg>
        )
      },
      {
        id: 'instagram',
        url: 'https://www.instagram.com/',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
            <circle cx="11.994" cy="11.979" r="3.003"></circle>
          </svg>
        )
      },
      {
        id: 'telegram',
        url: 'https://www.t.me/',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
          </svg>
        )
      }
    ]
  }
]

function Footer() {
  return (
    <footer className="pt-[4.5rem] pb-8">
      <div className="container">
        <div className="grid gap-y-10">
          <div>
            <a
              className="text-primary text-md font-semibold inline-flex items-center gap-x-1 mb-3"
              href="#home"
            >
              <span>Holux</span>
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
                className="text-md"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </a>
            <p className="text-sm font-medium">
              Our vision is to make all people the best place to live for them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-10 gap-x-16">
            {itmes.map((item) => (
              <div key={item.id}>
                <h3 className="text-md mb-4">{item.title}</h3>
                <ul
                  className={cn(
                    item.id === 'follow'
                      ? 'flex items-center gap-x-4'
                      : 'grid gap-y-2'
                  )}
                >
                  {item.links.map((link) => (
                    <li className="" key={link.id}>
                      <a
                        className={cn(
                          item.id === 'follow'
                            ? 'text-xl transition hover:text-heading'
                            : 'text-sm font-medium text-foreground hover:text-heading transition'
                        )}
                        href={link.url}
                      >
                        {item.id === 'follow' ? link.icon : link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-6 text-center pb-24 mt-20">
          <p className="text-sm font-medium">
            &#169; Holux. All rights reserved {new Date().getFullYear()}
          </p>
          <div className="flex items-center justify-center gap-x-5 text-sm font-medium">
            <a className="hover:text-primary transition" href="">
              Terms & Agreements
            </a>
            <a className="hover:text-primary transition" href="">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
