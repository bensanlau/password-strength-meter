const CONFIG = {
  MIN_CHAR: 8,
};

const passwordField = document.querySelector('.js-form__password');

function hasNum(value) {
  const reg = /\d+/;
  return reg.test(value);
}

function hasMinChar(value) {
  return value.length >= CONFIG.MIN_CHAR;
}

function hasUppercase(value) {
  const reg = /[A-Z]/;
  return reg.test(value);
}

function hasLowercase(value) {
  const reg = /[a-z\u00C0-\u00FF]*/; // should cover most Latin based characters
  return reg.test(value);
}

function hasSpecialChar(value) {
  var reg = /[!@#\$%\^\&*\)\(\[\]\\\|\'\;\"\:\>\<\?\~\`+=._-]+/g;
  return reg.test(value);
}

function validate(value) {
  console.log('hasNum: ' + hasNum(value));
  console.log('hasMinChar: ' + hasMinChar(value));
  console.log('hasUppercase: ' + hasUppercase(value));
  console.log('hasLowercase: ' + hasLowercase(value));
  console.log('hasSpecialChar: ' + hasSpecialChar(value));
}

if (passwordField) {
  passwordField.addEventListener('keyup', e => validate(passwordField.value));
}
