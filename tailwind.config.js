/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/homepage.jpeg')",
      },
      boxShadow: {
        "custom-1": "0px 0px 0px 1px #B3BBE540",
        "custom-2": "0px 4px 8px 0px #D3D6E533",
        "custom-3": "0px 2px 4px 0px #E6E8F214",
      },
      width: {
        1440: "1440px",
        370: "370px",
        649: "649px",
      },
      height: {
        666: "666px",
        170: "170px",
        471: "471px",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover"],
    },
  },
  plugins: [],
};
