import { galleryItems } from "./gallery-items.js";
//preview - src-min
//original - src-max
//description - alt
// Change code below this line

// // Отримуємо доступ до елементів HTML, рендерим галерею картинок
const parentBox = document.querySelector(".gallery");

const listItemsMarkup = createListItemsMarkup(galleryItems);

function createListItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    onclick="return false"
                    />
                </a>
            </div>`;
    })
    .join("");
}

parentBox.insertAdjacentHTML("beforeend", listItemsMarkup);
