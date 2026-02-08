window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname !== "/") {
    history.replaceState(null, "", "/");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('button[id^="go_to_clinic"]');

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonId = this.getAttribute("data-button-id");
      window.location.href = `poradnie.html?autoClick=true&buttonId=${buttonId}`;
    });
  });
});
