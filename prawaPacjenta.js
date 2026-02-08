window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname !== "/") {
    history.replaceState(null, "", "/");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const contrastBtn = document.getElementById("contrastToggle");
  if (!contrastBtn) return;

  if (localStorage.getItem("highContrast") === "true") {
    document.body.classList.add("high-contrast");
  }

  contrastBtn.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
    localStorage.setItem(
      "highContrast",
      document.body.classList.contains("high-contrast"),
    );
  });
});
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("activeH");
});
