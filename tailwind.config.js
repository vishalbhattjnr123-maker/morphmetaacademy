/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Brand Burgundy & Dark Palette
        'brand-black': '#080808',
        'brand-dark': '#0f0507',
        'burgundy-950': '#120205',
        'burgundy-900': '#220006',
        'burgundy-800': '#38000a',
        'burgundy-700': '#4B0000',
        'burgundy-600': '#6b0000',
        'burgundy-500': '#8B0000',

        // Brand Gold Accents
        'gold-500': '#FFC107',
        'gold-400': '#F5B82E',
        'gold-300': '#FFD54F',
        'gold-600': '#D49012',

        // Neutral Fallbacks
        'neutral-950': '#080808',
        'neutral-900': '#120205',
        'neutral-800': '#1e050b',
        'neutral-700': '#2f0b13',
        'neutral-600': '#4B5563',
        'neutral-500': '#6B7280',

        // Accent colors
        'accent-blue': '#3B82F6',
        'accent-red': '#8B0000',
        'accent-green': '#10B981',
        'accent-yellow': '#F5B82E',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        accent: ['Raleway', 'sans-serif'],
        bungee: ["Bungee Spice", "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "perspective(1200px) rotateX(3deg) rotateY(3deg) scale(1)",
          },
          "50%": {
            transform: "perspective(1200px) rotateX(-3deg) rotateY(-3deg) scale(1.02)",
          },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(245, 184, 46, 0.4)" },
          "50%": { boxShadow: "0 0 30px rgba(245, 184, 46, 0.8)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.85, transform: "scale(1.03)" },
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "glow-gold": "glow 3s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
