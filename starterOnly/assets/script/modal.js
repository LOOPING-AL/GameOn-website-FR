function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    return;
  }
  x.className = "topnav";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  content.classList.add("show");
  modalbg.classList.add("show");
}

modalbg.addEventListener(
  "click",
  function (event) {
    if (
      !event.target.closest(".content") &&
      !event.target.closest(".modal-btn")
    ) {
      closeModal();
    }
  },
  false
);

closeModalBtn.addEventListener("click", closeModal);
modalConfirmationButton.addEventListener("click", reinitialisation);

function closeModal() {
  content.classList.remove("show");
  modalbg.classList.remove("show");
  setTimeout(() => {
    modalBody.style.visibility = "visible";
    modalConfirmation.style.visibility = "hidden";
  }, 500);
}

function reinitialisation() {
  closeModal();
  formInputFirst.value = "";
  formInputLast.value = "";
  formInputEmail.value = "";
  formInputBirthdate.value = "";
  formInputQuantity.value = "";
  formInputLocationRadioButton.forEach((locationRadioButton) => {
    locationRadioButton.checked = false;
  });
  formInputEvent.checked = false;
}

function validate() {
  event.preventDefault();

  if (testAllInput()) {
    passModalToComfirmation();
  }
}

function testAllInput() {
  let allTestIsGood = true;
  if (!testName(formInputFirst, formErrorMessageFirst)) {
    allTestIsGood = false;
  }
  if (!testName(formInputLast, formErrorMessageLast)) {
    allTestIsGood = false;
  }
  if (!testEmail(formInputEmail, formErrorMessageEmail)) {
    allTestIsGood = false;
  }
  if (!testDate(formInputBirthdate, formErrorMessageBirthdate)) {
    allTestIsGood = false;
  }
  if (
    !testNumberBetweenZeroAndHundred(
      formInputQuantity,
      formErrorMessageQuantity
    )
  ) {
    allTestIsGood = false;
  }
  if (
    !testLocationRadioButton(
      formInputLocationRadioButton,
      formErrorMessageLocationRadioButton
    )
  ) {
    allTestIsGood = false;
  }
  if (!testCGU(formInputCGU, formErrorTextCGU, formErrorMessageCGU)) {
    allTestIsGood = false;
  }
  return allTestIsGood;
}

function passModalToComfirmation() {
  modalBody.style.visibility = "hidden";
  modalConfirmation.style.visibility = "visible";
}

formInputFirst?.addEventListener("focusout", () =>
  testName(formInputFirst, formErrorMessageFirst)
);
formInputLast.addEventListener("focusout", () =>
  testName(formInputLast, formErrorMessageLast)
);
formInputEmail.addEventListener("focusout", () =>
  testEmail(formInputEmail, formErrorMessageEmail)
);
formInputBirthdate.addEventListener("focusout", () =>
  testDate(formInputBirthdate, formErrorMessageBirthdate)
);
formInputQuantity.addEventListener("focusout", () =>
  testNumberBetweenZeroAndHundred(formInputQuantity, formErrorMessageQuantity)
);
formInputLocationRadioButton.forEach((radio) =>
  radio.addEventListener("change", () =>
    testLocationRadioButton(
      formInputLocationRadioButton,
      formErrorMessageLocationRadioButton
    )
  )
);
formInputCGU.addEventListener("change", () =>
  testCGU(formInputCGU, formErrorTextCGU, formErrorMessageCGU)
);
