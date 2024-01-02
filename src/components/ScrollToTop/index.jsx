import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

function ScrollToTop() {
  const containerElement = useRef(null)
  const scrollListener = useRef()
  const [scrolled, setScrolled] = useState(false)

  const bindScrollListener = () => {
    scrollListener.current = () => {
      if (containerElement && containerElement.current) {
        if (window.scrollY >= 350) setScrolled((prevState) => (prevState = true))
        else setScrolled((prevState) => (prevState = false))
      }
    }

    window.addEventListener('scroll', scrollListener.current)
  }

  const unbindScrollListener = () => {
    if (scrollListener.current) {
      window.removeEventListener('scroll', scrollListener.current)
      scrollListener.current = null
    }
  }

  useEffect(() => {
    bindScrollListener()

    return function unbind() {
      unbindScrollListener()
    }
  }, [])

  return (
    <a
      className={cn(
        'inline-flex p-2 text-xl text-primary z-50 rounded-sm fixed right-4 -bottom-full bg-card shadow-[0_8px_12px_hsla(228,66%,45%,0.1)] transition-bottom duration-[0.3s]',
        { 'bottom-[8rem]': scrolled }
      )}
      href="#home"
      ref={containerElement}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"></path>
        <path d="m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"></path>
      </svg>
    </a>
  )
}

export default ScrollToTop
