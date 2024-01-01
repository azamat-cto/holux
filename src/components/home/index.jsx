import { useSectionInView } from '@/hooks'
import { motion } from 'framer-motion'

import HomeImage from '@/assets/images/home.jpg'

function Home() {
  const { ref } = useSectionInView('home', 0.5)

  return (
    <motion.section
      className="bg-home-pattern"
      id="home"
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="pt-32">
        <div className="container">
          <div className="grid gap-y-14">
            <div>
              <div className="mb-8">
                <h1 className="text-4xl leading-[120%] mb-5 text-white max-w-[255px]">
                  Discover Most Suitable Property
                </h1>
                <p className="text-foreground-light">
                  Find a variety of properties that suit you very easily, forget
                  all difficulties in finding a residence for you
                </p>
              </div>

              <div className="bg-background border-[3px] border-border rounded-xl mb-8 py-2 pr-2 pl-3">
                <form className="flex items-center justify-between gap-x-2">
                  <div className="flex-1">
                    <label
                      className="flex items-center gap-x-2"
                      htmlFor="search"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-2xl text-primary"
                      >
                        <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                      </svg>
                      <input
                        className="w-full bg-background focus-visible:outline-0"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search by location..."
                      />
                    </label>
                  </div>

                  <button
                    className="inline-block text-base font-medium py-3 px-7 bg-[linear-gradient(101deg,hsl(228,66%,53%),hsl(228,66%,47%))] text-white rounded-lg shadow-[0_4px_8px_hsla(228,66%,45%,0.25)] hover:shadow-[0_4px_12px_hsla(228,66%,45%,0.25)] transition"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>

              <div className="flex items-center gap-x-10">
                <div>
                  <h2 className="text-white text-2xl font-medium">
                    9K <span className="text-secondary">+</span>
                  </h2>
                  <div className="text-foreground-light text-xs">
                    <p>Premium</p>
                    <p>Product</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-white text-2xl font-medium">
                    2K <span className="text-secondary">+</span>
                  </h2>
                  <div className="text-foreground-light text-xs">
                    <p>Happy</p>
                    <p>Customer</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-white text-2xl font-medium">
                    28K <span className="text-secondary">+</span>
                  </h2>
                  <div className="text-foreground-light text-xs">
                    <p>Awards</p>
                    <p>Winning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="w-[265px] h-[284px] bg-[linear-gradient(180deg,hsl(0,0%,16%)93%,hsl(0,0%,67%)100%)] rounded-[135px_135px_0_0]"></div>
              <div className="absolute -bottom-6 inline-flex items-end w-[250px] h-[300px] overflow-hidden rounded-[125px_125px_12px_12px] shadow-[0_16px_32px_hsl(228,66%,25%,0.25)]">
                <img src={HomeImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home
