window.onload = function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {});
  }

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navMenu.classList.toggle("activeH");
  });
};
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname !== "/") {
    history.replaceState(null, "", "/");
  }
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
