let btn = document.querySelector(".burger");
let slide = document.querySelector(".admin");
let menuLinks = document.querySelectorAll(".admin a");

if (btn && slide) {
  btn.addEventListener("click", () => {
    slide.classList.toggle("show");
  });
}

// menuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     slide.classList.remove("show");
//   });
// });
