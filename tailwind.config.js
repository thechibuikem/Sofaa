/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  safelist: [
    "text-md",
    "rounded-md",
    " sm:text-base",
    "md:text-3xl",
    "lg:text-xl",
    "mb-4",
    "sm:mb-6",
    "text-blue-600 ",
    "dark:border-1",
"dark:border-[#ffffff50]",
"dark:bg-neutral-800"
    // add any other JS-based classes here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
