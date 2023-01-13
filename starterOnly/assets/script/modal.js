function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    return;
  }
  x.className = "topnav";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
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

// launch close event
closeModalBtn.addEventListener("click", closeModal);
modalConfirmationButton.addEventListener("click", reinitialisation);

// launch close form
function closeModal() {
  content.classList.remove("show");
  modalbg.classList.remove("show");
  setTimeout(() => {
    modalBody.style.visibility = "visible";
    modalConfirmation.style.visibility = "hidden";
  }, 500);
}

//reinitialisation after confirmation
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
  const firstIsGood = testName(formInputFirst, formErrorMessageFirst);
  const lastIsGood = testName(formInputLast, formErrorMessageLast);
  const emailIsGood = testEmail(formInputEmail, formErrorMessageEmail);
  const birtdateIsGood = testDate(
    formInputBirthdate,
    formErrorMessageBirthdate
  );
  const numberIsGood = testNumberBetweenZeroAndHundred(
    formInputQuantity,
    formErrorMessageQuantity
  );
  const locationRadioButtonIsGood = testLocationRadioButton(
    formInputLocationRadioButton,
    formErrorMessageLocationRadioButton
  );
  const touIsGood = testCGU(formInputCGU, formErrorTextCGU);
  if (
    firstIsGood &&
    lastIsGood &&
    emailIsGood &&
    birtdateIsGood &&
    numberIsGood &&
    locationRadioButtonIsGood &&
    touIsGood
  ) {
    passModalToComfirmation();
  }
}

function passModalToComfirmation() {
  modalBody.style.visibility = "hidden";
  modalConfirmation.style.visibility = "visible";
}
