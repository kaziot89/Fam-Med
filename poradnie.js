document.addEventListener("DOMContentLoaded", function () {
  // Funkcja do ukrywania wszystkich divów z zawartością
  function hideAllContent() {
    document
      .querySelectorAll("#display_content .clinic_content")
      .forEach(function (content) {
        content.style.display = "none";
      });
  }

  // Funkcja do obsługi kliknięcia w przycisk
  function handleButtonClick(event) {
    let buttonId = event.target.id;
    let contentId = buttonId.replace("button_", "clinic_content");

    hideAllContent(); // Ukryj wszystkie divy z zawartością
    let contentDiv = document.getElementById(contentId);

    if (contentDiv) {
      contentDiv.style.display = "block"; // Pokaż tylko ten odpowiadający przyciskowi
      // contentDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Ukryj div z powitaniem
    document.getElementById("clinics_greeting").style.display = "none";
  }

  // Przywróć widoczność divu powitalnego przy odświeżeniu strony
  window.addEventListener("load", function () {
    document.getElementById("clinics_greeting").style.display = "block";
  });

  // Dodaj nasłuchiwanie kliknięć do wszystkich przycisków
  document.querySelectorAll(".clinic_button").forEach(function (button) {
    button.addEventListener("click", handleButtonClick);
  });
});

window.onload = function () {
  if (window.location.hash) {
    const hash = window.location.hash.substring(1); // usuwamy #
    const buttonToClick = document.getElementById(hash);
    if (buttonToClick) {
      buttonToClick.click(); // Symulujemy kliknięcie
    }
  }
};
let acc = document.getElementsByClassName("acc");
let i;

// Funkcja do zamykania wszystkich paneli
function closeAllAccordions() {
  console.log("Zamykanie wszystkich paneli");
  for (i = 0; i < acc.length; i++) {
    acc[i].classList.remove("active");
    let panel = acc[i].nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    }
  }
}

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

// Pobierz wszystkie elementy z klasą "clinic_button"
let clinicButtons = document.getElementsByClassName("clinic_button");

// Dodaj nasłuchiwanie zdarzeń dla każdego przycisku
for (let j = 0; j < clinicButtons.length; j++) {
  clinicButtons[j].addEventListener("click", function () {
    console.log("Przycisk kliniki kliknięty: " + j); // Log diagnostyczny
    closeAllAccordions();
  });
}
function toggleContent(branch) {
  // Ukryj wszystkie elementy content
  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => {
    if (content.id === branch) {
      content.style.display =
        content.style.display === "block" ? "none" : "block"; // Przełącz widoczność
    } else {
      content.style.display = "none"; // Ukryj inne elementy
    }
  });
}
function toggleContent(branch) {
  // Ukryj wszystkie elementy content
  const contents = document.querySelectorAll(".content");
  const buttons = document.querySelectorAll(".branch_button");

  contents.forEach((content) => {
    if (content.id === branch) {
      content.style.display =
        content.style.display === "block" ? "none" : "block"; // Przełącz widoczność
    } else {
      content.style.display = "none"; // Ukryj inne elementy
    }
  });

  buttons.forEach((button) => {
    if (button.textContent.toLowerCase() === branch) {
      button.classList.add("active"); // Dodaj klasę active
    } else {
      button.classList.remove("active"); // Usuń klasę active z innych przycisków
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  if (getQueryParam("autoClick") === "true") {
    const buttonId = getQueryParam("buttonId");

    // Kliknij przycisk o ID podanym w parametrze buttonId
    let buttonToClick = document.getElementById(buttonId);
    if (buttonToClick) {
      buttonToClick.click();
    }
  }
});
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("activeH");
});
