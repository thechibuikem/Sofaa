import {cart} from './product.js'
import { productsArray } from './productListingPage.js'

const cartObjectWrapper = document.querySelector("#wrapper-for-cart-figures"); 

//1. Getting my cartArray using array.map which is a mashup of my cart(cart) and productsArray
const cartArray = cart.map(index=> productsArray[index.productIndex])

console.log(cartArray)

cartArray.forEach(element =>{
  const cartObject =  document.createElement("figure")
  cartObject.classList.add(
    "max-w-md",
    "mx-auto",
    "p-4",
    "bg-white",
    "rounded-xl",
    "shadow",
    "flex",
    "items-start",
    "gap-x-4"
  );
  cartObject.innerHTML = `
  <!-- Product Image -->
    <img src="${element.imageSrc}" alt="T-shirt" class="w-20 h-20 rounded-md object-cover" />
  
    <!-- Product Details -->
    <div class="flex-1">
      <div class="flex justify-between">
        <h2 class="font-semibold">${element.productName}</h2>
        <button>
          <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 8v10h8V8H6zM4 6h12v2H4V6zm2-4h8v2H6V2z"/>
          </svg>
        </button>
      </div>
      <p class="text-sm text-gray-500">Size: <span class="text-black">Large</span></p>
      <p class="text-sm text-gray-500">Color: <span class="text-black">White</span></p>
      <div class="flex justify-between items-center mt-2">
        <span class="text-xl font-semibold">$${element.price}</span>
        <!-- Quantity Controls -->
        <div class="flex items-center gap-x-2 border border-[#00000020] rounded-full px-3 py-1">
          <button class="text-xl">−</button>
          <span>1</span>
          <button class="text-xl">+</button>
        </div>
      </div>
    </div>
  `;
//
  cartObjectWrapper.append(cartObject)
})