// Напиши скрипт, который реагирует на изменение значения input#font-size-control(событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeControlEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
spanText.style.fontSize = '';



fontSizeControlEl.addEventListener('input', () => {
    let sizeValue = fontSizeControlEl.value;
    spanText.style.fontSize = `${sizeValue}px`;
});




