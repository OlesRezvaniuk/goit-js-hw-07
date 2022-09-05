import { galleryItems } from "./gallery-items.js";
//preview - src-min
//original - src-max
//description - alt
// Change code below this line

// console.log(galleryItems);

// // Отримуємо доступ до елементів HTML, рендерим галерею картинок, добавляєм.
const galeryList = document.querySelector(".gallery");
// console.log(galeryList);
const listItemsMarkup = createListItemsMarkup(galleryItems);

function createListItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__item" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
              onclick="return false"
              />
        </a>
      </li>`;
    })
    .join("");
}

galeryList.insertAdjacentHTML("beforeend", listItemsMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
