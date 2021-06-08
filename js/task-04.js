// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// - Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// - Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    counterValue.textContent -= 1;
});

incrementBtn.addEventListener('click', () => {
    counterValue.textContent ++;
});

