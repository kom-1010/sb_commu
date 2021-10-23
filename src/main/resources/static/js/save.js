const file = document.getElementById("file");
const fileName = document.querySelector(".file-name");

file.addEventListener("change", () => {
  const upload = file.value;
  fileName.value = upload;
});
