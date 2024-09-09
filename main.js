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
pwd.addEventListener('change', () => {
  validatePwd(pwd, pPwd);
  if (pwd2.classList.contains('valid')) {
    validatePwd2(pwd2, pPwd2);
  }
});
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

// Password validation
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

// Confirm password validation
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

// Email validation
const email = document.querySelector("#email");
const pEmail = document.querySelector('#email + p');
email.addEventListener("change", () => validateEmail(email, pEmail));
// Email Aggressive validation
email.addEventListener('input', () => {
  if (email.classList.contains('invalid') || email.classList.contains('valid')) {
    validateEmail(email, pEmail);
  }
});
// Email validation function
function validateEmail(email, pEmail) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
    pEmail.textContent = "Email address is not valid";
    setInvalid(email);
  } else {
    email.setCustomValidity("");
    pEmail.textContent = "Email is valid :)";
    setValid(email);
  }
}

// Checkbox validation
const check = document.querySelector('#terms');
check.setCustomValidity("Accept the Terms and Conditions to participate");
check.addEventListener('click', () => {
if (check.checked) {
    check.setCustomValidity("");
} else {
    check.setCustomValidity("Accept the Terms and Conditions to participate");
  }
})


// Age validation
const age = document.querySelector('#age');
const pAge = document.querySelector('#age + p');
age.addEventListener('input', () => {
  if (age.checkValidity()) {
    pAge.textContent = "";
  } else {
    pAge.textContent = "Enter an age between 2 and 100";
  }
})

