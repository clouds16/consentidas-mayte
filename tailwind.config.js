/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // Important: This prevents conflicts with Mantine's styles
    corePlugins: {
      preflight: false,
    },
    theme: {
      extend: {},
    },
    plugins: [],
  }