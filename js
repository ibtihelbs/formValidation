// select password input
const password = document.querySelector("#password");
//select form
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const spanGroup = document.querySelectorAll(".span");
console.log(spanGroup);
function isEmpty(v, i) {
  if (v.value == false) {
    v.classList.toggle("error");
  }
}

function formValidation(e) {
  e.preventDefault();
  //console.log(e.target);
  //console.log(inputs);
  inputs.forEach(function (v, i) {
    isEmpty(v, i);
  });
}

form.addEventListener("submit", formValidation);

/*
console.log(password);
function verifPassword(e) {
  e.preventDefault();
  const val = e.target.value;
  if (val.length < 8) {
    console.log("the password length shouldn't be less then 8");
  }
}
/* add eventListener to password input, call the function verifPassword when the
 user change the input value*/
//password.addEventListener("change", verifPassword);
