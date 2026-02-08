const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const images = document.querySelectorAll(".gallery img");
const close = document.querySelector(".close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
images.forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("show");
    document.body.classList.add("no-scroll");
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.classList.remove("no-scroll");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
});
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
