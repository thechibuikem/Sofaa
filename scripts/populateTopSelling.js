import { generateStars, createProduct } from "./populateNewArrival.js"; //importing the variables and functions from new arri val so this section can work

const topSellingProductsWrapper = document.querySelector(
  "#top-selling-section-of-four-figures"
); //section wrapper

// the array of objects that would hold the details for creating new elements in the dom
const topSellingFiller = [
  {
    id: 1,
    imageSrc: "../images/stock/pale-green-stripped-shirt.png",
    productName: "vertical Stripped shirt",
    rating: 4,
    price: "$120",
  },
  {
    id: 2,
    imageSrc: "../images/stock/orange-courage-tee.png",
    productName: "courage graphic t-shirt",
    rating: 3,
    price: "$240",
  },
  {
    id: 3,
    imageSrc: "../images/stock/jean-short.png",
    productName: "Loose fit Bermuda shorts",
    rating: 1,
    price: "$180",
  },
  {
    id: 4,
    imageSrc: "../images/stock/black-skinny-jeans-trouser.png",
    productName: "Faded Skinny jeans",
    rating: 5,
    price: "$120",
  },
];

if (topSellingProductsWrapper){
topSellingFiller.forEach((product) =>
  createProduct(product, topSellingProductsWrapper)
)
}

else{
  console.log("wrapper doesn't exist")
}


