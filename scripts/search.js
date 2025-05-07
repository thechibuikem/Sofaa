import { productsArray } from "./product.js"; //importing the array of products from product.js
// selecting the search input and the search result wrapper
const searchInput = document.querySelector("#products-search-bar"); //input field for searching
// selecting the value of the search field


const searchResultWrapper = document.querySelector("#search-result-wrapper"); //wrapper for the search result

///event listener for filling up query


searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let query = searchInput.value.trim(); //value of the input field,


// function for searching
let searchFunction = (query) => {
  const lowerQuery = query.toLowerCase();
  return productsArray.filter((product) =>product.productName.toLowerCase().includes(lowerQuery)
  );
};
//
const searchResults = Array.from(searchFunction(query));

//render
let renderResult = (item, wrapper) => {
  const link = document.createElement("a");
  link.innerHTML = `<h4>${item.productName}</h4>`;
  wrapper.appendChild(link);
};

searchResults.forEach((item) => renderResult(item, searchResultWrapper));

    searchInput.value = "";
  }
});




