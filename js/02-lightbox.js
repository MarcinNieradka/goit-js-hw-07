import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const mainGallery = document.querySelector('.gallery');
// const galleryContainer = [];

galleryItems.forEach(item => {
  const myImage = document.createElement('li');
  myImage.innerHTML = `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`;
  //   galleryContainer.push(myImage);
  mainGallery.append(myImage);
});

// mainGallery.append(...galleryContainer);

// mainGallery.addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
// });

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
