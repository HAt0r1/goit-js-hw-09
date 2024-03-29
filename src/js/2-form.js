const form = document.querySelector('.feedback-form');
const LOCALE_KEY = 'feedback-form-state';

// const validEmail = element => {
//   return element.includes('@');
// };

const getTrimmedFormData = element => {
  const inputValue = element.email.value.trim();
  const textAreaValue = element.message.value.trim();
  //   if (!validEmail(inputValue)) {
  //     const warning = `<p>Invalid email</p> `;
  //     warning.style.color = 'red';
  //     const emailInput = document.querySelector('.email-input');
  //     emailInput.insertAdjacentElement('beforeend', warning);
  //   }
  return { inputValue, textAreaValue };
};

form.addEventListener('input', () => {
  const data = getTrimmedFormData(form);
  const jsonData = JSON.stringify(data);
  localStorage.setItem(LOCALE_KEY, jsonData);
});

const infoInFields = () => {
  let getObject = localStorage.getItem(LOCALE_KEY);
  getObject = JSON.parse(getObject);
  if (getObject) {
    form.querySelector('.email-input').value = getObject.inputValue;
    form.querySelector('.textarea-input').value = getObject.textAreaValue;
  }
};

infoInFields();

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(getTrimmedFormData(form));
  form.reset();
  localStorage.removeItem(LOCALE_KEY);
});
