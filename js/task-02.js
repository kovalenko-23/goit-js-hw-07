// Напиши скрипт, который для каждого элемента массива ingredients создаст 
// отдельный li, после чего вставит все li за одну операцию в список
// ul.ingredients. Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsEl = document.querySelector('#ingredients');

const createItemOfUl = (array) => {
  let ingredientsItemEl;
  let arrayOfElements = [];
    array.forEach((element,idx) => {
      ingredientsItemEl = document.createElement('li');
      ingredientsItemEl.textContent = element;
      arrayOfElements.push(ingredientsItemEl);
    });
        
    return arrayOfElements;
}

let result = createItemOfUl(ingredients);
ingridientsEl.append(...result);

