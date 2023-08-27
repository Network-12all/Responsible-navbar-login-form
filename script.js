let showPopupBtn = document.querySelector(".login-btn");
let formPopup = document.querySelector(".form-popup");
let blurScreen = document.querySelector(".blur-bg-overlay");
let closeBtn = document.querySelector(".close-btn");
let dropDownMenu = document.querySelector(".links");
let menu = document.querySelector(".menu-btn");
let iBtn = document.querySelector("i");

menu.addEventListener("click", () => {
  dropDownMenu.style.left = "0";
});

showPopupBtn.addEventListener("click", () => {
  formPopup.style.opacity = 1;
  formPopup.style.pointerEvents = "auto";
  blurScreen.style.opacity = 1;
  blurScreen.style.pointerEvents = "auto";
});

iBtn.addEventListener("click",() =>{
  formPopup.style.opacity = 0;
  formPopup.style.pointerEvents = "none";
  blurScreen.style.opacity = 0;
  blurScreen.style.pointerEvents = "none";
});

closeBtn.addEventListener("click", () => {
  dropDownMenu.style.left = "-100%"; // Close dropdown menu as well
});

let loginFormBox = document.querySelector(".login");
let loginLink = document.querySelector(".login-link");

let signupFormBox = document.querySelector(".signup");
let signupLink = document.querySelector(".signup-link");

loginLink.addEventListener("click", () => {
  signupFormBox.style.display = "flex";
  loginFormBox.style.display = "none";
});

signupLink.addEventListener("click", () => {
  loginFormBox.style.display = "flex";
  signupFormBox.style.display = "none";
});
