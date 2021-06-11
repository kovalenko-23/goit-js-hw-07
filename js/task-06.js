// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputEl = document.querySelector('#validation-input');
const dataAtributeValue = Number(inputEl.dataset.length);
console.log(dataAtributeValue);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const isValid = event.currentTarget.value.length === dataAtributeValue;
    if (isValid) {
        setValidClass('valid', 'invalid');
    } else {
        setValidClass('invalid', 'valid');
    }
};

function setValidClass (classToAdd, classToRemove) {
    inputEl.classList.add(classToAdd);
    inputEl.classList.remove(classToRemove);
}










