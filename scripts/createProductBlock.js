// creating star svg
export const starSvg = `<svg
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
  </svg>`;

  // function for generating stars
export let generateStars = (rating) => {
  let star = "";
  for (let i = 0; i < rating; i++) {
    star += starSvg;
  }
  return star;
};

// the function that would create a product and append it to the new events wrapper
export let createProduct = (product, wrapper) => {
  const { imageSrc, productName, rating, price, id } = product;

  let star = generateStars(rating);

  // the productElement creation
  let productElement = document.createElement("figure");
  productElement.classList.add(
    "flex",
    "flex-col",
    "h-auto",
    "new-arrival-products"
  );
  productElement.dataset.set = product.id
  productElement.innerHTML = `
     <div id="top" class="flex justify-center items-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
        <!-- an image in new arrival -->
        <img src="${imageSrc}" alt="${productName}">
      </div>
      <div id="bottom" class="flex flex-col gap-y-1.75 py-4 ">
        <!-- the title of the clothe which is a link to view the clothe in a personalized product page -->
        <a href="">

        </a>
        <a id="name" href="product.html?id=${id}" class="text-xl font-semibold capitalize cursor:pointer">
          ${productName}
        </a>
        <!-- the block of stars -->
         <div id="rating-stars" class="flex">
<!-- where the stars would be -->${star}
         </div>
         <h3 class="text-2xl font-bold">$${price}</h3>
      </div>
`;

  productElement.classList.add("shrink-0");
  wrapper.appendChild(productElement);
};
