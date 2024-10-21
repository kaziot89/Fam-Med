document.addEventListener("DOMContentLoaded", function () {
  // Funkcja, która ustawia kliknięcia dla każdego przycisku
  const buttons = document.querySelectorAll('button[id^="go_to_clinic"]');

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonId = this.getAttribute("data-button-id");
      window.location.href = `poradnie.html?autoClick=true&buttonId=${buttonId}`;
    });
  });
});
