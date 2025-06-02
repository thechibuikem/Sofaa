import { cart } from "./product.js";
import { productsArray } from "./productListingPage.js";
// variables
const cartObjectWrapper = document.querySelector("#wrapper-for-cart-figures");

//creating a no item text to display if the cart is empty
const noItemText = document.createElement("h1")
noItemText.classList.add("no-item-text")
noItemText.innerHTML = `
Opps ... You haven't added any contents to cart yet
`;


// This is the wrapper that will hold all the cart items with counter updated to it

//Getting my cartArray using array.map which is a mashup of my cart(cart) and productsArray
const cartArray = cart.map((item) => {
  const cartItem = productsArray[item.productIndex];
 return{ ...cartItem,
  counter:item.quantity
 }
})

//.1 function to create cart object
let createCartObject = (item) => {
  // declaring counter
  let counter;
  //function that calculates the price of a singular cart item
  let itemPrice = (item) => {
    counter = item.counter;

    let productPrice = Math.round(item.price * counter);
    return productPrice;
  };

  //function that returns the cart image
  let cartimageCaller = (item) =>{
    return` 
     <!-- Product Image -->
    <img src="${
      item.imageSrc
    }" alt="T-shirt" class="w-20 h-20 rounded-md object-cover"/>
    `
  }

  //function that returns the cart details
  let cartDetailsCaller = (item) => {
    return`
    <!-- Product Details -->
    <div class="flex-1">
      <div class="flex gap-4 justify-between">
        <h2 class="font-semibold">${item.productName}</h2>
        <button class="cart-delete-btn">
          <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 8v10h8V8H6zM4 6h12v2H4V6zm2-4h8v2H6V2z"/>
          </svg>
        </button>
      </div>
      <p class="text-sm text-gray-500">Size: <span class="text-black">Large</span></p>
      <p class="text-sm text-gray-500">Color: <span class="text-black">White</span></p>
      <div class="flex justify-between gap-x-4 items-center mt-2">
        <span class="text-xl font-semibold">$${itemPrice(item)}</span>
    `
  }

  //function that returns the quantity details
  let quantityDetailsCaller = (item) => {
    return `
       <!-- Quantity Controls -->
        <div class="flex items-center gap-x-2 border border-[#00000020] rounded-full px-3 py-1">
          <button class="text-xl cursor-pointer quantity-reduce-button" id="">−</button>
          <span class="quantity-displayer">${counter}</span>
          <button class="text-xl cursor-pointer quantity-increase-button " id="">+</button>
          </div>
      </div>
    </div>
    `;
  };



  return `
  ${cartimageCaller(item)}
  ${cartDetailsCaller(item)}
  ${quantityDetailsCaller(item)}     
  `;


}



//creating the cart objects and appending them to the cartObjectWrapper 
cartArray.forEach((item) => {
  const cartObject = document.createElement("figure");
  cartObject.dataset.index = cartArray.indexOf(item);
  cartObject.classList.add(
    "mx-auto",
    "p-4",
    "bg-white",
    "rounded-xl",
    "shadow",
    "flex",
    "items-start",
    "gap-x-4"
  );
  cartObject.style.width="17rem"

  cartObject.innerHTML = createCartObject(item)//basically yeah the cart object we are creating this is what it is but then it is being created through a function call
  ;
  cartObjectWrapper.append(cartObject);
});
  
//basically if the cart is empty this will display a message
if (cartObjectWrapper.children.length === 0){
  cartObjectWrapper.append(noItemText);
}
else if (document.body.contains(noItemText)){
  noItemText.remove()
}

  //3. Using event delegation to wait until product details are loaded
document.addEventListener("DOMContentLoaded", () => {

  //4.adding event listener to delete a cart item
  document.addEventListener("click", (e) => {
    const clickedBtn = e.target.closest("button.cart-delete-btn");
    const figure = e.target.closest("figure");
    if (clickedBtn && figure) {
      cart.splice(parseInt(figure.dataset.index), 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      figure.remove();
    }
  });


});

