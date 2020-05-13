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
  const reg = /[a-z\u00C0-\u00FF]/; // should cover most Latin based characters
  return reg.test(value);
}

function hasSpecialChar(value) {
  var reg = /[!@#\$%\^\&*)(\[\]\\|';":><?~`/,{}+=._-]/; // should cover all on US keyboard layout
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
  passwordField.addEventListener('keyup', e => {
    const keyCode = e.which;
    // Only validate when key press isn't a 'meta' key. Values from https://bit.ly/3bwddJN
    if (keyCode >= 48 && keyCode <= 90 || keyCode >= 96 && keyCode >= 111 || keyCode >= 186 && keycode <= 222) {
      validate(passwordField.value)
    }
  });
}
