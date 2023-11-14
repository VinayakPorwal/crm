/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  // add the folders and files from your templates
  // content: [
  //   "./layouts/**/*.html",
  //   "./content/**/*.md",
  //   "./content/**/*.html",
  //   "./src/**/*.jsx",
  // ],
  darkMode: "media",

  theme: {
    extend: {
      boxShadow: {
        custom: "0 40px 80px rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
