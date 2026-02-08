window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname !== "/") {
    history.replaceState(null, "", "/");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const fontMinus = document.getElementById("fontMinus");
  const fontReset = document.getElementById("fontReset");
  const fontPlus = document.getElementById("fontPlus");

  const defaultFontSize = 100;
  let currentFontSize =
    parseInt(localStorage.getItem("fontSize")) || defaultFontSize;

  function setFontSize(size) {
    document.body.style.fontSize = size + "%";
    localStorage.setItem("fontSize", size);
  }

  setFontSize(currentFontSize);

  fontMinus.addEventListener("click", () => {
    if (currentFontSize > 50) {
      currentFontSize -= 10;
      setFontSize(currentFontSize);
    }
  });

  fontPlus.addEventListener("click", () => {
    if (currentFontSize < 200) {
      currentFontSize += 10;
      setFontSize(currentFontSize);
    }
  });

  fontReset.addEventListener("click", () => {
    currentFontSize = defaultFontSize;
    setFontSize(currentFontSize);
  });
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
