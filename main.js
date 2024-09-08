const log = console.log;

// Password lazy validation
const pwd = document.querySelector("#pwd");
const pPwd = document.querySelector("#pwd+ p")
pwd.addEventListener('change', event => {
  // if too short
  if (pwd.validity.tooShort) {
    pPwd.textContent = 'Password too short';
    pwd.setCustomValidity("Password confirm too short");
    pwd.classList.add('invalid');
  }
  // else if valid
  else {
    pPwd.textContent = "Password valid :)";
    pwd.setCustomValidity("");
    pwd.classList.remove('invalid');
  } 
})

// Confirm password lazy validation
const pwd2 = document.querySelector("#pwd_confirm");
const pPwd2 = document.querySelector("#pwd_confirm + p")
pwd2.addEventListener('change', event => {
  // if too short
  if (pwd2.validity.tooShort) {
    pPwd2.textContent = 'Password too short';
    pwd2.setCustomValidity("Password confirm too short");
    pwd2.classList.add('invalid');
  }
  // if long enough but does not match
  else if (pwd2.value !== pwd.value) {
    pPwd2.textContent = "Passwords do not match";
    pwd2.setCustomValidity("Passwords do not match");
    pwd2.classList.add('invalid');
  }
  // else if valid
  else {
    pPwd2.textContent = "Passwords match";
    pwd2.setCustomValidity("");
    pwd2.classList.remove('invalid');
  } 
})

// Password agressive validation when already invalid
pwd.addEventListener('input', event => {
  if (pwd.classList.contains('invalid')) {
  // if too short
  if (pwd.validity.tooShort) {
    pPwd.textContent = 'Password too short';
    pwd.setCustomValidity("Password confirm too short");
  }
  // else if valid
  else {
    pPwd.textContent = "Password valid :)";
    pwd.setCustomValidity("");
    pwd.classList.remove('invalid')
  }};
})

// Confirm Password agressive validation when already invalid
pwd2.addEventListener('input', event => {
  if (pwd2.classList.contains('invalid')) {
        // if too short
    if (pwd2.validity.tooShort) {
      pPwd2.textContent = 'Password too short';
      pwd2.setCustomValidity("Password confirm too short");
      pwd2.classList.add('invalid');
    }
    // if long enough but does not match
    else if (pwd2.value !== pwd.value) {
      pPwd2.textContent = "Passwords do not match";
      pwd2.setCustomValidity("Passwords do not match");
      pwd2.classList.add('invalid');
    }
    // else if valid
    else {
      pPwd2.textContent = "Passwords match";
      pwd2.setCustomValidity("");
      pwd2.classList.remove('invalid');
    }};
})


// some testing
const email = document.querySelector("#email");
email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
