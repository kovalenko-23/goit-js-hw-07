// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputEl = document.querySelector('#validation-input');
const dataAtributeValue = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);
// inputEl.addEventListener('click', onInputClear);

function onInputBlur(event) {
    if (event.currentTarget.value.length > dataAtributeValue || event.currentTarget.value.length < dataAtributeValue) {
        inputEl.classList.toggle('invalid');
        inputEl.classList.replace('valid', 'invalid');

    } else {
        inputEl.classList.toggle('valid');
        inputEl.classList.replace('invalid', 'valid');
    }
};










