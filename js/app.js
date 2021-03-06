let popup = document.querySelector(".modal-feedback");
let shop = document.querySelector(".shop-button");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".button-close");

shop.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  overlay.classList.add("overlay-show");
  if (nameStorage && emailStorage) {
    name.value = nameStorage;
    email.value = emailStorage;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
  overlay.classList.remove("overlay-show");
});
