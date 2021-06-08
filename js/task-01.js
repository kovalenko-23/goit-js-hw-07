// Напиши скрипт, который выполнит следующие операции:

// - Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item.Получится 'В списке 3 категории.'.

const categoriesEl = document.querySelector('#categories');
const allItemsEl = categoriesEl.children;
const message = `В списке ${allItemsEl.length} категории`;
console.log(message);

// - Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const arrayItems = [...allItemsEl];

const getTitleAndAmountEl = (array) => {
    let titleAndAmount = [];
    let stringOfElements;

    array.forEach(item => {
        const titleEl = item.querySelector('h2').textContent;
        const amountOfEl = item.querySelectorAll('li').length;
        titleAndAmount.push(`Категория: ${titleEl}, Количество элементов: ${amountOfEl}`);
        stringOfElements = titleAndAmount.join('; ');
    });

    return stringOfElements;
}

console.log(getTitleAndAmountEl(arrayItems));

