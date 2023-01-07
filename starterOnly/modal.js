function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const content = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const inputFirst = document.querySelector("#first");
const spanFirst = document.querySelector("#errfirst");
const inputLast = document.querySelector("#last");
const spanLast = document.querySelector("#errlast");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  content.classList.add("show");
  modalbg.classList.add("show");
}

// launch close event
closeModalBtn.addEventListener("click", closeModal);

// launch close form
function closeModal() {
  content.classList.remove("show");
  modalbg.classList.remove("show");
}

function testFirstOrLast(input, span) {
  let message = "Merci de mettre";

  if (/([A-ZÀ-Þ][-a-z ']{1,})+/g.test(input.value)) {
    input.setAttribute("aria-invalid", false);
  } else {
    input.setAttribute("aria-invalid", true);
    if (!/([A-ZÀ-Þa-z]{2,})+/g.test(input.value)) {
      message = message + " plus de 2 lettres";
    }
    if (!/[A-ZÀ-Þ][-a-z ']+/g.test(input.value)) {
      message = message + " une majuscule pour commencer";
    }
    if (!/[A-ZÀ-Þ-a-z ']/g.test(input.value)) {
      message =
        message +
        " que des lettres, des espaces et ces caractères spéciaux ('-)";
    }
    span.innerHTML = message;
  }
}

function validate() {
  event.preventDefault();
  testFirstOrLast(inputFirst, spanFirst);
  testFirstOrLast(inputLast, spanLast);
}
