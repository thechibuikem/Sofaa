// importing the array of products
import { productsArray } from "./productListingPage.js";
// importing the star and create product function
import { createProduct,generateStars } from "./createProductBlock.js";

const newArrivalProductsWrapper = document.querySelector(
  "#new-arrival-section-of-four-figures"
); //section wrapper

// the array of objects that would hold the details for creating new elements in the DOM
  const newArrivalFiller = [
    productsArray[0],
    productsArray[1],
    productsArray[2],
    productsArray[3],
  ]

if (newArrivalProductsWrapper) {
  newArrivalFiller.forEach((product) =>
    createProduct(product, newArrivalProductsWrapper)
  );
} 
// else {
//   console.log("wrapper doesn't exist");
// }
