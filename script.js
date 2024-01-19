const ulEelment = document.querySelector('ul');
const inputElement = document.querySelector('input');
const btnElement = document.querySelector('button');

btnElement.onclick = btnClicked;

function btnClicked() {
  let inputValue = inputElement.value;
  inputElement.value = '';

  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  listItem.appendChild(span);
  listItem.appendChild(deleteButton);

  span.textContent = inputValue;
  console.log(span.innerText);
  deleteButton.textContent = 'Delete';


  ulEelment.appendChild(listItem);

  deleteButton.addEventListener('click', () => {
    ulEelment.removeChild(listItem);
  });
}