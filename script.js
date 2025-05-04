const popup = document.getElementById("popup");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  popup.classList.add("open-popup");
});
closeBtn.addEventListener("click", () => {
  popup.classList.remove("open-popup");
});
