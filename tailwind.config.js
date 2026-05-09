/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          peach: "#F4A57A",
          cream: "#FDF8F2",
          gold: "#C9963A",
          brown: "#3B1F0E",
          deepGreen: "#2C5F2D", // keeping original green as well
          sage: "#97BC62",
        },
        kente: {
          red: "#E63B1F",
          gold: "#F5C518",
          green: "#1B6B2F",
        }
      },
      fontFamily: {
        serif: ['"Poppins"', 'sans-serif'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
