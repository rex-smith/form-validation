import "./reset.css";
import "./styles.css";

// Validate each input field on input event
// If valid, green border, green background, valid icon
// If invalid, red border, red background, invalid icon
// Error Message should display below the input field (without moving things)

// Email Validation
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailValidIcon = document.querySelector("#email ~ .valid-icon");
const emailInvalidIcon = document.querySelector("#email ~ .invalid-icon");
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function isValidEmail() {
  if (email.value.length === 0 || emailRegExp.test(email.value) === false) {
    return false;
  } else {
    return true;
  }
}

function showEmailError() {
  if (email.value.length === 0) {
    emailError.innerText = "Email is required";
  } else if (emailRegExp.test(email.value) === false) {
    emailError.innerText = "Please enter a valid email.";
  }
  email.className = "invalid";
  emailValidIcon.style.opacity = "0%";
  emailInvalidIcon.style.opacity = "100%";
}

function showEmailValid() {
  email.className = "valid";
  emailError.innerText = "";
  emailInvalidIcon.style.opacity = "0%";
  emailValidIcon.style.opacity = "100%";
}

function validateEmail() {
  // Pattern & Required
  if (isValidEmail() === false) {
    showEmailError();
  } else {
    showEmailValid();
  }
}

email.addEventListener("input", validateEmail);

// Country Validation
const country = document.getElementById("country");
const countryError = document.getElementById("country-error");
const countryValidIcon = document.querySelector("#country ~ .valid-icon");
const countryInvalidIcon = document.querySelector("#country ~ .invalid-icon");
const countryRegExp = /^[a-zA-Z ]+$/;

function isValidCountry() {
  if (
    country.value.length === 0 ||
    countryRegExp.test(country.value) === false
  ) {
    return false;
  } else {
    return true;
  }
}

function showCountryError() {
  if (country.value.length === 0) {
    countryError.innerText = "Country is required";
  } else if (countryRegExp.test(country.value) === false) {
    countryError.innerText = "Please enter a valid country name.";
  }
  country.className = "invalid";
  countryValidIcon.style.opacity = "0%";
  countryInvalidIcon.style.opacity = "100%";
}

function showCountryValid() {
  country.className = "valid";
  countryError.innerText = "";
  countryInvalidIcon.style.opacity = "0%";
  countryValidIcon.style.opacity = "100%";
}

function validateCountry() {
  if (isValidCountry() === false) {
    showCountryError();
  } else {
    showCountryValid();
  }
}

country.addEventListener("input", validateCountry);

// Zip Code Validation
const zipCode = document.getElementById("zip-code");
const zipCodeError = document.getElementById("zip-code-error");
const zipCodeValidIcon = document.querySelector("#zip-code ~ .valid-icon");
const zipCodeInvalidIcon = document.querySelector("#zip-code ~ .invalid-icon");
const zipCodeRegExp = /^\d{5}$/;

function isValidZipCode() {
  if (
    zipCode.value.length === 0 ||
    zipCodeRegExp.test(zipCode.value) === false
  ) {
    return false;
  } else {
    return true;
  }
}

function showZipCodeError() {
  if (zipCode.value.length === 0) {
    zipCodeError.innerText = "Zip Code is required";
  } else if (zipCodeRegExp.test(zipCode.value) === false) {
    zipCodeError.innerText = "Please enter a valid 5-digit zip code.";
  }
  zipCode.className = "invalid";
  zipCodeValidIcon.style.opacity = "0%";
  zipCodeInvalidIcon.style.opacity = "100%";
}

function showZipCodeValid() {
  zipCode.className = "valid";
  zipCodeError.innerText = "";
  zipCodeInvalidIcon.style.opacity = "0%";
  zipCodeValidIcon.style.opacity = "100%";
}

function validateZipCode() {
  if (isValidZipCode() === false) {
    showZipCodeError();
  } else {
    showZipCodeValid();
  }
}

zipCode.addEventListener("input", validateZipCode);

// Password Validation
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const passwordErrorContainer = document.getElementById("password-error-block");
const passwordValidIcon = document.querySelector("#password ~ .valid-icon");
const passwordInvalidIcon = document.querySelector("#password ~ .invalid-icon");
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const passwordLengthRegExp = /.{8,}/;
const passwordUpperCaseRegExp = /[A-Z]/;
const passwordLowerCaseRegExp = /[a-z]/;
const passwordNumberRegExp = /\d/;
const passwordSpecialCharacterRegExp = /[@$!%*?&]/;

function isValidPassword() {
  if (
    password.value.length === 0 ||
    passwordRegExp.test(password.value) === false
  ) {
    return false;
  } else {
    return true;
  }
}

function buildPasswordError() {
  const passwordErrorElement = document.createElement("p");
  passwordErrorElement.className = "error";
  passwordErrorContainer.appendChild(passwordErrorElement);
  return passwordErrorElement;
}

function clearPasswordErrors() {
  while (passwordErrorContainer.firstChild) {
    passwordErrorContainer.removeChild(passwordErrorContainer.firstChild);
  }
}

function showPasswordError() {
  if (password.value.length === 0) {
    passwordError.innerText = "Password is required";
  } else if (passwordRegExp.test(password.value) === false) {
    if (passwordLengthRegExp.test(password.value) === false) {
      buildPasswordError().innerText =
        "Password must be at least 8 characters long.";
    }
    if (passwordUpperCaseRegExp.test(password.value) === false) {
      buildPasswordError().innerText =
        "Password must contain at least 1 uppercase letter.";
    }
    if (passwordLowerCaseRegExp.test(password.value) === false) {
      buildPasswordError().innerText =
        "Password must contain at least 1 lowercase letter.";
    }
    if (passwordNumberRegExp.test(password.value) === false) {
      buildPasswordError().innerText =
        "Password must contain at least 1 number.";
    }
    if (passwordSpecialCharacterRegExp.test(password.value) === false) {
      buildPasswordError().innerText =
        "Password must contain at least 1 special character.";
    }
  }
  password.className = "invalid";
  passwordValidIcon.style.opacity = "0%";
  passwordInvalidIcon.style.opacity = "100%";
}

function showPasswordValid() {
  password.className = "valid";
  passwordError.innerText = "";
  passwordInvalidIcon.style.opacity = "0%";
  passwordValidIcon.style.opacity = "100%";
}

function validatePassword() {
  clearPasswordErrors();
  if (isValidPassword() === false) {
    showPasswordError();
  } else {
    showPasswordValid();
  }
}

password.addEventListener("input", validatePassword);

// Confirm Password Validation
const confirmPassword = document.getElementById("password-confirm");
const confirmPasswordError = document.getElementById("password-confirm-error");
const confirmPasswordValidIcon = document.querySelector(
  "#password-confirm ~ .valid-icon"
);
const confirmPasswordInvalidIcon = document.querySelector(
  "#password-confirm ~ .invalid-icon"
);

function isValidPasswordConfirmation() {
  if (
    confirmPassword.value.length === 0 ||
    confirmPassword.value !== password.value
  ) {
    return false;
  } else {
    return true;
  }
}

function validateConfirmPassword() {
  if (isValidPasswordConfirmation() === false) {
    showConfirmPasswordError();
  } else {
    showConfirmPasswordValid();
  }
}

function showConfirmPasswordError() {
  if (confirmPassword.value.length === 0) {
    confirmPasswordError.innerText = "Password confirmation is required";
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.innerText = "Passwords do not match";
  }

  confirmPassword.className = "invalid";
  confirmPasswordValidIcon.style.opacity = "0%";
  confirmPasswordInvalidIcon.style.opacity = "100%";
}

function showConfirmPasswordValid() {
  confirmPasswordError.innerText = "";
  confirmPassword.className = "valid";
  confirmPasswordInvalidIcon.style.opacity = "0%";
  confirmPasswordValidIcon.style.opacity = "100%";
}

confirmPassword.addEventListener("input", validateConfirmPassword);

// Form Submit Validation
// Validate entire form before submission
// On Successful submit, respond to user with a high five modal!

const form = document.getElementById("sign-up-form");

function isValidForm() {
  return (
    isValidEmail() &&
    isValidCountry() &&
    isValidZipCode() &&
    isValidPassword() &&
    isValidPasswordConfirmation()
  );
}

function validateForm() {
  validateEmail();
  validateCountry();
  validateZipCode();
  validatePassword();
  validateConfirmPassword();
}

form.addEventListener("submit", (event) => {
  validateForm();
  if (isValidForm() === false) {
    event.preventDefault();
  } else {
    alert("Successful submission!");
  }
});
