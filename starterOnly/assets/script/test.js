function testName(formInput, formErrorMessage) {
  let message = "";

  formInput.setAttribute("aria-invalid", false);
  if (!/(^[A-ZÀ-Þ][A-ZÀ-Þa-z '-]{1,})+/g.test(formInput.value)) {
    message = "Veuillez entrer";
    formInput.setAttribute("aria-invalid", true);
    if (!/^[A-ZÀ-Þ]+/g.test(formInput.value)) {
      message = message + ", une majuscule pour commencer";
    }
    if (!/.{2,}/g.test(formInput.value)) {
      message = message + ", 2 caractères ou plus";
    }
    if (/[^A-ZÀ-Þ-a-z '-]/g.test(formInput.value)) {
      message = message + ", que ces caractères spéciaux ('-)";
    }
    message += " pour ce champ.";
  }
  formErrorMessage.innerHTML = message;
  isEmpty(formInput, formErrorMessage);
  if (formInput.getAttribute("aria-invalid") === "false") {
    return true;
  }
  return false;
}

function testEmail(formInput, formErrorMessage) {
  let message = "";
  formInput.setAttribute("aria-invalid", false);
  if (!/^[\w-\.]+@([\w-+]+\.)+[\w-]{2,4}$/g.test(formInput.value)) {
    formInput.setAttribute("aria-invalid", true);
    message = "L'adresse mail n'est pas correct elle doit suivre `abc@abc.abc`";
  }
  formErrorMessage.innerHTML = message;
  isEmpty(formInput, formErrorMessage);
  if (formInput.getAttribute("aria-invalid") === "false") {
    return true;
  }
  return false;
}

function testDate(formInput, formErrorMessage) {
  let message = "Vous devez entrer votre date de naissance.";
  formInput.setAttribute("aria-invalid", true);
  if (
    /^[0-9]{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])$/g.test(
      formInput.value
    )
  ) {
    if (dayDiff(new Date(), new Date(formInput.value)) < 0) {
      message = "Vous n'êtes pas encore né?";
    } else if (dayDiff(new Date(), new Date(formInput.value)) / 365 <= 13) {
      message =
        "Il faut avoir plus de 13 ans pour participer au Marathon national de jeux vidéos.";
    } else formInput.setAttribute("aria-invalid", false);
  }
  formErrorMessage.innerHTML = message;
  if (formInput.getAttribute("aria-invalid") === "false") {
    return true;
  }
  return false;
}

function dayDiff(d1, d2) {
  return Math.ceil((d1 - d2) / (1000 * 60 * 60 * 24));
}

function testNumberBetweenZeroAndHundred(formInput, formErrorMessage) {
  let message = "Il faut que le nombre soit écrit en chiffre.";
  formInput.setAttribute("aria-invalid", true);
  if (
    !isNaN(formInput.value) ||
    formInput.value <= 0 ||
    formInput.value > 100
  ) {
    if (formInput.value < 0) {
      message = "Le chiffre ne peut pas être négatif.";
    } else if (formInput.value == 0) {
      message = "Le chiffre ne peut pas être égal à zéro.";
    } else if (formInput.value > 100) {
      message = "Ce n'est pas possible, nous n'avons pas autant de tournois.";
    } else {
      formInput.setAttribute("aria-invalid", false);
    }
  }
  formErrorMessage.innerHTML = message;
  isEmpty(formInput, formErrorMessage);
  if (formInput.getAttribute("aria-invalid") === "false") {
    return true;
  }
  return false;
}

function testLocationRadioButton(formInput, formErrorMessage) {
  var locationRadioButtonValid = false;
  var i = 0;
  while (!locationRadioButtonValid && i < formInput.length) {
    if (formInput[i].checked) locationRadioButtonValid = true;
    i++;
  }
  if (locationRadioButtonValid) {
    formErrorMessage.style.opacity = 0;
    formErrorMessage.innerHTML = "";
    return true;
  }
  formErrorMessage.innerHTML = "Vous devez choisir une option.";
  formErrorMessage.style.opacity = 1;
}

function testCGU(formInput, formErrorMessage) {
  if (formInput.checked) {
    formErrorMessage.style.color = "white";
    formErrorMessageCGU.innerHTML = "";
    formInput.setAttribute("aria-invalid", false);
    return true;
  }
  formErrorMessage.style.color = "#e54858";
  formInput.setAttribute("aria-invalid", true);
  formErrorMessageCGU.innerHTML =
    "Vous devez vérifier que vous acceptez les termes et conditions.";
}

function isEmpty(formInput, formErrorMessage) {
  if (formInput.value === "") {
    formInput.setAttribute("aria-invalid", true);
    formErrorMessage.innerHTML = "Le champs est obligatoire.";
  }
}
