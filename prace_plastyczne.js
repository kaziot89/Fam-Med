const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const images = document.querySelectorAll(".gallery img");
const close = document.querySelector(".close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
images.forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("show");
    document.body.classList.add("no-scroll");
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.classList.remove("no-scroll");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
});
