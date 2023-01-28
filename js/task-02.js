const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients');
const liEl = document.createElement('li');

for (const ingridient of ingredients){
  const liEl = document.createElement('li');
  liEl.classList.add('item'); 
  liEl.textContent = ingridient;
  ulEl.appendChild(liEl); 
  

}
