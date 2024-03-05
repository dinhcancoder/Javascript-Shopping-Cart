const formEl = document.querySelector(".form");
const formLoginEl = document.querySelector(".form-login");
const formRegisterEl = document.querySelector(".form-register");
const clickRegister = document.querySelector(".form-other");
const clickLogin = document.querySelector(".form-haveAcc");

function showForm() {
  formEl.style.transform = "translateX(0)";
}

function closeForm() {
  formEl.style.transform = "translateX(400px)";
}

clickRegister.addEventListener("click", () => {
  formLoginEl.style.transform = "translateX(-400px)";
  formRegisterEl.style.transform = "translateX(0)";
});

clickLogin.addEventListener("click", () => {
  formLoginEl.style.transform = "translateX(0)";
  formRegisterEl.style.transform = "translateX(400px)";
});

function checkInput(id, regex) {
  let inputEl = document.getElementById(id);
  inputEl.value = inputEl.value.trim();
  if (inputEl.value === "") {
    inputEl.parentElement.parentElement.querySelector(
      ".form-error"
    ).innerHTML = `Vui lòng nhập ${inputEl.getAttribute("action")} !`;
    inputEl.style.borderColor = "red";
  } else if (regex != "" && !regex.test(inputEl.value)) {
    inputEl.parentElement.parentElement.querySelector(
      ".form-error"
    ).innerHTML = `${inputEl.getAttribute("action")} không hợp lệ !`;
    inputEl.style.borderColor = "red";
  } else {
    inputEl.parentElement.parentElement.querySelector(".form-error").innerHTML =
      "";
    inputEl.style.borderColor = "";
  }
}

let regexUser = /^[a-zA-Z]{2,}$/;
function submitLogin() {
  let password = document.getElementById("password");
  checkInput("username", regexUser);
  checkPassword(password);
}

function checkPassword(password, cfPassword) {
  if (password.value === "") {
    password.parentElement.parentElement.querySelector(
      ".form-error"
    ).innerHTML = "Vui lòng nhập password !";
  } else if (password.value.length <= 3) {
    password.parentElement.parentElement.querySelector(
      ".form-error"
    ).innerHTML = "Mật khẩu quá ngắn !";
  } else {
    password.parentElement.parentElement.querySelector(
      ".form-error"
    ).innerHTML = "";
    if (cfPassword.value === "") {
      cfPassword.parentElement.parentElement.querySelector(
        ".form-error"
      ).innerHTML = "Vui lòng nhập mật khẩu !";
    } else if (password.value != cfPassword.value) {
      cfPassword.parentElement.parentElement.querySelector(
        ".form-error"
      ).innerHTML = "Mật khẩu xác nhận không chính xác !";
    } else {
      cfPassword.parentElement.parentElement.querySelector(
        ".form-error"
      ).innerHTML = "";
    }
  }
}

let regexEmail = /^[a-zA-Z][\w.]+@[a-zA-Z]+(\.[a-zA-Z]+){1,3}$/;
function submitRegister() {
  checkInput("ruser", regexUser);
  checkInput("remail", regexEmail);
  let password = document.getElementById("rpassword");
  let cfPassword = document.getElementById("rcfpassword");
  checkPassword(password, cfPassword);
}

// let formInputEl = document.querySelectorAll(".form-btn input");
// formInputEl.forEach((input) => {
//   input.addEventListener("keydown", () => {
//     if (input.value != "" || input.value != null) {
//       input.parentElement.parentElement.querySelector(".form-error").innerHTML =
//         "";
//       input.style.borderColor = "";
//     }
//   });
// });
