const ulEelment = document.querySelector('ul');
const inputElement = document.querySelector('input');
const btnElement = document.querySelector('button');
inputElement.setAttribute('placeholder', 'Add item to your list');
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


  if(inputValue === ''){
    inputElement.setAttribute('placeholder', 'Cannot be empty!');
  }else {
    ulEelment.appendChild(listItem);
    inputElement.setAttribute('placeholder', 'Add item to list!');
  }
  

  deleteButton.addEventListener('click', () => {
    ulEelment.removeChild(listItem);
  });
}