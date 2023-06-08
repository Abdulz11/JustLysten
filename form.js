// form validation
let form = document.querySelector(".sign-up-form");
console.log(form);
let firstName = document.querySelector("#firstname");
console.log(firstName);
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let phone = document.querySelector("#tel");
let radio = document.querySelectorAll(" input[type='radio']");
let radioTxtArea = document.querySelector("#radio-txtarea");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm();
});

function submitForm() {
  if (firstName.value == "" || lastName.value == "") {
    let textArea = document.querySelector("#lastname + small");
    setError(textArea, "Name fields must be filled", "names");
  } else {
    let textArea = document.querySelector("#lastname + small");
    setSuccess("names", textArea);
  }
  if (email.value == "") {
    let textArea = document.querySelector("#email + small");
    setError(textArea, "Please input a valid email", "email");
  } else {
    console.log("succes");
    let textArea = document.querySelector("#email + small");
    setSuccess("email", textArea);
  }
  if (phone.value < 10) {
    let textArea = document.querySelector("#tel + small");
    setError(textArea, "Please input a valid phone number", "phone");
  } else {
    let textArea = document.querySelector("#tel + small");
    setSuccess("phone", textArea);
  }
  if (!radio[0].checked && !radio[1].checked) {
    let textArea = radioTxtArea;
    setError(textArea, "Please select a option", "radio");
  } else {
    let textArea = radioTxtArea;
    setSuccess("radio", textArea);
  }
}

function setError(textArea, msg, type) {
  if (type == "names") {
    lastName.classList.add("error");
    firstName.classList.add("error");
    textArea.style.visibility = "visible";
    textArea.textContent = msg;
  }
  if (type == "email") {
    email.classList.add("error");
    textArea.style.visibility = "visible";
    textArea.textContent = msg;
  }
  if (type == "phone") {
    phone.classList.add("error");
    textArea.style.visibility = "visible";
    textArea.textContent = msg;
  }
  if (type == "radio") {
    textArea.style.visibility = "visible";
    textArea.textContent = msg;
  }
}

function setSuccess(type, textArea) {
  console.log("o");
  if (type == "names") {
    lastName.classList.remove("error");
    firstName.classList.remove("error");
    lastName.classList.add("success");
    firstName.classList.add("success");
    textArea.style.visibility = "hidden";
  }
  if (type == "email") {
    email.classList.remove("error");
    email.classList.add("success");
    textArea.style.visibility = "hidden";
  }
  if (type == "phone") {
    phone.classList.remove("error");
    phone.classList.add("success");
    textArea.style.visibility = "hidden";
  }
  if (type == "radio") {
    textArea.style.visibility = "hidden";
  }
}
