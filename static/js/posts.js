const searchGroupBtn = document.querySelector(".search-group-btn");
const searchGroup = document.querySelector(".search-group");
const searchTitle = document.querySelector(".search-title");
const searchAuthor = document.querySelector(".search-author");
const searchType = document.querySelector(".search-type");

searchGroupBtn.addEventListener("click", () => {
  searchGroup.classList.toggle("active");
});

searchTitle.addEventListener("click", () => {
  searchType.innerHTML = "제목";
  searchGroup.classList.remove("active");
});

searchAuthor.addEventListener("click", () => {
  searchType.innerHTML = "작성자";
  searchGroup.classList.remove("active");
});
