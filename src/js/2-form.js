const formData = {
  email: '',
  message: '',
}

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const formFieldsData = () => {
  const localStorageData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (localStorageData === null) {
    return;
  }

  formData.email = localStorageData.email;
  formData.message = localStorageData.message;

  for (const key in formData) {
    if (formData.hasOwnProperty(key)) {
      form.elements[key].value = localStorageData[key];
    }
  }
}

formFieldsData();

const onFormInput = event => {
  event.preventDefault();

  formData.email = `${email.value.trim()}`;
  formData.message = `${message.value.trim()}`;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', onFormInput);

const onFormSubmit = event => {
  event.preventDefault();
  
  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  }  
}

form.addEventListener('submit', onFormSubmit)