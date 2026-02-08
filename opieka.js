const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("activeH");
});

document.addEventListener("DOMContentLoaded", () => {
  const infosButton = document.getElementById("infos_btn");
  const infosDropdown = document.getElementById("infos_dropdown");
  const placesButton = document.getElementById("places_btn");
  const placesDropdown = document.getElementById("places_dropdown");

  let isAnimating = false;
  function closeDropdown(dropdown, callback) {
    if (dropdown.classList.contains("open")) {
      isAnimating = true;
      dropdown.classList.remove("open");
      setTimeout(() => {
        isAnimating = false;
        callback();
      }, 300);
    } else {
      callback();
    }
  }

  infosButton.addEventListener("click", () => {
    if (!isAnimating) {
      closeDropdown(placesDropdown, () => {
        infosDropdown.classList.toggle("open");
      });
    }
  });

  placesButton.addEventListener("click", () => {
    if (!isAnimating) {
      closeDropdown(infosDropdown, () => {
        placesDropdown.classList.toggle("open");
      });
    }
  });
});

function downloadAsJPEG(event) {
  event.preventDefault();
  const element = document.getElementById("surveyForm");

  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "ankieta.jpg";
    link.click();
  });
}
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
