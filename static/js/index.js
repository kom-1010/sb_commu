const menuBar = document.querySelector(".menu-bar");
const header = document.querySelector(".header");
const links = document.querySelector(".links");

menuBar.addEventListener("click", () => {
  links.classList.toggle("active");
  header.classList.toggle("active");
});
