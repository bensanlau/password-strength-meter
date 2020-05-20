const CONFIG = {
  MIN_CHAR: 8,
  CONDITION_MINIMUM_CLASS: 'strengthMeter__minimum',
  CONDITION_SPECIAL_CLASS: 'strengthMeter__special',
  CONDITION_NUMERIC_CLASS: 'strengthMeter__numeric',
  CONDITION_UPPERCASE_CLASS: 'strengthMeter__uppercase',
  CONDITION_LOWERCASE_CLASS: 'strengthMeter__lowercase',
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
  /* Should cover most Latin and Nordic characters. 
  Unfortunately, does not cover Slavic chars. */
  const reg = /[a-z\u00C0-\u00FF]/;
  return reg.test(value);
}

function hasSpecialChar(value) {
  var reg = /[!@#\$%\^\&*)(\[\]\\|';":><?~`/,{}+=._-]/; // should cover all on US keyboard layout
  return reg.test(value);
}

function validate(value) {
  if (hasNum(value)) {
    document.querySelector(`.${CONFIG.CONDITION_NUMERIC_CLASS}`).classList.add('valid');
  }
  if (hasMinChar(value)) {
    document.querySelector(`.${CONFIG.CONDITION_MINIMUM_CLASS}`).classList.add('valid');
  }
  if (hasUppercase(value)) {
    document.querySelector(`.${CONFIG.CONDITION_UPPERCASE_CLASS}`).classList.add('valid');
  }
  if (hasLowercase(value)) {
    document.querySelector(`.${CONFIG.CONDITION_LOWERCASE_CLASS}`).classList.add('valid');
  }
  if (hasSpecialChar(value)) {
    document.querySelector(`.${CONFIG.CONDITION_SPECIAL_CLASS}`).classList.add('valid');
  }
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
