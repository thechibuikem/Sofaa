import { productsArray } from "./productListingPage.js"; //importing the array of objects from the product list script

const searchQuery = new URLSearchParams(window.location.search); //so basically this gets the query string of the url, that's basically everything after the question mark in the url and then turns it into a searchable object
// Thats essentially what new Urlsearch param does it turns the qyery srting into an object that can undergoe certain methods

const idFromURL = searchQuery.get("id"); //so essentially this gets the value of id from the query string

const productId = parseInt(idFromURL); //id the value of id is a string or something like that parseInt turns it into an integer and more specifically a number.

const productIndex = productId - 1; //this is the index of the selected product in the product array


// getting the sections of the dom required for our code to work
const body = document.querySelector("body")
const referenceForInsertion = document.querySelector("#header")

// selecting the current product that was clicked
const product = productsArray[productIndex];
// creating the main section
const productDetailsMainSection = document.createElement("main");
// adding a classlist to the main
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
// adding the html content of the main basically  the part we shall be manipulating
productDetailsMainSection.innerHTML = `

           <!--========================= MAIN TOP   ==============================================================-->
      <section id="main-top" class="">
        <!--====== the type of product being displayed  ======-->
        <h3 id="type" class="capitalize text-2xl font-semibold">${product.type}</h3>
      </section>

      <!--========================= MAIN BOTTOM   ==============================================================-->
      <section id="main-bottom" class=" flex flex-col lg:flex-row mt-[2rem] max-w-[100%] lg:h-[60vh] lg:gap-x-[2rem]">
        <!--================ GROUP 1 OF THE PRODUCTS MAIN DISPLAY  =====================-->
        <figure id="product-main-section-up" class="flex flex-col-reverse lg:w-[50%] h-full w-full items-center lg:flex-row sm:gap-y-10 gap-y-8 gap-x-8" >
          <!--============ DEGENERATE IMAGES OF THE PRODUCT ==============-->
          <div id="3-images-flex" class="flex flex-row  justify-between lg:flex-col lg:justify-between w-full h-full lg:w-auto">
            <img
              src="${product.imageSrc}"
              alt="${product.description}"
              class="w-[6rem] sm:w-[16rem] lg:w-[8rem] aspect-square bg-gray-200 rounded-2xl  "
            />
            <!-- img 2 -->
                      <img
              src="${product.imageSrc}"
              src="${product.sideImg1}"
              alt="${product.description}"
              class="w-[6rem] sm:w-[16rem] lg:w-[8rem] aspect-square bg-gray-200 rounded-2xl  "
            >
            <!-- img 3 -->
                        <img
              src="${product.imageSrc}"
              src="${product.sideImg2}"
              alt="${product.description}"
              class="w-[6rem] sm:w-[16rem] lg:w-[8rem] aspect-square bg-gray-200 rounded-2xl  "
            >
          </div>
          <!--========== THE MAIN PRODUCT IMAGE  ==============-->
          <div class="flex justify-center bg-gray-200 w-full rounded-2xl lg:h-[60vh]">
          <img src="${product.imageSrc}" alt="${product.description}" id="main-product-img" class="lg:w-[18rem] sm:w-[20rem] w-[16rem]">
        </figure>
          </div>

        <!--================ GROUP 2 OF THE PRODUCTS MAIN DISPLAY  =====================-->
        <section id="product-main-section-down"  class="flex flex-col justify-between lg:max-w-md mt-[4rem] lg:mt-0 font-sans">
      
    <h2 class="text-3xl font-bold tracking-tight">${product.productName}</h2>
    
    <!-- Rating -->
    <div class="flex items-center mt-2">
      <div class="flex">
        <span class="text-yellow-400">★</span>
        <span class="text-yellow-400">★</span>
        <span class="text-yellow-400">★</span>
        <span class="text-yellow-400">★</span>
        <span class="text-gray-300">★</span>
      </div>
      <span class="ml-2 text-sm text-gray-600">4.5/5</span>
    </div>
    
    <!-- Price -->
    <div class="mt-2 flex items-center">
      <span class="text-2xl font-bold">$260</span>
      <span class="ml-2 text-xl text-gray-400 line-through">$300</span>
      <span class="ml-2 text-sm text-red-500">-40%</span>
    </div>
    
    <!-- Description -->
    <p class="mt-2 text-sm text-gray-500">
${product.description}
    </p>
    
    <!-- Color selection -->
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
    
    <!-- Size selection -->
    <div class="mt-4">
      <p class="text-sm text-gray-600">Choose Size</p>
      <div class="flex mt-2 space-x-2">
        <button class="px-4 py-2 text-sm bg-gray-100 rounded-full">Small</button>
        <button class="px-4 py-2 text-sm bg-gray-100 rounded-full">Medium</button>
        <button class="px-4 py-2 text-sm bg-black text-white rounded-full">Large</button>
        <button class="px-4 py-2 text-sm bg-gray-100 rounded-full">X-Large</button>
      </div>
    </div>
    
    <!-- Quantity and add to cart -->
    <div class="flex items-center mt-6">
      <div class="flex items-center border border-gray-300 rounded-full">
        <button class="px-3 py-1 text-lg">−</button>
        <span class="px-3 py-1">1</span>
        <button class="px-3 py-1 text-lg">+</button>
      </div>
      <button class="ml-4 px-6 py-2 bg-black text-white rounded-full flex-grow text-center">
        Add to Cart
      </button>
    </div>
  
        </section>
      </section>
<`;


