const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

function voltarPagina() {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.href = "./";
  }
}

let logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/";
});
