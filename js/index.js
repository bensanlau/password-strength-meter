const passwordField = document.querySelector('.js-form__password');

function validate(value) {
  console.log(value);
}

if (passwordField) {
  passwordField.addEventListener('keyup', (e) => {
    validate(passwordField.value);
  });
}
