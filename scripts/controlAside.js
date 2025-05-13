///////////////////disabling the aside when the button is clicked///////////////////
const asideSection = document.querySelector("#aside");
const asideBtn = document.querySelector("#aside-Btn");
///////////stating what happens when the aside Button is clicked//////////////
asideBtn.addEventListener("click", () => {
  asideSection.style.display = "none";
});
