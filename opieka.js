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

function downloadAsJPEG(event) {
  event.preventDefault(); // Zablokuj domyślną akcję formularza
  const element = document.getElementById("surveyForm"); // Zmień 'ankieta' na odpowiedni identyfikator Twojego elementu

  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "ankieta.jpg"; // Nazwa pliku
    link.click();
  });
}

// czcionka i stylowanie pdf

// async function downloadPDF() {
//   const { jsPDF } = window.jspdf;

//   const doc = new jsPDF();

//   // Dodaj czcionkę DejaVu Sans (tutaj powinien być zakodowany w Base64 plik .ttf czcionki)
//   doc.addFileToVFS("DejaVuSans.ttf", "BASE64_ENCODED_FONT_HERE"); // Wstaw tutaj odpowiedni kod Base64 czcionki
//   doc.addFont("DejaVuSans.ttf", "DejaVuSans", "normal");
//   doc.setFont("DejaVuSans");

//   let y = 10; // Wysokość startowa dla tekstu

//   // Dodawanie tytułu
//   doc.setFontSize(20);
//   doc.text("Ankieta", 10, y);
//   y += 15; // Odstęp po tytule

//   // Ustalamy domyślny rozmiar czcionki
//   doc.setFontSize(12);
//   doc.setTextColor(0, 0, 0); // Kolor czcionki

//   // Zbieranie danych
//   const age = document.querySelector('input[name="age"]:checked')?.value;
//   const gender = document.querySelector('input[name="gender"]:checked')?.value;
//   const education = document.querySelector(
//     'input[name="education"]:checked'
//   )?.value;
//   const ok_start = document.querySelector(
//     'input[name="ok_start"]:checked'
//   )?.value;
//   const diagnostics = Array.from(
//     document.querySelectorAll('input[name="diagnostics"]:checked')
//   )
//     .map((checkbox) => checkbox.value)
//     .join(", ");
//   const wait_time = document.querySelector(
//     'input[name="wait_time"]:checked'
//   )?.value;
//   const specialist = Array.from(
//     document.querySelectorAll('input[name="specialist"]:checked')
//   )
//     .map((checkbox) => checkbox.value)
//     .join(", ");
//   const consultation_wait_time = document.querySelector(
//     'input[name="consultation_wait_time"]:checked'
//   )?.value;
//   const easier_access = document.querySelector(
//     'input[name="easier_access"]:checked'
//   )?.value;
//   const education_consult = document.querySelector(
//     'input[name="education_consult"]:checked'
//   )?.value;
//   const education_quality = document.querySelector(
//     'input[name="education_quality"]:checked'
//   )?.value;
//   const dietitian = document.querySelector(
//     'input[name="dietitian"]:checked'
//   )?.value;
//   const nutrition_knowledge = document.querySelector(
//     'input[name="nutrition_knowledge"]:checked'
//   )?.value;
//   const coordinator_help = document.querySelector(
//     'input[name="coordinator_help"]:checked'
//   )?.value;
//   const appointment_difficulty = document.querySelector(
//     'input[name="appointment_difficulty"]:checked'
//   )?.value;
//   const difficulty_details =
//     document.getElementById("difficulty_details").value;
//   const treatment_coherence = document.querySelector(
//     'input[name="treatment_coherence"]:checked'
//   )?.value;
//   const recommendation = document.querySelector(
//     'input[name="recommendation"]:checked'
//   )?.value;

//   // Dodawanie danych do PDF-a
//   doc.text(`W jakim wieku jest Pan/Pani: ${age || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(`Proszę podać płeć: ${gender || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(
//     `Jakie ma Pan/Pani wykształcenie: ${education || "nie podano"}`,
//     10,
//     y
//   );
//   y += 10;
//   doc.text(`Opieka Koordynowana: ${ok_start || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(`Badania diagnostyczne: ${diagnostics || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(`Czas oczekiwania na badania: ${wait_time || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(`Specjaliści: ${specialist || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(
//     `Czas oczekiwania na konsultacje: ${
//       consultation_wait_time || "nie podano"
//     }`,
//     10,
//     y
//   );
//   y += 10;
//   doc.text(`Dostępność konsultacji: ${easier_access || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(`Porada edukacyjna: ${education_consult || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(`Ocena porady: ${education_quality || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(`Dietetyk: ${dietitian || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(
//     `Wiedza na temat żywienia: ${nutrition_knowledge || "nie podano"}`,
//     10,
//     y
//   );
//   y += 10;
//   doc.text(`Pomoc koordynatora: ${coordinator_help || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(
//     `Trudności w umawianiu wizyt: ${appointment_difficulty || "nie podano"}`,
//     10,
//     y
//   );
//   y += 10;
//   doc.text(`Szczegóły trudności: ${difficulty_details || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(`Spójność leczenia: ${treatment_coherence || "nie podano"}`, 10, y);
//   y += 10;
//   doc.text(`Rekomendacja: ${recommendation || "nie podano"}`, 10, y);

//   // Zapisujemy PDF
//   doc.save("ankieta.pdf");
// }
