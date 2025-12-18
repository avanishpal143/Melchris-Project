/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dust Palette - Primary brand colors
        dust: {
          light: '#99B5CE',    // Light blue-gray
          dark: '#394855',     // Dark blue-gray (primary)
          medium: '#9DADBC',   // Medium blue-gray
          rose: '#CBA8B9',     // Dusty rose
        },
        // Collective Palette - Secondary colors
        collective: {
          light: '#99B5CE',    // Light blue
          blue: '#6687C5',     // Medium blue (accent)
          mauve: '#B27594',    // Mauve pink
        },
        // Friend Palette - Accent colors
        friend: {
          light: '#99B5CE',    // Light blue
          dark: '#2D4A5F',     // Dark teal
          brown: '#8C5000',    // Rich brown
          orange: '#E79C25',   // Warm orange
        }
      }
    },
  },
  plugins: [],
};
