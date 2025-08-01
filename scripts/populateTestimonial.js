// importing dependencies for this project
import { starSvg, generateStars } from "./createProductBlock.js";

// wrapper for the testimonial cards
const testimonialWrapper = document.querySelector("#testimonial-body");

// verified Icon
const verifiedIcon = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#3edd18" class="size-4">
  <path fill-rule="evenodd" d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z" clip-rule="evenodd" />
</svg>`;

const testimonialFiller = [
  {
    id: 1,
    name: "rejesh",
    rating: 5,
    text: `
    Lorem ipsum dolor sit amet consectetur,       adipisicing elit. Totam in,
    quis amet eius quam, nostrum esse cumque doloremque ipsa sunt ex
    repudiandae assumenda est tempore laboriosam illum, quasi a. Harum?`,
  },

  {
    id: 2,
    name: "rejesh",
    rating: 1,
    text: `
    Lorem ipsum dolor sit amet consectetur,       adipisicing elit. Totam in,
    quis amet eius quam, nostrum esse cumque doloremque ipsa sunt ex
    repudiandae assumenda est tempore laboriosam illum, quasi a. Harum?`,
  },

  {
    id: 3,
    name: "rejesh",
    rating: 4,
    text: `
    Lorem ipsum dolor sit amet consectetur,       adipisicing elit. Totam in,
    quis amet eius quam, nostrum esse cumque doloremque ipsa sunt ex
    repudiandae assumenda est tempore laboriosam illum, quasi a. Harum?`,
  },

  {
    id: 4,
    name: "patex",
    rating: 5,
    text: `
    Lorem ipsum dolor sit amet consectetur,       adipisicing elit. Totam in,
    quis amet eius quam, nostrum esse cumque doloremque ipsa sunt ex
    repudiandae assumenda est tempore laboriosam illum, quasi a. Harum?`,
  },

  {
    id: 5,
    name: "rejesh",
    rating: 5,
    text: `
    Lorem ipsum dolor sit amet consectetur,       adipisicing elit. Totam in,
    quis amet eius quam, nostrum esse cumque doloremque ipsa sunt ex
    repudiandae assumenda est tempore laboriosam illum, quasi a. Harum?`,
  },

  {
    id: 6,
    name: "rejesh",
    rating: 5,
    text: `
    Lorem ipsum dolor sit amet consectetur,       adipisicing elit. Totam in,
    quis amet eius quam, nostrum esse cumque doloremque ipsa sunt ex
    repudiandae assumenda est tempore laboriosam illum, quasi a. Harum?`,
  },

  {
    id: 7,
    name: "rejesh",
    rating: 5,
    text: `
    Lorem ipsum dolor sit amet consectetur,       adipisicing elit. Totam in,
    quis amet eius quam, nostrum esse cumque doloremque ipsa sunt ex
    repudiandae assumenda est tempore laboriosam illum, quasi a. Harum?`,
  },
];

let createTestimonial = (testimony, wrapper) => {
  const { id, name, text, rating } = testimony;
  let stars = generateStars(rating);
  let testimonialCard = document.createElement("figure");
  testimonialCard.setAttribute("id", `testimonial-card${id}`);
  testimonialCard.innerHTML = `
 
          <div id="rating-stars" class="flex">
            ${stars}
          </div>
          <!-- the name and verified flexed -->
          <div id="nameXverified" class="flex items-center">
            <h3 class="text- uppercase">${name}</h3>
${verifiedIcon}
</div>
          <h6 class="text-sm w-[90%]" >
           ${text}
          </h6>
  `;
  testimonialCard.classList.add("dark:border-[#ffffff50]","dark:border-1","testimonialcardstyling",);

  wrapper.appendChild(testimonialCard);
};

testimonialFiller.forEach((testimony) =>
  createTestimonial(testimony, testimonialWrapper)
);

//// function to control testimonial ////

////getting the width of just one testimonial card////
let testimonialCardWidth = Math.ceil(
  document.querySelector("#testimonial-card1").getBoundingClientRect().width
);
//////
console.log(testimonialCardWidth);

// state handling
let currentIndex = 0;
let movement = 0;

// getting my buttons
const leftBtn = document.querySelector("#testimonial-left");
const rightBtn = document.querySelector("#testimonial-right");

let moveright = () =>{
movement += testimonialCardWidth;

  // testimonialWrapper.style.transform = `translateX(${movement}px)`;
  testimonialWrapper.style.transform = translateX(100)
}

let moveleft = () => {
  movement -= testimonialCardWidth
  testimonialWrapper.style.transform = `translateX(${movement}px)`;
};

leftBtn.addEventListener("click",moveleft)
rightBtn.addEventListener("click", moveright);