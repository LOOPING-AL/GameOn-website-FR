import { domElements } from "./domElement.js";
import {
  testCGU,
  testDate,
  testEmail,
  testLocationRadioButton,
  testName,
  testNumberBetweenZeroAndHundred,
} from "./form-validator.js";
import { closeModal } from "./modal.js";

export function reinitialisation() {
  closeModal();
  domElements.formInputFirst.value = "";
  domElements.formInputLast.value = "";
  domElements.formInputEmail.value = "";
  domElements.formInputBirthdate.value = "";
  domElements.formInputQuantity.value = "";
  domElements.formInputLocationRadioButton.forEach((locationRadioButton) => {
    locationRadioButton.checked = false;
  });
  domElements.formInputEvent.checked = false;
}

export function validate() {
  if (testAllInput()) {
    passModalToComfirmation();
  }
  event.preventDefault();
}

export function testAllInput() {
  let allTestIsGood = true;
  if (
    !testName(domElements.formInputFirst, domElements.formErrorMessageFirst)
  ) {
    allTestIsGood = false;
  }
  if (!testName(domElements.formInputLast, domElements.formErrorMessageLast)) {
    allTestIsGood = false;
  }
  if (
    !testEmail(domElements.formInputEmail, domElements.formErrorMessageEmail)
  ) {
    allTestIsGood = false;
  }
  if (
    !testDate(
      domElements.formInputBirthdate,
      domElements.formErrorMessageBirthdate
    )
  ) {
    allTestIsGood = false;
  }
  if (
    !testNumberBetweenZeroAndHundred(
      domElements.formInputQuantity,
      domElements.formErrorMessageQuantity
    )
  ) {
    allTestIsGood = false;
  }
  if (
    !testLocationRadioButton(
      domElements.formInputLocationRadioButton,
      domElements.formErrorMessageLocationRadioButton
    )
  ) {
    allTestIsGood = false;
  }
  if (
    !testCGU(
      domElements.formInputCGU,
      domElements.formErrorTextCGU,
      domElements.formErrorMessageCGU
    )
  ) {
    allTestIsGood = false;
  }
  return allTestIsGood;
}

export function passModalToComfirmation() {
  domElements.modalBody.style.visibility = "hidden";
  domElements.modalConfirmation.style.visibility = "visible";
}
