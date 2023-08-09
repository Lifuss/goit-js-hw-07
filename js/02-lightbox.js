import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryList: document.querySelector(".gallery"),
};

function renderMarkup(items) {
  const markup = items.map(createMarkup).join("");
  refs.galleryList.innerHTML = markup;
}

function createMarkup({ preview, description, original }) {
  return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img class="gallery__image" src=${preview} alt='${description}' />
  </a>`;
}

renderMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
