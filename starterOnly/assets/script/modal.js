import { domElements } from "./domElement.js";

export function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    return;
  }
  x.className = "topnav";
}

export function launchModal() {
  domElements.content.classList.add("show");
  domElements.modalbg.classList.add("show");
}

export function closeModal() {
  domElements.content.classList.remove("show");
  domElements.modalbg.classList.remove("show");
  setTimeout(() => {
    domElements.modalBody.style.visibility = "visible";
    domElements.modalConfirmation.style.visibility = "hidden";
  }, 500);
}
