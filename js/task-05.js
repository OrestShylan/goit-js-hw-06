const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const inputValue = () => {
    spanEl.textContent = "Anonymous";

    if (inputEl.value !== '') {
        spanEl.textContent = inputEl.value;
    }
}

inputEl.addEventListener('input', inputValue);


