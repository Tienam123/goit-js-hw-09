import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  button: document.querySelector('.feedback-form button'),
};
const { form, input, textarea, button } = refs;
const FORM_DATA_KEY = 'feedback-form-state';
const data = {};

form.addEventListener('input', throttle(onChangeInput, 500));
form.addEventListener('submit', onSubmitForm);

if (localStorage.getItem(FORM_DATA_KEY)) {
  const newData = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
  input.value = newData.email;
  textarea.value = newData.message;
}

function onSubmitForm(e) {
  e.preventDefault();
  const myFormData = new FormData(form);
  console.log(
    { email: myFormData.get('email'), message: myFormData.get('message') });
  form.reset();
  localStorage.clear();
}

function onChangeInput(e) {
  data.email = input.value;
  data.message = textarea.value;
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(data));
}