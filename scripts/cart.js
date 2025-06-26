import { cart } from "./product.js";
import { productsArray } from "./productListingPage.js";
// variables
const cartObjectWrapper = document.querySelector("#wrapper-for-cart-figures");
const subTotalPriceDisplayer = document.querySelector("#cart-subtotal")
const discountDisplayer = document.querySelector("#cart-discount")
const deliveryFeeDisplayer = document.querySelector("#cart-delivery-fee")
const totalCostDisplayer = document.querySelector("#cart-total")



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
      <p class="text-sm text-gray-500">Size: <span class="">Large</span></p>
      <p class="text-sm text-gray-500">Color: <span class="">White</span></p>
      <div class="flex justify-between gap-x-4 items-center mt-2">
        <span class="text-xl font-semibold cart-item-price">$${itemPrice(item)}</span>
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

//function for cart checkout computation of prices and stuff
let loadCartPrices = () =>{

const subTotalPrice = cartArray.reduce((sum, item)=>
  {return sum + (item.price * item.counter)},0
)
//checking for discounts...
let discountStorer = 0
cartArray.forEach(item =>{
  if (item.discountedPrice){
 discountStorer += (item.discountedPrice * item.counter)
  }
  else{
    return discountStorer;
  }
})

const deliveryFee = Math.round(subTotalPrice * 0.005)

const totalCost = Math.round( subTotalPrice + deliveryFee - discountStorer)

//delivery fee section
subTotalPriceDisplayer.innerHTML = `$${subTotalPrice}`
deliveryFeeDisplayer.innerHTML = `$${deliveryFee}`
discountDisplayer.innerHTML = `$${discountStorer}`
totalCostDisplayer.innerHTML = `$${totalCost}`

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
    "gap-x-4",
    "dark:bg-black",
    "dark:border-[#ffffff50]",
    "dark:border-1",
    "dark:bg-[#000002]",
    "dark:text-white"
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

  //4.adding event listener to delete a cart item and also update checkout prices
  document.addEventListener("click", (e) => {
    const clickedBtn = e.target.closest("button.cart-delete-btn");
    const figure = e.target.closest("figure");
    if (clickedBtn && figure) {
      cart.splice(parseInt(figure.dataset.index), 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      figure.remove();
    }

    loadCartPrices()
  });

  

  //5 adding event listener to update the quantity of a cart item and also a function to update checkout price is here too
cartObjectWrapper.addEventListener("click", (e) => {
  const figure = e.target.closest("figure");
  const increaseBtn = e.target.closest(".quantity-increase-button");
  const reduceBtn = e.target.closest(".quantity-reduce-button");

  if (!figure) return;//if what I click isn't inside a figure then ignore it

  //getting the cart item that was clicked from cartArray using the index stored in the figure's dataset 
  const index = parseInt(figure.dataset.index);
  const item = cartArray[index];
const counter = item.counter;
console.log(counter)

  // //if the increase button is clicked
  if (increaseBtn) {
    item.counter++;
    cart[index].quantity = counter + 1;
  }

  // //if the reduce button is clicked
  if (reduceBtn && item.counter > 1) {
      item.counter--;
      cart[index].quantity = counter - 1;
  }
console.log(item)

//cart prices 
loadCartPrices()

  //after updating the counter property of the item in cartArray we need to update the localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  //updating the quantity displayer in our UI
        figure.querySelector(".quantity-displayer").textContent = item.counter;

        
        const newPrice = item.counter * item.price;
        //updating the price in our cart object
figure.querySelector(".cart-item-price").textContent = `$${newPrice}
`
});})

loadCartPrices()



