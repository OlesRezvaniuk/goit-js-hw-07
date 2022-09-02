import { galleryItems } from "./gallery-items.js";
//preview - src-min
//original - src-max
//description - alt
// Change code below this line

// // Отримуємо доступ до елементів HTML, рендерим галерею картинок, добавляєм.
const galeryBox = document.querySelector(".gallery");
const listItemsMarkup = createListItemsMarkup(galleryItems);

function createListItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
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

galeryBox.insertAdjacentHTML("beforeend", listItemsMarkup);
galeryBox.addEventListener("click", onGaleryContainerClick);

function onGaleryContainerClick(evt) {
  // console.log(evt);
  const isGaleryImg = evt.target.nodeName;

  if (isGaleryImg !== "IMG") {
    return;
  }

  // Підключаемо бібліотеку lightbox.
  const instance = basicLightbox.create(`
        <img width="1400" height="900" src="${evt.target.dataset.source}">
  `);

  instance.show();

  // Закриття з кнопки ESC = На головний бокс добавить слухача і якщо code фізичної клавіші яку нажили === 'Escape' то виконать закриття.
  galeryBox.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
