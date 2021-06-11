// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку ---Очистить---, коллекция элементов очищается.

// Создай функцию ---createBoxes(amount)---, которая принимает ---1--- параметр amount-число. Функция создает столько ---div---, 
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
//  - Имеет случайный rgb цвет фона
//  - Размеры самого первого div - 30px на 30px
//  - Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//  - Создай функцию destroyBoxes(), которая очищает div#boxes.

const divBoxesEl = document.querySelector('#controls');
const inputEl = divBoxesEl.querySelector('input');
const renderBtnEl = divBoxesEl.querySelector('[data-action="render"]');
const destroyBtnEl = divBoxesEl.querySelector('[data-action="destroy"]');

inputEl.addEventListener('input', onInputChange);
renderBtnEl.addEventListener('click', onBtnRenderClk);
destroyBtnEl.addEventListener('click', destroyBoxes);

function onInputChange(event) {
    event.currentTarget.value;
}

const resultOfInput = onInputChange();

console.log(resultOfInput);

function onBtnRenderClk(event) {
    event.currentTarget;
}

function destroyBoxes(event) {
    event.currentTarget;
    
}

// function createBoxes(amount) {
//     amount.forEach(element => {
//         console.log(element);
//     });
// }

// console.log(createBoxes(onInputChange()));


// createBoxes(amount)
// 1) по принятой цифре создает соответсвующее количество боксов(div)
// 2) создает боксы (div) через For each (createBoxes - принимает значение введенной цифры)
// 3) в первой иттерации добавить стили width 30 heigth 30 
//    следующие иттерации добавляют к div: width +10 height + 10 (на созданый див.style: width += 10; height: += 10)
// 4) добавить все диви в массив (.push)
// 5) результат вывода функции это массив из дивов 
// 6) потом в divBoxesEl.append(...result)


// функцию destroyBoxes(), которая очищает div#boxes.
// 1)  Получить всех детей(созданные дивы) и уадлить их........ созданый (див.remove();)

// console.log(divBoxesEl);
// console.log(inputEl);
// console.log(renderBtnEl);
// console.log(destroyBtnEl);