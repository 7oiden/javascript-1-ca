const form = document.querySelector("form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const nameSuccess = document.querySelector("#name-success");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const success = document.querySelector(".success");
const validate = document.querySelector(".validate");
const button = document.querySelector("button");

function checkInput() {
  if (
    checkLength(name.value, 0) &&
    checkLength(subject.value, 9) &&
    checkLength(address.value, 24) &&
    validateEmail(email.value)
  ) {
    validate.innerHTML = `<p id="validate">Good to go!</p>`;
  } else {
    validate.innerHTML = "";
  }
}

name.addEventListener("keyup", checkInput);
subject.addEventListener("keyup", checkInput);
address.addEventListener("keyup", checkInput);
email.addEventListener("keyup", checkInput);

function validateForm(event) {
  event.preventDefault();

  if (checkLength(name.value, 0)) {
    nameError.style.visibility = "hidden";
  } else {
    nameError.style.visibility = "visible";
  }

  if (checkLength(subject.value, 9)) {
    subjectError.style.visibility = "hidden";
  } else {
    subjectError.style.visibility = "visible";
  }

  if (checkLength(address.value, 24)) {
    addressError.style.visibility = "hidden";
  } else {
    addressError.style.visibility = "visible";
  }

  if (validateEmail(email.value)) {
    emailError.style.visibility = "hidden";
  } else {
    emailError.style.visibility = "visible";
  }

  if (
    checkLength(name.value, 0) &&
    checkLength(subject.value, 9) &&
    checkLength(address.value, 24) &&
    validateEmail(email.value)
  ) {
    success.innerHTML = `<p id="success">Form was submitted successfully</p>`;
    validate.innerHTML = "";
    form.reset();
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
