//getting the section containing the number of brands they've worked with
let customerWrap = document.querySelector("#customers-wrapper");
// the card holding information
let customerWrapArray = [
  {
    id: 1,
    number: "200+",
    value: "International Brands",
  },
{ id: 2,
    number: "2,000+",
    value: "High-Quality Products",
  },
  {
    id: 3,
    number: "30,000+",
    value: "Happy Customers",
  },
];
// customer to create like each customer review count block
let createCustomerCard = ({ id, number, value }) => {
  let customer = document.createElement("div");
customer.classList.add("mb-[4rem]")

  customer.innerHTML = `<!-- ${id}-->
        <div id="customer-${id}">
          <span><h2 class="font-bold sm:text-4xl">${number}</h2></span>
        <h4>${value}</h4></div>
`;
  customerWrap.appendChild(customer);

};

customerWrapArray.forEach(createCustomerCard);
// centering the third customer card
  let customerCard3 = customerWrap.querySelector("#customer-3");
  customerCard3.parentElement.classList.add(
    "place-in-center",
  );

//           <!-- 1 -->
//         <div >
//           <span><h2 class="font-bold">200+</h2></span>
//         <h4>international Brands</h4></div>
//                 <!-- 2 -->
//         <div >
//           <span><h2 class="font-bold">200+</h2></span>
//         <h4>international Brands</h4></div>
//                 <!-- 3 -->
// <div  class="col-span-2 justify-self-center md:col-start-2">
//           <span><h2 class="font-bold">200+</h2></span>
//         <h4>international Brands</h4></div>
        

// so here we'll dynamically add the images for the marquee
let marqueeWrap = document.querySelector("#trusted-by-grp-1")//there's like a div housing the images
let marqueeWrapWrapper = document.querySelector(".animate-marquee")//there's like a div housing the div that houses the images 


const marqueeFiller = [
 "../images/homepage/logosOnMarquee/calvinKlein.png",
  "../images/homepage/logosOnMarquee/gucci.png",
  "../images/homepage/logosOnMarquee/prada.png",
  "../images/homepage/logosOnMarquee/versace.png",
  "../images/homepage/logosOnMarquee/zara.png",
]//array that would create our logos

let createMarqueeElement = (item) => {
  let marqueeElement = document.createElement("img");
  marqueeElement.src = [item];
  marqueeElement.classList.add("mr-[3rem]", )
marqueeWrap.appendChild(marqueeElement);
}
// the creation of the marquee cards
marqueeFiller.forEach(createMarqueeElement);

marqueeWrapWrapper.classList.add("flex","w-max","opacity-50")