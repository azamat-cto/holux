import { cn } from '@/lib/utils'

function Logo({ scrolled }) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-x-1 text-white font-medium leading-[normal] hover:text-primary transition-colors',
        scrolled ? 'text-foreground' : ''
      )}
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
  )
}

export default Logo
