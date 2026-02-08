document.addEventListener("DOMContentLoaded", () => {
  /* ==================================================
     KONTRAST (WCAG)
  ================================================== */
  const contrastBtn = document.getElementById("contrastToggle");
  if (contrastBtn) {
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
  }

  /* ==================================================
     ROZMIAR CZCIONKI
  ================================================== */
  const fontMinus = document.getElementById("fontMinus");
  const fontPlus = document.getElementById("fontPlus");
  const fontReset = document.getElementById("fontReset");

  if (fontMinus && fontPlus && fontReset) {
    const defaultFontSize = 100;
    let currentFontSize =
      parseInt(localStorage.getItem("fontSize")) || defaultFontSize;

    const setFontSize = (size) => {
      document.body.style.fontSize = size + "%";
      localStorage.setItem("fontSize", size);
    };

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
  }

  /* ==================================================
     MENU MOBILNE
  ================================================== */
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      navMenu.classList.toggle("activeH");
    });
  }

  /* ==================================================
     ACCORDION (.acc)
  ================================================== */
  document.querySelectorAll(".acc").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const panel = btn.nextElementSibling;
      if (!panel) return;

      panel.style.maxHeight
        ? (panel.style.maxHeight = null)
        : (panel.style.maxHeight = panel.scrollHeight + "px");
    });
  });

  /* ==================================================
     ACCORDION + PRZEJŚCIE DO PORADNI (.acc2)
  ================================================== */
  document.querySelectorAll(".acc2").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const panel = btn.nextElementSibling;
      if (panel) {
        panel.style.maxHeight
          ? (panel.style.maxHeight = null)
          : (panel.style.maxHeight = panel.scrollHeight + "px");
      }

      const buttonId = btn.dataset.buttonId;
      if (buttonId) {
        window.location.href =
          "poradnie.html?" + new URLSearchParams({ buttonId }).toString();
      }
    });
  });

  /* ==================================================
     MODAL – CERTYFIKATY
  ================================================== */
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");

  if (modal && modalImg && captionText) {
    document.querySelectorAll(".certificates img").forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
      });
    });

    modalImg.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  /* ==================================================
     DROPDOWNY
  ================================================== */
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });

    dropdown.querySelectorAll(".dropdown-content a").forEach((link) => {
      link.addEventListener("click", () => {
        dropdown.classList.remove("open");
      });
    });
  });

  document.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  });

  /* ==================================================
     KARUZELA
  ================================================== */
  const track = document.querySelector(".carousel-track");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");

  if (track && prevButton && nextButton) {
    const items = Array.from(track.children);
    const itemWidth =
      items[0].getBoundingClientRect().width +
      parseFloat(getComputedStyle(items[0]).marginRight);

    let currentIndex = 0;

    const updateCarousel = () => {
      track.style.transition = "transform 0.8s ease";
      track.style.transform = "translateX(" + -currentIndex * itemWidth + "px)";
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= items.length - 4;
    };

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < items.length - 4) {
        currentIndex++;
        updateCarousel();
      }
    });

    track.addEventListener("transitionend", () => {
      track.style.transition = "";
    });

    updateCarousel();
  }

  /* ==================================================
     PRZEJŚCIA DO PLACÓWEK
  ================================================== */
  const branches = {
    branch_button1: "zbroslawice.html",
    branch_button2: "cmtg.html",
    branch_button3: "wieszowa.html",
  };

  Object.keys(branches).forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        window.location.href = branches[id];
      });
    }
  });
});

/* ==================================================
   SCROLL DO KARUZELI (HASH)
================================================== */
function scrollToSection() {
  const target = document.getElementById("carousel-container");
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

window.addEventListener("load", () => {
  if (window.location.hash) {
    scrollToSection();
  }
});
