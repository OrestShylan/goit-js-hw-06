// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const mail = event.currentTarget.elements.email.value;
//     const password = event.currentTarget.elements.password.value;

//     const formData = {
//         mail, password
//     }

//     if (mail === '' || password === '') {
//         alert('Увгаа ! Ви щось пропустили ! ')
//     }

//     console.log(formData);
//     event.currentTarget.reset()
// }

 const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
   event.preventDefault();
  const {
    elements: { email, password }
   } = event.currentTarget;

   if (email.value === "" || password.value === "") {
     return alert('Увгаа ! Ви щось пропустили ! ');
  }

 console.log(`Email: ${email.value}
 Password: ${password.value}`);
  event.currentTarget.reset();
}