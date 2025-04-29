module.exports = {
  content: [
    "./index.html",
    "./scripts/hero.js",
    "./scripts/populateNewArrival.js",
    "./scripts/populateBrowseByDesignSection.js",
  ],
  safelist: [
    "md:col-span-2",
    "col-span-2",
    "md:col-start-2",
    "bg-[url('./images/homepage/browseByCategory/casual.png')]",
    "bg-[url('./images/homepage/browseByCategory/formal.png')]",
    "bg-[url('./images/homepage/browseByCategory/gym.png')]",
    "bg-[url('./images/homepage/browseByCategory/party.png')]",
    "bg-right-bottom",
    "bg-no-repeat",
    "bg-cover",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
