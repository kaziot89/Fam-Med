const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("activeH");
});

let acc = document.getElementsByClassName("acc");
let acc2 = document.getElementsByClassName("acc2");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

for (i = 0; i < acc2.length; i++) {
  acc2[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel2 = this.nextElementSibling;
    if (panel2.style.maxHeight) {
      panel2.style.maxHeight = null;
    } else {
      panel2.style.maxHeight = panel2.scrollHeight + "px";
    }
  });
}

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let images = document.querySelectorAll(".certificates img");

images.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

modalImg.onclick = function () {
  modal.style.display = "none";
};

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

  track.addEventListener("transitionend", () => {
    track.style.transition = "";
  });

  updateCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("branch_button1");

  button.addEventListener("click", function () {
    window.location.href = "zbroslawice.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("branch_button2");

  button.addEventListener("click", function () {
    window.location.href = "cmtg.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("branch_button3");

  button.addEventListener("click", function () {
    window.location.href = "wieszowa.html";
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
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".acc2");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonId = button.getAttribute("data-button-id");
      window.location.href =
        "poradnie.html?" +
        new URLSearchParams({ buttonId: buttonId }).toString();
    });
  });
});
