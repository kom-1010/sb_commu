const profileUpdateBtn = document.querySelector(".profile-update-btn");
const cancleBtn = document.querySelector(".cancle-btn");
const modal = document.querySelector(".modal");

profileUpdateBtn.addEventListener("click", () => {
  modal.classList.toggle("block");
});

cancleBtn.addEventListener("click", () => {
  modal.classList.toggle("block");
});
