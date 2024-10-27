document.addEventListener("DOMContentLoaded", function () {
  const headingsAndParagraphs = document.querySelectorAll(
    ".info-banner h3, .info-banner p, .contact"
  );

  // Utwórz nowy Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          // Opóźnij dodanie klasy 'visible' o 500ms
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 200);

          // Przestań obserwować ten element
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  ); // Ustawienie progu na 50% widoczności

  // Obserwuj elementy h3 i p wewnątrz .info-banner
  headingsAndParagraphs.forEach((element) => {
    observer.observe(element);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const items = Array.from(track.children);
  const itemWidth =
    items[0].getBoundingClientRect().width +
    parseFloat(getComputedStyle(items[0]).marginRight);

  let currentIndex = 0;

  function updateCarousel() {
    track.style.transition = "transform 0.8s ease"; // Dodanie przejścia CSS
    track.style.transform = "translateX(" + -currentIndex * itemWidth + "px)";
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= items.length - 4;
  }

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

  // Resetowanie przejścia CSS po zakończeniu animacji
  track.addEventListener("transitionend", () => {
    track.style.transition = "";
  });

  updateCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
  // Pobierz przycisk z identyfikatorem 'branch_button1'
  let button = document.getElementById("branch_button1");

  // Dodaj nasłuchiwanie kliknięcia do przycisku
  button.addEventListener("click", function () {
    // Przekieruj do 'porWie.html' w tym samym oknie
    window.location.href = "porZbr.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Pobierz przycisk z identyfikatorem 'branch_button1'
  let button = document.getElementById("branch_button2");

  // Dodaj nasłuchiwanie kliknięcia do przycisku
  button.addEventListener("click", function () {
    // Przekieruj do 'porWie.html' w tym samym oknie
    window.location.href = "cmtg.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Pobierz przycisk z identyfikatorem 'branch_button1'
  let button = document.getElementById("branch_button3");

  // Dodaj nasłuchiwanie kliknięcia do przycisku
  button.addEventListener("click", function () {
    // Przekieruj do 'porWie.html' w tym samym oknie
    window.location.href = "porWie.html";
  });
});
//
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
function scrollToSection() {
  const target = document.getElementById("carousel-container");
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center", // Ustawienie wyświetlania elementu na środku viewportu
    });
  }
}

window.onload = function () {
  // Sprawdzanie, czy strona została załadowana z kotwicą
  if (window.location.hash) {
    scrollToSection(); // Przewiń do sekcji, jeśli jest kotwica
  }
};

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
  var elements = document.querySelectorAll(".bottom-menu-tabs");

  elements.forEach(function (element, index) {
    var position = element.getBoundingClientRect();

    // Sprawdza, czy element jest w widocznej części ekranu
    if (position.top <= window.innerHeight && position.bottom >= 0) {
      // Dodajemy opóźnienie do animacji
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
