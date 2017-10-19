var loginform = document.querySelector(".login-link");
var mapmodal = document.querySelector(".map-link");
var popup = document.querySelector(".modal-login");
var mappopup = document.querySelector(".map");
var close = popup.querySelector(".modal-close");
var mapclose = mappopup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");

loginform.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-open");
	login.focus();
 });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-open");
  });

mapmodal.addEventListener("click", function (evt) {
	evt.preventDefault();
	mappopup.classList.add("modal-open");
 });

mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.remove("modal-open");
  });





