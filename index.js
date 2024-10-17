document.addEventListener("DOMContentLoaded", function () {
  const headingsAndParagraphs = document.querySelectorAll(
    ".info-banner h3, .info-banner p, .contact"
  );

  // Create a new Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          // Delay adding the 'visible' class by 200ms
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 200);

          // Stop observing this element
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe h3 and p elements inside .info-banner
  headingsAndParagraphs.forEach((element) => {
    observer.observe(element);
  });

  const track = document.querySelector(".carousel-track");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const items = Array.from(track.children);
  const itemWidth =
    items[0].getBoundingClientRect().width +
    parseFloat(getComputedStyle(items[0]).marginRight);
  let currentIndex = 0;

  function updateCarousel() {
    track.style.transition = "transform 0.8s ease";
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

  // Reset CSS transition after animation
  track.addEventListener("transitionend", () => {
    track.style.transition = "";
  });

  updateCarousel();

  // Handle branch button clicks
  const branchButtons = [
    { id: "branch_button1", url: "porZbr.html" },
    { id: "branch_button2", url: "cmtg.html" },
    { id: "branch_button3", url: "porWie.html" },
  ];

  branchButtons.forEach(({ id, url }) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", () => {
        window.location.href = url;
      });
    }
  });

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
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
      }
    });
  });

  // Scroll to section function
  function scrollToSection() {
    const target = document.getElementById("carousel-container");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  window.onload = function () {
    if (window.location.hash) {
      scrollToSection();
    }
  };

  function handleButtonClick(buttonId) {
    const pageMap = {
      bottom_menu_button1: "poradnie.html",
      bottom_menu_button2: "laboratoria.html",
      bottom_menu_button3: "http://3.html",
      bottom_menu_button4: "http://4.html",
    };

    window.location.href = pageMap[buttonId];
  }

  // Add event listeners to bottom menu buttons
  for (let i = 1; i <= 4; i++) {
    const button = document.getElementById(`bottom_menu_button${i}`);
    if (button) {
      button.addEventListener("click", function () {
        handleButtonClick(this.id);
      });
    }
  }

  // Carousel touch events
  const slides = Array.from(track.children);
  let startX = 0;
  let moveX = 0;

  // Get the width of one slide
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
});
