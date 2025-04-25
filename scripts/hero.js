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
  customer.innerHTML = `<!-- ${id}-->
        <div id="customer-${id}">
          <span><h2 class="font-bold">${number}</h2></span>
        <h4>${value}</h4></div>
`;
  customerWrap.appendChild(customer);

};

customerWrapArray.forEach(createCustomerCard);
// centering the third customer card
  let customerCard3 = customerWrap.querySelector("#customer-3");
  customerCard3.classList.add(
    "col-span-2",
    "justify-self-center",
    "md:col-start-2",
    "bg-red-400"
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
        

// so here we'll dynamically add the images for the marque