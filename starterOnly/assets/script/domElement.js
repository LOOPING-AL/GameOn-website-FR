export const domElements = {
  modalbg: document.querySelector(".bground"),
  content: document.querySelector(".content"),
  nav: document.querySelector("#nav"),
  modalBody: document.querySelector(".modal-body"),
  modalConfirmation: document.querySelector(".modal-confirmation"),
  modalConfirmationButton: document.querySelector(
    "#modal-confirmation__button"
  ),
  modalBtn: document.querySelectorAll(".modal-btn"),
  closeModalBtn: document.querySelector(".close"),
  formData: document.querySelectorAll(".formData"),
  form: document.getElementById("formAll"),
  formInputFirst: document.querySelector("#first"),
  formErrorMessageFirst: document.querySelector("#errfirst"),
  formInputLast: document.querySelector("#last"),
  formErrorMessageLast: document.querySelector("#errlast"),
  formInputEmail: document.querySelector("#email"),
  formErrorMessageEmail: document.querySelector("#erremail"),
  formInputBirthdate: document.querySelector("#birthdate"),
  formErrorMessageBirthdate: document.querySelector("#errbirthdate"),
  formInputQuantity: document.querySelector("#quantity"),
  formErrorMessageQuantity: document.querySelector("#errquantity"),
  formInputLocationRadioButton: document.getElementsByName(
    "locationRadioButton"
  ),
  formErrorMessageLocationRadioButton: document.querySelector(
    "#errlocationRadioButton"
  ),
  formInputCGU: document.querySelector("#checkbox1"),
  formErrorTextCGU: document.querySelector("#formErrorTextCGU"),
  formErrorMessageCGU: document.querySelector("#formErrorMessageCGU"),
  formInputEvent: document.querySelector("#checkbox2"),
};
