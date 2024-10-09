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
  var button = document.getElementById("branch_button1");

  // Dodaj nasłuchiwanie kliknięcia do przycisku
  button.addEventListener("click", function () {
    // Przekieruj do 'porWie.html' w tym samym oknie
    window.location.href = "porZbr.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Pobierz przycisk z identyfikatorem 'branch_button1'
  var button = document.getElementById("branch_button2");

  // Dodaj nasłuchiwanie kliknięcia do przycisku
  button.addEventListener("click", function () {
    // Przekieruj do 'porWie.html' w tym samym oknie
    window.location.href = "cmtg.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Pobierz przycisk z identyfikatorem 'branch_button1'
  var button = document.getElementById("branch_button3");

  // Dodaj nasłuchiwanie kliknięcia do przycisku
  button.addEventListener("click", function () {
    // Przekieruj do 'porWie.html' w tym samym oknie
    window.location.href = "porWie.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Pobierz przycisk z identyfikatorem 'branch_button1'
  var button = document.getElementById("branch_button4");

  // Dodaj nasłuchiwanie kliknięcia do przycisku
  button.addEventListener("click", function () {
    // Przekieruj do 'porWie.html' w tym samym oknie
    window.location.href = "porMie.html";
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
      "bottom_menu_button1": "poradnie.html",
      "bottom_menu_button2": "laboratoria.html",
      "bottom_menu_button3": "http://3.html",
      "bottom_menu_button4": "http://4.html"
  };
  
  window.location.href = pageMap[buttonId];
}

document.getElementById("bottom_menu_button1").addEventListener("click", function() {
  handleButtonClick(this.id);
});

document.getElementById("bottom_menu_button2").addEventListener("click", function() {
  handleButtonClick(this.id);
});

document.getElementById("bottom_menu_button3").addEventListener("click", function() {
  handleButtonClick(this.id);
});

document.getElementById("bottom_menu_button4").addEventListener("click", function() {
  handleButtonClick(this.id);
});
