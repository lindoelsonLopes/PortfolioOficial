const hamburguer = document.querySelector(".icon-menu");
const closet = document.querySelector(".icon-close");

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle('active');
}

hamburguer.addEventListener("click", toggleMenu);
closet.addEventListener("click", toggleMenu);