/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eff6ff',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            900: '#1e3a8a',
          },
          dark: {
            100: '#1f2937',
            200: '#374151',
            800: '#1f2937',
            900: '#111827',
          }
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }