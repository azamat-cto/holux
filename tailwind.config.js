/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px'
      }
    },
    screens: {
      xs: '475px',
      // => @media (min-width: 475px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          light: 'hsl(var(--foreground-light))'
        },
        heading: 'hsl(var(--heading))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          alt: 'hsl(var(--primary-alt))',
          light: 'hsl(var(--primary-light))',
          lighten: 'hsl(var(--primary-lighten))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))'
      },
      backgroundImage: {
        'home-pattern': 'linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%)',
        'link-pattern': 'linear-gradient(101deg, hsl(228, 66%, 53%), hsl(228, 66%, 47%))'
      },
      fontFamily: {
        sans: ['var(--ff-poppins)']
      },
      fontSize: {
        '2xs': 'var(--fz-2xs)',
        xs: 'var(--fz-xs)',
        sm: 'var(--fz-sm)',
        base: 'var(--fz-base)',
        md: 'var(--fz-md)',
        lg: 'var(--fz-lg)',
        xl: 'var(--fz-xl)',
        '2xl': 'var(--fz-2xl)',
        '3xl': 'var(--fz-3xl)',
        '4xl': 'var(--fz-4xl)',
        '5xl': 'var(--fz-5xl)',
        '6xl': 'var(--fz-6xl)',
        '7xl': 'var(--fz-7xl)',
        '8xl': 'var(--fz-8xl)',
        '9xl': 'var(--fz-9xl)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      transitionProperty: {
        'bottom': 'bottom'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
