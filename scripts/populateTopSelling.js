// importing the array of products
import {productsArray} from "./productListingPage.js";

import { generateStars, createProduct } from "./createProductBlock.js"; //importing the variables and functions from createProductBlock; so this section can work

const topSellingProductsWrapper = document.querySelector(
  "#top-selling-section-of-four-figures"
); //section wrapper

// the array of objects that would hold the details for creating new elements in the dom


  const topSellingFiller = [
    productsArray[4],
    productsArray[5],
    productsArray[6],
    productsArray[7],
  ];  

if (topSellingProductsWrapper) {
  topSellingFiller.forEach((product) =>
    createProduct(product, topSellingProductsWrapper)
  );
} else {
  console.log("wrapper doesn't exist");
}
