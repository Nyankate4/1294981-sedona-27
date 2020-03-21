var link = document.querySelector(".popup-button");
var popup = document.querySelector(".dialog");
popup.classList.remove("modal-show");

var form = popup.querySelector("form");
var checkin = popup.querySelector("[name=checkin]");
var checkout = popup.querySelector("[name=checkout]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=children]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
  } else {
    popup.classList.add("modal-show");
  }
  checkin.focus();
});

dialog1.addEventListener("submit", function (evt)  { 
  if (!checkin.value || !checkout.value || !adult.value || !children.value) {
    evt.preventDefault();
    alert("Введите все данные");
  } 
});
