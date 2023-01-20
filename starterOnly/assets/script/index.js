import { domElements } from "./domElement.js";
import {
  testCGU,
  testDate,
  testEmail,
  testLocationRadioButton,
  testName,
  testNumberBetweenZeroAndHundred,
} from "./form-validator.js";
import { reinitialisation, validate } from "./form.js";
import { closeModal, editNav, launchModal } from "./modal.js";

domElements.modalbg.addEventListener(
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
domElements.nav.addEventListener("click", () => editNav());

domElements.closeModalBtn?.addEventListener("click", () => closeModal());

domElements.modalBtn.forEach((btn) =>
  btn.addEventListener("click", () => launchModal())
);

domElements.form.addEventListener("submit", ()=>validate());

domElements.modalConfirmationButton.addEventListener("click", () =>
  reinitialisation()
);

domElements.formInputFirst?.addEventListener("focusout", () =>
  testName(domElements.formInputFirst, domElements.formErrorMessageFirst)
);

domElements.formInputLast.addEventListener("focusout", () =>
  testName(domElements.formInputLast, domElements.formErrorMessageLast)
);

domElements.formInputEmail.addEventListener("focusout", () =>
  testEmail(domElements.formInputEmail, domElements.formErrorMessageEmail)
);

domElements.formInputBirthdate.addEventListener("focusout", () =>
  testDate(
    domElements.formInputBirthdate,
    domElements.formErrorMessageBirthdate
  )
);

domElements.formInputQuantity.addEventListener("focusout", () => {
  testNumberBetweenZeroAndHundred(
    domElements.formInputQuantity,
    domElements.formErrorMessageQuantity
  );
});

domElements.formInputLocationRadioButton.forEach((radio) => {
  radio.addEventListener("change", () =>
    testLocationRadioButton(
      domElements.formInputLocationRadioButton,
      domElements.formErrorMessageLocationRadioButton
    )
  );
});

domElements.formInputCGU.addEventListener("change", () => {
  testCGU(
    domElements.formInputCGU,
    domElements.formErrorTextCGU,
    domElements.formErrorMessageCGU
  );
});
