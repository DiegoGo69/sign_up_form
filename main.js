const log = console.log;

function setInvalid(e) {
  e.classList.remove('valid');
  e.classList.add('invalid');
}

function setValid(e) {
  e.classList.remove('invalid');
  e.classList.add('valid');
}
// Password lazy validation
const pwd = document.querySelector("#pwd");
const pPwd = document.querySelector("#pwd+ p")
pwd.addEventListener('change', () => validatePwd(pwd, pPwd));

// Confirmation password lazy validation
const pwd2 = document.querySelector("#pwd_confirm");
const pPwd2 = document.querySelector("#pwd_confirm + p")
pwd2.addEventListener('change', () => validatePwd2(pwd2, pPwd2));

// Password agressive validation when already invalid
pwd.addEventListener('input', () => {
  if (pwd.classList.contains('invalid') || pwd.classList.contains('valid')) {
    validatePwd(pwd, pPwd);
  }
});
// Confirmation Password agressive validation when already invalid
pwd2.addEventListener('input', () => {
  if (pwd2.classList.contains('invalid') || pwd2.classList.contains('valid')) {
    validatePwd2(pwd2, pPwd2);
  }
});

// Password agressive validation
function validatePwd(p, pP) {
    // if too short
    if (p.validity.tooShort) {
      pP.textContent = 'Password too short';
      p.setCustomValidity("Password confirm too short");
      setInvalid(p);
    }
    // else if valid
    else {
      pP.textContent = "Password valid :)";
      p.setCustomValidity("");
      setValid(p);
    }
};

// Confirm password agressive validation
function validatePwd2(p, pP) {
     // if too short
    if (p.validity.tooShort) {
      pP.textContent = 'Password too short';
      p.setCustomValidity("Password confirm too short");
      setInvalid(p);
    }
    // if long enough but does not match
    else if (p.value !== pwd.value) {
      pP.textContent = "Passwords do not match";
      p.setCustomValidity("Passwords do not match");
      setInvalid(p);
    }
    // else if valid
    else {
      pP.textContent = "Passwords match";
      p.setCustomValidity("");
      setValid(p);
    }
}


// some testing
const email = document.querySelector("#email");
email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});