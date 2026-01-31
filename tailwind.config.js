/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ZARA-inspired luxury palette
        primary: {
          DEFAULT: "#000000",
          light: "#1a1a1a",
        },
        secondary: {
          DEFAULT: "#ffffff",
          dark: "#f5f5f5",
        },
        accent: {
          DEFAULT: "#8b8680",
          light: "#d4cfca",
        },
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', letterSpacing: '0.01em' }],
        'body': ['1rem', { lineHeight: '1.75', letterSpacing: '0.01em' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        'luxury': '0.1em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
