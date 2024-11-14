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

  // Event listeners for buttons
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

  // Scroll event listener for Apple Mouse and trackpad
  container.addEventListener("scroll", () => {
    const scrollLeft = container.scrollLeft;
    currentIndex = Math.round(scrollLeft / slideWidth);
  });

  // Touch support
  let startX = 0;
  let moveX = 0;
  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchmove", (e) => {
    moveX = e.touches[0].clientX - startX;
  });

  container.addEventListener("touchend", () => {
    if (moveX < -50 && currentIndex < slides.length - 1) {
      currentIndex++;
    } else if (moveX > 50 && currentIndex > 0) {
      currentIndex--;
    }
    updateCarousel();
    moveX = 0;
  });

  updateCarousel(); // Initialize carousel
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonMappings = {
    branch_button1: "porZbr.html",
    branch_button2: "cmtg.html",
    branch_button3: "porWie.html",
  };

  // Adding a click event listener to each button based on the mappings
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
  // Get all dropdowns
  let dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    // Add click event to toggle dropdown
    dropdown.addEventListener("click", function () {
      this.classList.toggle("open");
    });

    // Get all links inside the dropdown-content
    let links = dropdown.querySelectorAll(".dropdown-content a");

    // Add event listener for each link inside dropdown
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        // Close the dropdown after clicking an option
        dropdown.classList.remove("open");
      });
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (event) {
    // Check if click is outside of dropdown
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class 'scroll-button' and add event listeners
  document.querySelectorAll(".scroll-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      // Get the target section ID from the data attribute
      const targetSectionId = button.getAttribute("data-section-id");
      if (targetSectionId) {
        scrollToSection(targetSectionId);
      }
    });
  });
});

// Scroll function that accepts the target section ID
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

/*document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("aktualnosci")
      .addEventListener("click", function (event) {
        event.preventDefault();
        scrollToSection("target-section-id");
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
  */
// document
//   .getElementById("scrollToCarouselBtn")
//   .addEventListener("click", function () {
//     scrollToSection("carousel-container");
//   });

// document
//   .getElementById("scrollToContactBtn")
//   .addEventListener("click", function () {
//     scrollToSection("contact-section");
//   });

// document
//   .getElementById("scrollToAboutUsBtn")
//   .addEventListener("click", function () {
//     scrollToSection("about-us");
//   });

window.onload = function () {
  if (window.location.hash) {
    const sectionId = window.location.hash.slice(1);
    scrollToSection(sectionId);
  }
};

/*window.onload = function () {
    if (window.location.hash) {
      scrollToSection();
    }
  };
  */

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contact-modal");
  const contactButton = document.getElementById("contactButton");
  const closeButton = document.querySelector(".close-button");

  // Open modal when button is clicked
  contactButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close modal when clicking on the close button
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
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
let currentIndex = 0; // Track the current index of the slide

// Get the width of one slide
const slideWidth = slides[0].getBoundingClientRect().width;

// Event listeners for touch events
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

// Move to the next slide
function moveToNextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
}

// Move to the previous slide
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

  let isAnimating = false; // Zmienna do śledzenia animacji

  function closeDropdown(dropdown, callback) {
    if (dropdown.classList.contains("open")) {
      isAnimating = true; // Ustawiamy animację na true
      dropdown.classList.remove("open");
      setTimeout(() => {
        isAnimating = false; // Po zakończeniu animacji ustawiamy na false
        callback();
      }, 300); // Ustaw czas zgodny z transition
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
