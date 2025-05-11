// /////////////THIS SCRIPT WOULD BE THE POWERHOUSE BEHIND THE FUNCTIONALITY OF THE FOOTER AND ALSO DOM MANIPULATION TO REDUCE REDUNDANCY IN THE HTML
const filterContainer = document.querySelector("#filter-section");
const colorContainer = document.querySelector("#hold-the-colors");
const colorsArray = [
  {
    id: 1,
    color: "green",
  },
  {
    id: 2,
    color: "red",
  },
  {
    id: 3,
    color: "yellow",
  },
  {
    id: 4,
    color: "orange",
  },
  {
    id: 5,
    color: "teal",
  },
  {
    id: 6,
    color: "blue",
  },
  {
    id: 7,
    color: "purple",
  },
  {
    id: 8,
    color: "pink",
  },
  {
    id: 9,
    color: "gray",
  },
  {
    id: 10,
    color: "black",
  },
];


////////////////////////COLOR BLOCKS////////////////////////////////////////
// where the whole magic happens for the color section
// function to create each color block

let renderItem = (wrapper, element) => {
  const { id, color } = element;
  const colorBlock = document.createElement("button");
  colorBlock.setAttribute("id", `color-btn${id}`);
  colorBlock.classList.add("colorBlock");
  colorBlock.style.backgroundColor = `${color}`;
  wrapper.appendChild(colorBlock);
};

colorsArray.forEach((element) => renderItem(colorContainer, element));

// ///////////showing or removing the whole filter icon on clicking on the filter logo//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const filterBtn = document.querySelector("#filter-btn");
const filterBodySection = document.querySelector("#filter-body"); /////getting the filter body section and the filter button

let toggleAClass = (section, className) => {
  section.classList.toggle(className);
};

filterBtn.addEventListener("click",() => toggleAClass(filterBodySection, "hide"));
