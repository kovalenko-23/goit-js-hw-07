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
    array.forEach((element,idx) => {
        ingredientsItemEl = document.createElement('li');
        ingredientsItemEl.textContent = element;
        ingridientsEl.append(ingredientsItemEl);
    });
        
    return ingridientsEl;
}

console.log(createItemOfUl(ingredients));


// Считаеться ли вариант ниже валидным?
// const ingredientsItemEl1 = document.createElement('li');
// ingredientsItemEl1.textContent = 'Картошка';

// const ingredientsItemEl2 = document.createElement('li');
// ingredientsItemEl2.textContent = 'Грибы';

// const ingredientsItemEl3 = document.createElement('li');
// ingredientsItemEl3.textContent = 'Чеснок';

// const ingredientsItemEl4 = document.createElement('li');
// ingredientsItemEl4.textContent = 'Помидоры';

// const ingredientsItemEl5 = document.createElement('li');
// ingredientsItemEl5.textContent = 'Зелень';

// const ingredientsItemEl6 = document.createElement('li');
// ingredientsItemEl6.textContent = 'Приправы';

// const ingridientsEl = document.querySelector('#ingredients');

// ingridientsEl.append(ingredientsItemEl1, ingredientsItemEl2, ingredientsItemEl3,
// ingredientsItemEl4, ingredientsItemEl5, ingredientsItemEl6);


// console.log(ingredientsItemEl2);

// console.log(ingridientsEl);


