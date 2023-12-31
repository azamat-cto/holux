import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'

const populars = [
  {
    id: 'popular-1',
    img: '/src/assets/images/popular1.jpg',
    price: '66,356',
    title: 'Garden City Assat',
    description:
      'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'
  },
  {
    id: 'popular-2',
    img: '/src/assets/images/popular2.jpg',
    price: '35,159',
    title: 'Gables Luxurious House',
    description:
      'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'
  },
  {
    id: 'popular-3',
    img: '/src/assets/images/popular3.jpg',
    price: '75,043',
    title: 'Garden Orchard City',
    description:
      'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'
  },
  {
    id: 'popular-4',
    img: '/src/assets/images/popular4.jpg',
    price: '62,024',
    title: 'Luxurious City Garden',
    description:
      'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'
  },
  {
    id: 'popular-5',
    img: '/src/assets/images/popular5.jpg',
    price: '47,043',
    title: 'Aliva Private Garden',
    description:
      'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'
  }
]

function Popular() {
  return (
    <section className="pt-[4.5rem] pb-8" id="popular">
      <div className="container">
        <div>
          <div className="mb-4">
            <p className="text-sm text-secondary">Best Choice</p>
            <h2 className="text-xl">
              Popular Residences<span className="text-secondary">.</span>
            </h2>
          </div>

          <div>
            <Splide hasTrack={false} options={{ pagination: false }}>
              <div className="pt-4 pb-20">
                <SplideTrack>
                  {populars.map((popular) => (
                    <SplideSlide>
                      <article
                        className="w-[300px] mx-auto bg-card pt-2 pb-6 px-2 rounded-2xl hover:shadow-[0_12px_16px_hsla(228,66%,45%,0.1)] transition"
                        key={popular.id}
                      >
                        <div className="mb-4 rounded-2xl overflow-hidden">
                          <img src={popular.img} alt={popular.title} />
                        </div>
                        <div className="pr-4 pl-2">
                          <p className="text-xl font-semibold mb-1">
                            <span className="text-secondary">$</span>
                            {popular.price}
                          </p>
                          <h3 className="text-md mb-3">{popular.title}</h3>
                          <p className="text-sm">{popular.description}</p>
                        </div>
                      </article>
                    </SplideSlide>
                  ))}
                </SplideTrack>

                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev absolute bottom-0 left-[calc(50%-3rem)] z-10 p-2 text-2xl bg-card text-primary border-2 border-foreground-light rounded-lg disabled:opacity-[0.5]">
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
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button className="splide__arrow splide__arrow--next absolute bottom-0 right-[calc(50%-3rem)] z-10 p-2 text-2xl bg-card text-primary border-2 border-foreground-light rounded-lg disabled:opacity-[0.5]">
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
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular
