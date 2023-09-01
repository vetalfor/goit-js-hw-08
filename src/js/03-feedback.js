import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

function saveDataToLocalStorage() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function fillFormFieldsFromLocalStorage() {
  const storedData = localStorage.getItem(storageKey);
  if (storedData) {
    const formData = JSON.parse(storedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}

const throttledSaveData = throttle(saveDataToLocalStorage, 500);

form.addEventListener('input', () => {
  throttledSaveData();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formData);
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageTextarea.value = '';
});

window.addEventListener('load', fillFormFieldsFromLocalStorage);