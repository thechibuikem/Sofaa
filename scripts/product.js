import { productsArray } from "./productListingPage.js";
import { generateStars } from "./createProductBlock.js";

const target = document.querySelector("#header");
export let cart = JSON.parse(localStorage.getItem("cart")) || [];

// --- 1. Get product ID from URL and find the product ---
const searchQuery = new URLSearchParams(window.location.search);
const idFromURL = searchQuery.get("id");
const productId = parseInt(idFromURL);
const productIndex = productId - 1;
const product = productsArray[productIndex];

// --- 2. Helper functions to generate HTML parts ---

//Display images of the product
const imageDisplayer = () =>{
  return `
   <figure id="product-main-section-up" class="flex flex-col-reverse lg:w-[50%] h-full w-full items-center lg:flex-row sm:gap-y-10 gap-y-8 gap-x-8">
        <div id="3-images-flex" class="flex flex-row justify-between lg:flex-col lg:justify-between w-full h-full lg:w-auto">
          <img src="${product.imageSrc}" alt="${product.description}" class="w-[6rem] sm:w-[16rem] lg:w-[8rem] aspect-square bg-gray-200 rounded-2xl" />
          <img src="${product.imageSrc}" alt="${product.description}" class="w-[6rem] sm:w-[16rem] lg:w-[8rem] aspect-square bg-gray-200 rounded-2xl" />
          <img src="${product.imageSrc}" alt="${product.description}" class="w-[6rem] sm:w-[16rem] lg:w-[8rem] aspect-square bg-gray-200 rounded-2xl" />
        </div>
        <div class="flex justify-center bg-gray-200 w-full rounded-2xl lg:h-[60vh]">
          <img src="${product.imageSrc}" alt="${product.description}" id="main-product-img" class="lg:w-[18rem] sm:w-[20rem] w-[16rem]" />
        </div>
      </figure>
  `;
}

// Price display with discount calculation if any
const priceDisplayer = () => {
  if (product.discountedPrice) {
    const discountPercentage = Math.round(
      ((product.price - product.discountedPrice) / product.price) * 100
    );
    return `
      <div class="mt-2 flex items-center">
        <span class="text-2xl font-bold">$${product.discountedPrice}</span>
        <span class="ml-2 text-xl text-gray-400 line-through">$${product.price}</span>
        <span class="ml-2 text-sm text-red-500">${discountPercentage}%</span>
      </div>
    `;
  } else {
    return `
      <div class="mt-2 flex items-center">
        <span class="text-2xl font-bold">$${product.price}</span>
      </div>
    `;
  }
};

// Quantity selector and Add to Cart button HTML
const quantityRenderer = () => {
  return `
    <div class="flex items-center mt-6">
      <div class="flex items-center border border-gray-300 rounded-full">
        <button id="quantity-reduce-button" class="px-3 py-1 text-lg cursor-pointer">−</button>
        <span id="quantity-displayer" class="px-3 py-1">1</span>
        <button id="quantity-increase-button" class="px-3 py-1 text-lg cursor-pointer">+</button>
      </div>
      <button id="cart-btn" class="ml-4 px-6 py-2 bg-black text-white rounded-full flex-grow text-center cursor-pointer">
        Add to Cart
      </button>
    </div>
  `;
};

// --- 3. Display product details on the page ---
const displayProductDetails = () => {
  const star = generateStars(product.rating);

  const productDetailsMainSection = document.createElement("main");
  productDetailsMainSection.classList.add(
    "flex",
    "flex-col",
    "w-screen",
    "h-fit",
    "px-[1rem]",
    "lg:px-[4rem]",
    "mt-[2rem]",
    "mb-[4rem]"
  );

  productDetailsMainSection.innerHTML = `
    <section id="main-top">
      <h3 id="type" class="capitalize text-2xl font-semibold">${
        product.type
      }</h3>
    </section>

    <section id="main-bottom" class="flex flex-col lg:flex-row mt-[2rem] max-w-[100%] lg:h-[60vh] lg:gap-x-[2rem]">
     ${imageDisplayer()}

      <section id="product-main-section-down" class="flex flex-col justify-between lg:max-w-md mt-[4rem] lg:mt-0 font-sans">
        <h2 class="text-3xl font-bold tracking-tight">${
          product.productName
        }</h2>
        <div class="flex items-center mt-2">
          <div class="flex">${star}</div>
          <span class="ml-2 text-sm text-gray-600">4.5/5</span>
        </div>
        ${priceDisplayer()}
        <p class="mt-2 text-sm text-gray-500">${product.description}</p>
        <div class="mt-4">
          <p class="text-sm text-gray-600">Select Colors</p>
          <div class="flex mt-2 space-x-2">
            <div class="w-8 h-8 rounded-full bg-amber-900 ring-2 ring-offset-2 ring-amber-900 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="w-8 h-8 rounded-full bg-teal-800"></div>
            <div class="w-8 h-8 rounded-full bg-indigo-900"></div>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-sm text-gray-600">Choose Size</p>
          <div class="flex mt-2 space-x-2">
            <button class="px-4 py-2 text-sm bg-gray-100 rounded-full">Small</button>
            <button class="px-4 py-2 text-sm bg-gray-100 rounded-full">Medium</button>
            <button class="px-4 py-2 text-sm bg-black text-white rounded-full">Large</button>
            <button class="px-4 py-2 text-sm bg-gray-100 rounded-full">X-Large</button>
          </div>
        </div>
        ${quantityRenderer()}
      </section>
    </section>
  `;

  target.parentNode.insertBefore(
    productDetailsMainSection,
    target.nextElementSibling
  );
};

// --- 4. DOMContentLoaded event to display product details and initialize quantity buttons ---
document.addEventListener("DOMContentLoaded", () => {
  displayProductDetails();

  let counter = 1;

  // Using event delegation to wait until product details are loaded
  const increaseBtn = document.querySelector("#quantity-increase-button");
  const reduceBtn = document.querySelector("#quantity-reduce-button");
  const quantityDisplayer = document.querySelector("#quantity-displayer");
  quantityDisplayer.textContent = counter;

  //4.adding event listener to update amount
  increaseBtn.addEventListener("click", () => {
    counter++;
    quantityDisplayer.textContent = counter;
  });

  reduceBtn.addEventListener("click", () => {
    if (counter > 1) {
      counter--;
      quantityDisplayer.textContent = counter;
    }
  });

  // Cart button functionality
  const cartBtn = document.querySelector("#cart-btn");

  cartBtn.addEventListener("click", () => {
    cart.push({ productIndex, quantity: counter });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Added ${counter} item(s) of "${product.productName}" to cart`);
  });
});


