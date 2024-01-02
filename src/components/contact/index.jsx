import { useSectionInView } from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'

import ContactImage from '@/assets/images/contact.png'

const cards = [
  {
    id: 'phone',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
        <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
      </svg>
    ),
    title: 'Call',
    subtitle: '+998 (95) 004-40-48',
    action: 'Call Now'
  },
  {
    id: 'chat',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.516 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
      </svg>
    ),
    title: 'Chat',
    subtitle: '+998 (95) 004-40-48',
    action: 'Chat Now'
  },
  {
    id: 'video-call',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7z"></path>
      </svg>
    ),
    title: 'Video Call',
    subtitle: '+998 (95) 004-40-48',
    action: 'Video Call Now'
  },
  {
    id: 'message',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
      </svg>
    ),
    title: 'Message',
    subtitle: '+998 (95) 004-40-48',
    action: 'Message Now'
  }
]

function Contact() {
  const { ref } = useSectionInView('contact', 0.45)

  return (
    <motion.section
      className="pt-[4.5rem] pb-8"
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="container">
        <div className="grid gap-y-8">
          <div className="relative flex justify-center">
            <div className="w-[266px] h-[316px] bg-[hsl(228,24%,97%)] rounded-[135px_135px_16px_16px]"></div>
            <div className="absolute inset-0 w-[250px] h-[300px] overflow-hidden rounded-[125px_125px_12px_12px] m-auto shadow-[0_16px_32px_hsla(228,66%,25%,0.25)]">
              <img src={ContactImage} alt="" />
            </div>
          </div>

          <div className="">
            <div className="mb-10">
              <p className="text-sm text-secondary">Contact Us</p>
              <h2 className="text-xl">
                Easy to Contact us<span className="text-secondary">.</span>
              </h2>
              <p className="text-sm">
                Is there a problem finding your dream home? Need a guide in
                buying first home? or need a consultation on residential issues?
                just contact us.
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-5 gap-x-3">
              {cards.map((card) => (
                <div
                  className="bg-background py-5 px-3 border-2 rounded-lg hover:shadow-[0_8px_24px_hsla(228,66%,45%,0.1)] transition"
                  key={card.id}
                >
                  <div className="flex items-start gap-x-3 mb-5">
                    <div className="bg-primary-lighten text-primary text-xl rounded-lg p-2">
                      {card.icon}
                    </div>
                    <div>
                      <h3>{card.title}</h3>
                      <p className="text-xs">{card.subtitle}</p>
                    </div>
                  </div>
                  <button
                    className="text-sm font-semibold w-full p-3 bg-primary-lighten text-primary rounded-lg hover:bg-primary hover:text-white hover:shadow-xl transition"
                    type="button"
                  >
                    {card.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
