// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
//  Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().
//  - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//  - Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');
const createdTagEl = document.createElement('img');


const createGallery = (array) => {
    array.forEach(image => {
    galleryEl.insertAdjacentHTML('afterbegin', '<li></li>');
        const galleryItemEl = galleryEl.querySelector('li');
        galleryItemEl.style.listStyle = 'none';
        galleryEl.style.display = 'flex';
        galleryEl.style.flexDirection = 'row';
        galleryEl.style.justifyContent = 'space-around';

    const createdTagEl = document.createElement('img');
    galleryItemEl.append(createdTagEl);
    createdTagEl.setAttribute('src', image.url);
    createdTagEl.setAttribute('alt', image.alt);
    createdTagEl.setAttribute('height', '150');
    createdTagEl.setAttribute('width', '300');
        
    });

    return galleryEl;
}

console.log(createGallery(images));