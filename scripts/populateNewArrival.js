let newArrivalProductsWrapper = document.querySelector(
  "#new-arrival-section-of-four-figures"
);


let star = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="#FFD700"
    class="size-4"
  >
    <path
      fill-rule="evenodd"
      d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
      clip-rule="evenodd"
    />
  </svg>
    `



// the array of objects that would hold the details for creating new elements in the dom
let newArrivalFiller = [
  {
    id: 1,
    imageSrc: "../images/stock/black-tee.png",
    productName: "T-shirt with tape details",
    rating: 3,
    price: "$120",
  },
  {
    id: 2,
    imageSrc: "../images/stock/black-tee.png",
    productName: "T-shirt with tape details",
    rating: 3,
    price: "$120",
  },
  {
    id: 3,
    imageSrc: "../images/stock/black-tee.png",
    productName: "T-shirt with tape details",
    rating: 3,
    price: "$120",
  },
  {
    id: 4,
    imageSrc: "../images/stock/black-tee.png",
    productName: "T-shirt with tape details",
    rating: 3,
    price: "$120",
  },
];



// the function that would create a product and append it to the new events wrapper
let createProduct= ({id,imageSrc,productName,rating,price},star)=>{

let product = document.createElement("figure")
product.classList.add("flex", "flex-col", "h-auto","new-arrival-products");
product.innerHTML = `
     <div id="top" class="flex justify-center items-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
        <!-- an image in new arrival -->
        <img src="${imageSrc}" alt="${productName}">
      </div>
      <div id="bottom" class="flex flex-col gap-y-1.75 py-4 ">
        <!-- the title of the clothe which is a link to view the clothe in a personalized product page -->
        <a href="">

        </a>
        <h4 id="name" class="text-xl font-semibold capitalize">
          ${productName}
        </h4>
        <!-- the block of stars -->
         <div id="rating-stars" class="flex">

<!-- where the stars would be -->${star}

         </div>
         <h3 class="text-2xl font-bold">${price}</h3>
      </div>
`;
product.classList.add("shrink-0")
newArrivalProductsWrapper.appendChild(product);
}

newArrivalFiller.forEach(createProduct)