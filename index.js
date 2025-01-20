document.addEventListener("DOMContentLoaded", function () {
  const headingsAndParagraphs = document.querySelectorAll(
    ".info-banner h3, .info-banner p, .contact"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 200);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  headingsAndParagraphs.forEach((element) => {
    observer.observe(element);
  });
});
if (!localStorage.getItem("popupDisplayed")) {
  setTimeout(() => {
    document.getElementById("popup-banner").classList.add("show");
    document.getElementById("overlay").classList.add("show");
  }, 1000);
  localStorage.setItem("popupDisplayed", "true");
}

function closePopup() {
  document.getElementById("popup-banner").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
}
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const container = document.querySelector(".carousel-track-container");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const slides = Array.from(track.children);
  let slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;

  let startX = 0; // Starting X-coordinate of the touch
  let endX = 0; // Ending X-coordinate of the touch

  function updateCarousel() {
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    updateCarousel();
  });

  // Touch event handlers for swiping
  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX; // Record the starting touch point
  });

  container.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX; // Track the current touch point
  });

  container.addEventListener("touchend", () => {
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
      // Minimum swipe distance to trigger
      if (deltaX > 0 && currentIndex > 0) {
        // Swipe right
        currentIndex--;
      } else if (deltaX < 0 && currentIndex < slides.length - 1) {
        // Swipe left
        currentIndex++;
      }
      updateCarousel();
    }

    // Reset swipe variables
    startX = 0;
    endX = 0;
  });

  updateCarousel();
});

/*
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const container = document.querySelector(".carousel-track-container");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const slides = Array.from(track.children);
  let slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  window.addEventListener("resize", () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    updateCarousel();
  });

  updateCarousel();
});
*/
/*
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const container = document.querySelector(".carousel-track-container");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const slides = Array.from(track.children);
  const slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
  updateCarousel();
});
*/
document.addEventListener("DOMContentLoaded", function () {
  const buttonMappings = {
    branch_button1: "zbroslawice.html",
    branch_button2: "cmtg.html",
    branch_button3: "wieszowa.html",
  };

  Object.keys(buttonMappings).forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", function () {
        window.location.href = buttonMappings[buttonId];
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function () {
      this.classList.toggle("open");
    });

    let links = dropdown.querySelectorAll(".dropdown-content a");

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        dropdown.classList.remove("open");
      });
    });
  });

  document.addEventListener("click", function (event) {
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".scroll-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSectionId = button.getAttribute("data-section-id");
      if (targetSectionId) {
        scrollToSection(targetSectionId);
      }
    });
  });
});

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

window.onload = function () {
  if (window.location.hash) {
    const sectionId = window.location.hash.slice(1);
    scrollToSection(sectionId);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contact-modal");
  const contactButton = document.getElementById("contactButton");
  const closeButton = document.querySelector(".close-button");

  contactButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

function handleButtonClick(buttonId) {
  const pageMap = {
    bottom_menu_button1: "poradnie.html",
    bottom_menu_button2: "laboratoria.html",
    bottom_menu_button3: "medycyna.html",
    bottom_menu_button4: "opieka.html",
  };

  window.location.href = pageMap[buttonId];
}

document
  .getElementById("bottom_menu_button1")
  .addEventListener("click", function () {
    handleButtonClick(this.id);
  });

document
  .getElementById("bottom_menu_button2")
  .addEventListener("click", function () {
    handleButtonClick(this.id);
  });

document
  .getElementById("bottom_menu_button3")
  .addEventListener("click", function () {
    handleButtonClick(this.id);
  });

document
  .getElementById("bottom_menu_button4")
  .addEventListener("click", function () {
    handleButtonClick(this.id);
  });

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
let startX = 0;
let moveX = 0;
let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchmove", (e) => {
  moveX = e.touches[0].clientX - startX;
});

track.addEventListener("touchend", () => {
  if (moveX < -50) {
    moveToNextSlide();
  } else if (moveX > 50) {
    moveToPrevSlide();
  }
  moveX = 0;
});

function moveToNextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
}

function moveToPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
}
window.addEventListener("scroll", function () {
  let elements = document.querySelectorAll(".bottom-menu-tabs");

  elements.forEach(function (element, index) {
    let position = element.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
      element.style.transitionDelay = index * 0.15 + "s";
      element.classList.add("visible");
    }
  });
});

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
