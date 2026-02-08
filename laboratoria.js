document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     MENU MOBILNE
  =============================== */
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      navMenu.classList.toggle("activeH");
    });
  }

  /* ===============================
     KONTRAST
  =============================== */
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

  /* ===============================
     DROPDOWNY (PLACES / INFOS)
  =============================== */
  const infosButton = document.getElementById("infos_btn");
  const infosDropdown = document.getElementById("infos_dropdown");
  const placesButton = document.getElementById("places_btn");
  const placesDropdown = document.getElementById("places_dropdown");

  if (infosButton && infosDropdown && placesButton && placesDropdown) {
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
  }
});
