import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
let lightbox = null;

const renderImage = (arr, container) => {
    const marcup = arr.map((item) => `<a class="gallery-link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`).join('');

    container.innerHTML = marcup;
}

renderImage(galleryItems, galleryList);


galleryList.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
            captions: true,
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250
        });
    }

    lightbox.open();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox) {
        lightbox.close();
    }
});