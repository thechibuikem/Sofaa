const browseByDesignWrapper = document.querySelector(
  "#browse-by-dress-section-sub-section"
);

const browseByDesignWrapperFiller = [
  // item 1
  {
    id: 1,
    title: "casual",
    bgImg: "../images/homepage/browseByCategory/casual.png",
  },
  // item 2
  {
    id: 2,
    title: "formal",
    bgImg: "../images/homepage/browseByCategory/formal.png",
  },
  // item 3
  {
    id: 3,
    title: "party",
    bgImg: "../images/homepage/browseByCategory/party.png",
  },
  // item 4
  {
    id: 4,
    title: "gym",
    bgImg: "../images/homepage/browseByCategory/gym.png",
  },
];

// function to create card
let createDesign = (wrapper, design) => {
  const { title, bgImg, id } = design;
  const designELement = document.createElement("figure");
  designELement.setAttribute("id", `designElement${id}`);
  designELement.classList.add(
    "dark:bg-neutral-800",
    "flex",
    "justify-start",
    `bg-[url('./images/homepage/browseByCategory/${title}.png')]`,
    "h-[15rem]",
    "md:h-[20rem]",
    "w-full",
    "bg-no-repeat",
    "bg-right-bottom",
    "bg-white",
    "bg-cover",
    "rounded-xl",
    "text-2xl",
    "md:text-4xl",
    "font-medium",
    "p-4",
  );
  designELement.innerHTML = `
        <!-- figure ${id} -->
          ${title}
        `;
        
        // appending the child to the wrapper
        wrapper.appendChild(designELement);
};

browseByDesignWrapperFiller.forEach((design) =>
  createDesign(browseByDesignWrapper, design)
);

