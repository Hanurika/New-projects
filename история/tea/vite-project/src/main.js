const menuBtn = document.querySelector(".menu__list--active");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menuList.classList.add("menu__list--active");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu__close");
});
