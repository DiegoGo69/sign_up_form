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
    pAge.textContent = "Age must be between 2 and 100";
  }
})

const teamSelect = document.querySelector('#fav_team');
const driver1 = document.querySelector('#driver1');
const driver2 = document.querySelector('#driver2');
const labelDriver1 = document.querySelector('label[for="driver1"]');
const labelDriver2 = document.querySelector('label[for="driver2"]');

teamSelect.addEventListener('change', event => {
  driver2.removeAttribute('disabled');
  driver2.checked = false;
  switch (teamSelect.value) {
    case 'redbull':
      driver1.value = "verstappen";
      labelDriver1.textContent = "Verstappen";
      driver2.value = "checo";
      labelDriver2.textContent = "Checo";
      break;

    case 'mclaren':
      driver1.value = "piastri";
      labelDriver1.textContent = "Piastri";
      driver2.value = "overrated";
      driver2.setAttribute('disabled', true);
      labelDriver2.textContent = "Norris";
      break;

    case 'mercedes':
      driver1.value = "hamilton";
      labelDriver1.textContent = "Hamilton";
      driver2.value = "russel";
      labelDriver2.textContent = "Russel";
      break;

    case 'ferrari':
      driver1.value = "leclerc";
      labelDriver1.textContent = "Leclerc";
      driver2.value = "sainz";
      labelDriver2.textContent = "Sainz";
      break;

    case 'aston':
      driver1.value = "alonso";
      labelDriver1.textContent = "Alonso";
      driver2.value = "stroll";
      labelDriver2.textContent = "Stroll";
      break;

    case 'alpine':
      driver1.value = "gasly";
      labelDriver1.textContent = "French 1";
      driver2.value = "ocon";
      labelDriver2.textContent = "French 2";
      break;

    case 'williams':
      driver1.value = "colapinto";
      labelDriver1.textContent = "Colapinto";
      driver2.value = "albon";
      labelDriver2.textContent = "Albon";
      break;

    case 'haas':
      driver1.value = "hulkenber";
      labelDriver1.textContent = "HuLKenberGG";
      driver2.value = "magnussen";
      labelDriver2.textContent = "Magnussen";
      break;

    case 'sauber':
      driver1.value = "bottas";
      labelDriver1.textContent = "Bottas";
      driver2.value = "zhou";
      labelDriver2.textContent = "Zhou";
      break;

    case 'rb':
      driver1.value = "tsunoda";
      labelDriver1.textContent = "Tsunoda";
      driver2.value = "washed";
      labelDriver2.textContent = "Washed";
      break;
  }
})

