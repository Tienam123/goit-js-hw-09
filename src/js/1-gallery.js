// Add imports above this line
import { images } from './gallery-items';
import SimpleLightbox from "simplelightbox";

// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin',createMarkup(images));

//Создание галереи
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// Создание разметки
function createMarkup(array) {
  return array.map(({ original, preview, description }) => {
    return `<li class='gallery__item'>
  <a class='gallery__link' href='${original}'>
    <img
      class='gallery__image'
      src='${preview}'
      alt='${description}'
    />
  </a>
</li>`;
  }).join('');
}