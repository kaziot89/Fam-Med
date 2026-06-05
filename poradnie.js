window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname !== "/") {
    history.replaceState(null, "", "/");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const contrastBtn = document.getElementById("contrastToggle");
  if (!contrastBtn) return;

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
});

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
// bmi claculator
function calculateBMI() {
  const heightInput = document.getElementById("height").value;
  const weightInput = document.getElementById("weight").value;
  const ageInput = document.getElementById("age").value;

  if (!heightInput || !weightInput || !ageInput) {
    alert("Proszę wypełnić wszystkie pola!");
    return;
  }

  const heightCm = parseFloat(heightInput);
  const weightKg = parseFloat(weightInput);

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const formattedBmi = bmi.toFixed(1).replace(".", ",");

  const resultCard = document.getElementById("bmi-result");
  const resultScore = document.getElementById("result-score");
  const resultText = document.getElementById("result-text");
  const resultBadge = document.getElementById("result-badge");
  const scalePointer = document.getElementById("scale-pointer");

  let statusClass = "";
  let scoreClass = "";
  let categoryText = "";
  let pointerLeftPosition = 0;
  let pointerColor = "";

  // Ponieważ daliśmy równe paski (każdy ma 25% szerokości),
  // obliczamy pozycję wewnątrz danej ćwiartki:
  if (bmi < 18.5) {
    statusClass = "status-underweight";
    scoreClass = "score-underweight";
    categoryText = "Niedowaga";
    pointerColor = "#3b82f6";

    // Zakres BMI: 10 - 18.5 mapujemy na 0% - 25%
    let percentage = (bmi - 10) / (18.5 - 10);
    pointerLeftPosition = Math.max(2, percentage * 25);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    statusClass = "status-normal";
    scoreClass = "score-normal";
    categoryText = "Prawidłowa waga";
    pointerColor = "#518c67";

    // Zakres BMI: 18.5 - 24.9 mapujemy na 25% - 50%
    let percentage = (bmi - 18.5) / (24.9 - 18.5);
    pointerLeftPosition = 25 + percentage * 25;
  } else if (bmi >= 25 && bmi <= 29.9) {
    statusClass = "status-overweight";
    scoreClass = "score-overweight";
    categoryText = "Nadwaga";
    pointerColor = "#f97316";

    // Zakres BMI: 25 - 29.9 mapujemy na 50% - 75%
    // Dla wyniku 25,3 da to około 51.5%, czyli idealnie na początku pomarańczowego paska!
    let percentage = (bmi - 25) / (29.9 - 25);
    pointerLeftPosition = 50 + percentage * 25;
  } else {
    statusClass = "status-obese";
    scoreClass = "score-obese";
    categoryText = "Otyłość";
    pointerColor = "#ef4444";

    // Zakres BMI: 30 - 40 mapujemy na 75% - 100%
    let percentage = (bmi - 30) / (40 - 30);
    pointerLeftPosition = Math.min(98, 75 + percentage * 25);
  }

  // Aktualizacja danych w HTML
  resultScore.innerText = formattedBmi;
  resultText.innerText = categoryText;

  resultBadge.className = "result-badge " + statusClass;
  resultScore.className = "result-score " + scoreClass;

  scalePointer.style.left = `${pointerLeftPosition}%`;
  scalePointer.style.color = pointerColor;
  scalePointer.style.borderTopColor = pointerColor; // Ta linijka odpowiada teraz za kolor trójkąta

  resultCard.style.display = "block";
  resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
// function calculateBMI() {
//   const height = document.getElementById("height").value;
//   const weight = document.getElementById("weight").value;

//   if (!height || !weight) {
//     document.getElementById("bmi-result").innerText =
//       "Uzupełnij wzrost i wagę.";
//     return;
//   }

//   const heightMeters = height / 100;
//   const bmi = weight / (heightMeters * heightMeters);
//   const bmiRounded = bmi.toFixed(1);

//   let category = "";

//   if (bmi < 18.5) {
//     category = "Niedowaga";
//   } else if (bmi < 25) {
//     category = "Prawidłowa waga";
//   } else if (bmi < 30) {
//     category = "Nadwaga";
//   } else {
//     category = "Otyłość";
//   }

//   document.getElementById("bmi-result").innerText =
//     `Twoje BMI: ${bmiRounded} (${category})`;
// }
