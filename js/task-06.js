const input = document.querySelector('input');

const correctLengthInput = Number(input.dataset.length);

input.addEventListener('blur', onInputValue);

function onInputValue(event) {
  
  if (event.currentTarget.value.length === correctLengthInput) {
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
  }

  if (event.currentTarget.value.length !== correctLengthInput) {
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
  }
 };