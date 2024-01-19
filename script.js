const ulEelment = document.querySelector('ul');
const inputElement = document.querySelector('input');
const btnElement = document.querySelector('button');

function btnClicked() {
  let inputValue = inputElement.value;
  inputValue = '';

  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  listItem.appendChild(span);
  listItem.appendChild(button);

  span.textContent = inputValue;
  button.textContent = 'Delete';

  ulEelment.appendChild(listItem);

  button.addEventListener('click', )
}