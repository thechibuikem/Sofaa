///////////////////IMPORTING DEPENDENCIES FROM POPULATE NEW ARRIVAL.JS FILE/////////////////////////////////////////////////////////
import { generateStars, createProduct } from "./createProductBlock.js";

/////////THE WRAPPER THAT WOULD HOUSE THE CARDS WE ARE CREATING
const productWrapper = document.querySelector("#main-content-box");

//array of products details//////////////////////////////////
export const productsArray = [
  {
    id: 1,
    imageSrc: "../images/stock/black-tee.png",
    productName: "T-shirt with tape details",
    rating: 5,
    price: 120,
    discountedPrice: 60,
    type: "",
    sideImg1: "",
    sideImg2: "",
    description: `This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
      breathable fabric, it offers superior comfort and style`,
  },
  {
    id: 2,
    imageSrc: "../images/stock/jean-pants.png",
    productName: "skinny jeans",
    rating: 3,
    price: 240,
    discountedPrice: 10,
    type: "",
    sideImg1: "",
    sideImg2: "",
    description: `This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
      breathable fabric, it offers superior comfort and style`,
  },
  {
    id: 3,
    imageSrc: "../images/stock/blue-white-red-checkered-shirt.png",
    productName: "Checkered Shirt",
    rating: 4,
    price: 180,
    type: "",
    sideImg1: "",
    sideImg2: "",
    description: `This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
      breathable fabric, it offers superior comfort and style`,
  },
  {
    id: 4,
    imageSrc: "../images/stock/orange-black-stripped-tee.png",
    productName: "sleeve striped t-shirt",
    rating: 5,
    price: 30,
    type: "",
    sideImg1: "",
    sideImg2: "",
    description: `This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
      breathable fabric, it offers superior comfort and style`,
  },

  {
    id: 5,
    imageSrc: "../images/stock/pale-green-stripped-shirt.png",
    productName: "vertical Stripped shirt",
    rating: 4,
    price: 120,
    type: "",
    sideImg1: "",
    sideImg2: "",
    description: `This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
      breathable fabric, it offers superior comfort and style`,
  },
  {
    id: 6,
    imageSrc: "../images/stock/orange-courage-tee.png",
    productName: "courage graphic t-shirt",
    rating: 3,
    price: 240,
    type: "",
    sideImg1: "",
    sideImg2: "",
    description: `This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
      breathable fabric, it offers superior comfort and style`,
  },
  {
    id: 7,
    imageSrc: "../images/stock/black-skinny-jeans-trouser.png",
    productName: "Faded Skinny jeans",
    rating: 5,
    price: 120,
    type: "",
    sideImg1: "",
    sideImg2: "",
    description: `This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
      breathable fabric, it offers superior comfort and style`,
  },
  {
    id: 8,
    imageSrc: "../images/stock/jean-short.png",
    productName: "Loose fit Bermuda shorts",
    rating: 1,
    price: 180,
    type: "",
    sideImg1: "",
    sideImg2: "",
    description: `This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
      breathable fabric, it offers superior comfort and style`,
  },
];

//// CALLING OF THE MAGIC DOING FUNCTION/////////////////////////
if (productWrapper) {
  productsArray.forEach((product) => createProduct(product, productWrapper));
  // Error Handling
} else {
  console.log("wrapper doesn't exist");
}
