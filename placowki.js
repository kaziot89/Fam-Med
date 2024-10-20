let acc = document.getElementsByClassName("acc");
let acc2 = document.getElementsByClassName("acc2");
let i;

// Logika dla acc i panel
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

// Logika dla acc2 i panel2
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
