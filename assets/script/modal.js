import { domElements } from "./domElement.js";

export function editNav() {
  if (domElements.topNav.className === "topnav") {
    domElements.topNav.className += " responsive";
    return;
  }
  domElements.className = "topnav";
}

export function launchModal() {
  domElements.modalbg.classList.add("display");
  setTimeout(() => {
    domElements.content.classList.add("show");
    domElements.modalbg.classList.add("show");
  }, 100);
}

export function closeModal() {
  domElements.content.classList.remove("show");
  domElements.modalbg.classList.remove("show");
  setTimeout(() => {
    domElements.modalBody.style.visibility = "visible";
    domElements.modalConfirmation.style.visibility = "hidden";
    domElements.modalbg.classList.remove("display");
  }, 500);
}
