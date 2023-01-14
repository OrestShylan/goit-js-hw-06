const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = {
        mail, password
    }

    if (mail === '' || password === '') {
        alert('Увгаа ! Ви щось пропустили ! ')
    }

    console.log(formData);
    event.currentTarget.reset()
}
