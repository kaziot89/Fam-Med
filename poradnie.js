document.addEventListener("DOMContentLoaded", function () {
  const accButton = document.querySelector(".acc");
  if (accButton) {
    accButton.click();
  }
});

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("activeH");
});
document.addEventListener("DOMContentLoaded", function () {
  function hideAllContent() {
    document
      .querySelectorAll("#display_content .clinic_content")
      .forEach(function (content) {
        content.style.display = "none";
      });
  }

  function handleButtonClick(event) {
    let buttonId = event.target.id;
    let contentId = buttonId.replace("button_", "clinic_content");

    hideAllContent();
    let contentDiv = document.getElementById(contentId);

    if (contentDiv) {
      contentDiv.style.display = "block";
    }

    document.getElementById("clinics_greeting").style.display = "none";
  }

  window.addEventListener("load", function () {
    document.getElementById("clinics_greeting").style.display = "block";
  });

  document.querySelectorAll(".clinic_button").forEach(function (button) {
    button.addEventListener("click", handleButtonClick);
  });
});

window.onload = function () {
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const buttonToClick = document.getElementById(hash);
    if (buttonToClick) {
      buttonToClick.click();
    }
  }
};
let acc = document.getElementsByClassName("acc");
let i;

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

let clinicButtons = document.getElementsByClassName("clinic_button");

for (let j = 0; j < clinicButtons.length; j++) {
  clinicButtons[j].addEventListener("click", function () {
    console.log("Przycisk kliniki kliknięty: " + j);
    closeAllAccordions();
  });
}
function toggleContent(branch) {
  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => {
    if (content.id === branch) {
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    } else {
      content.style.display = "none";
    }
  });
}
function toggleContent(branch) {
  const contents = document.querySelectorAll(".content");
  const buttons = document.querySelectorAll(".branch_button");

  contents.forEach((content) => {
    if (content.id === branch) {
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    } else {
      content.style.display = "none";
    }
  });

  buttons.forEach((button) => {
    if (button.textContent.toLowerCase() === branch) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
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

    let buttonToClick = document.getElementById(buttonId);
    if (buttonToClick) {
      buttonToClick.click();
    }
  }
});
