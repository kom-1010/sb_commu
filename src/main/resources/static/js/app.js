const menuBar = document.querySelector(".menu-bar");
const header = document.querySelector(".header");
const navLinks = document.getElementById("nav-links");
const account = document.querySelector(".account");
const accountMenu = document.querySelector(".account-menu");
const login = document.querySelector(".login");
const loginMenu = document.querySelector(".login-menu");

menuBar.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  header.classList.toggle("active");
});

account.addEventListener("click", () => {
  accountMenu.classList.toggle("active");
});

login.addEventListener("click", () => {
  loginMenu.classList.toggle("active");
});
