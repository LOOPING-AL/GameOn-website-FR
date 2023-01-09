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
const inputEmail = document.querySelector("#email");
const spanEmail = document.querySelector("#erremail");
const inputBirthdate = document.querySelector("#birthdate");
const spanBirthdate = document.querySelector("#errbirthdate");
const inputQuantity = document.querySelector("#quantity");
const spanQuantity = document.querySelector("#errquantity");
const inputLocation = document.getElementsByName("location");
const spanLocation = document.querySelector("#errlocation");
const inputTOU = document.querySelector("#checkbox1");
const spanTOU = document.querySelector("#spanTOU");

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
function isEmpty(input, span) {
  if (input.value === "") {
    input.setAttribute("aria-invalid", true);
    span.innerHTML = "Le champs est obligatoire.";
  }
}

function testFirstOrLastName(input, span) {
  let message = "";

  if (/^([A-ZÀ-Þ][-a-z '-]{1,})+/g.test(input.value)) {
    input.setAttribute("aria-invalid", false);
  } else {
    message = "Merci de mettre";
    input.setAttribute("aria-invalid", true);
    if (!/^[A-ZÀ-Þ]+/g.test(input.value)) {
      message = message + ", une majuscule pour commencer";
    }
    if (!/.{2,}/g.test(input.value)) {
      message = message + ", plus de 2 caractères";
    }
    if (/[^A-ZÀ-Þ-a-z '-]/g.test(input.value)) {
      message = message + ", que ces caractères spéciaux ('-)";
    }
    message += ".";
  }
  span.innerHTML = message;
  isEmpty(input, span);
}

function testEmail(input, span) {
  let message = "";
  input.setAttribute("aria-invalid", true);
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.value)) {
    message = "L'adresse mail n'est pas correct elle doit suivre `abc@abc.abc`";
  } else {
    input.setAttribute("aria-invalid", false);
  }
  span.innerHTML = message;
  isEmpty(input, span);
}

function testDate(input, span) {
  let message = "";
  input.setAttribute("aria-invalid", true);
  if (
    /^[0-9]{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])$/g.test(
      input.value
    )
  ) {
    if (dayDiff(new Date(), new Date(input.value)) < 0) {
      message = "Vous n'êtes pas encore né?";
    } else if (dayDiff(new Date(), new Date(input.value)) / 365 <= 13) {
      message =
        "Il faut avoir plus de 13 ans pour participer au Marathon national de jeux vidéos.";
    } else input.setAttribute("aria-invalid", false);
  } else {
    message = "Le format de date n'est pas correct.";
  }
  span.innerHTML = message;
}

function dayDiff(d1, d2) {
  return Math.ceil((d1 - d2) / (1000 * 60 * 60 * 24));
}

function testNumberBetweenZeroAndHundred(input, span) {
  let message = "";
  input.setAttribute("aria-invalid", true);
  if (/^-?[0-9]+$/g.test(input.value)) {
    if (/^-/g.test(input.value)) {
      message = "Le chiffre ne peut pas être négatif.";
    } else if (input.value > 100)
      message = "Ce n'est pas possible, nous n'avons pas autant de tournois.";
    else {
      input.setAttribute("aria-invalid", false);
    }
  } else {
    message = "Il faut que le nombre soit écrit en chiffre.";
  }
  span.innerHTML = message;
  isEmpty(input, span);
}

function testLocation(input, span) {
  var locationValid = false;
  var i = 0;
  while (!locationValid && i < input.length) {
    if (input[i].checked) locationValid = true;
    i++;
  }
  if (locationValid) {
    span.style.opacity = 0;
    span.innerHTML = "";
  } else {
    span.innerHTML = "Le champs est obligatoire.";
    span.style.opacity = 1;
  }
}

function testTOU(input, span) {
  if (!input.checked) span.style.color = "#e54858";
  else span.style.color = "white";
}

function validate() {
  event.preventDefault();
  testFirstOrLastName(inputFirst, spanFirst);
  testFirstOrLastName(inputLast, spanLast);
  testEmail(inputEmail, spanEmail);
  testDate(inputBirthdate, spanBirthdate);
  testNumberBetweenZeroAndHundred(inputQuantity, spanQuantity);
  testLocation(inputLocation, spanLocation);
  testTOU(inputTOU, spanTOU);
}
