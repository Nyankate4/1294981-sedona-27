var link = document.querySelector(".popup-button");
var popup = document.querySelector(".dialog");
popup.classList.remove("modal-show");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
  } else {
    popup.classList.add("modal-show");
  }
});
