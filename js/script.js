var passwordInput = document.getElementById("password");
var passwordResult = document.getElementById("result");

passwordInput.oninput = function() {
  passwordResult.textContent = passwordInput.value;
};
