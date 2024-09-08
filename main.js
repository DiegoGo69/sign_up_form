// Here goes javascript code

// /* TESTING P INSIDE P SELECTION (None works)*/
const pName = document.querySelector("p > p");
pName.textContent = "VALID";

const pName2 = document.querySelector("input + p");
pName2.textContent += "VALID";


// some testing
const email = document.querySelector("#email");
email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
