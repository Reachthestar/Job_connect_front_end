/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#8b5df6',
        'light-blue': '#DDE9F9',
        blue: '#3077D8',
        yellow: '#FBBD37',
        'light-yellow': '#FFFBC5',
        red: '#FF6347',
      },
      backgroundImage: {
        'hero-image':
          "linear-gradient(rgba(139, 93, 246, 0.8), rgba(139, 93, 246, 0.8)), url('https://images.unsplash.com/photo-1606836559739-7b1d9fbf8a6e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1606836559739-7b1d9fbf8a6e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  plugins: [],
};

// purple: '#865DFF'
