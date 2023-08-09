import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";

const refs = {
  galleryList: document.querySelector(".gallery"),
};

function renderMarkup(items) {
  const markup = items.map(createMarkup).join("");
  refs.galleryList.innerHTML = markup;
}

function createMarkup({ preview, description, original }) {
  return `<li class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
}

renderMarkup(galleryItems);

refs.galleryList.addEventListener("click", (e) => {
  e.preventDefault();
  basicLightbox
    .create(`<img src=${e.target.dataset.source}>`)
    .show((ist) => document.addEventListener("keydown", isEscape));
});
function isEscape(event) {
  if (event.key !== "Escape") return;
  hideModal();
  document.removeEventListener("keydown", isEscape);
}

function hideModal() {
  document.querySelector(".basicLightbox").remove();
  // ну не зміг я додуматися як закрити не видаляючи,
  // бібліотека не дає закрити норм на Escape(так то міг але тоді слухач keydown лишався бо аннонімна функція виходить)
}
