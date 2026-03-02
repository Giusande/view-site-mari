const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

let logo = document.querySelector(".logo");

function voltarPagina() {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.href = "./";
  }
}
