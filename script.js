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
  listItem.style.cssText = 'display:flex;align-items:center;';
  span.style.cssText = 'margin-right:auto;font-size:1rem;';
  deleteButton.style.cssText = 'font-size:1rem;padding:5px 10px;color:white;background-color: rgb(129, 15, 15);';
  // deleteButton.addEventListener('mouseover', () => {
  //   if(deleteButton.style.backgroundColor !== 'rgb(100, 0, 0'){
  //     deleteButton.style.backgroundColor = 'rgb(100, 0, 0)';
  //   }else {
  //     deleteButton.style.backgroundColor = 'rgb(129, 15, 15)';
  //   }
  // });

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