import { galleryItems } from "./gallery-items.js";
//preview - src-min
//original - src-max
//description - alt
// Change code below this line

// // Отримуємо доступ до елементів HTML, рендерим галерею картинок
const galeryBox = document.querySelector(".gallery");
const listItemsMarkup = createListItemsMarkup(galleryItems);
galeryBox.insertAdjacentHTML("beforeend", listItemsMarkup);

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

galeryBox.addEventListener("click", onGaleryContainerClick);

function onGaleryContainerClick(evt) {
  // console.log(evt);
  const isGaleryImg = evt.target.nodeName;

  if (isGaleryImg !== "IMG") {
    return;
  }
  console.log(evt);
  // Вмонтовуємо бібліотеку lightbox, підключаємо на батьківський контент, в шаблоному рядкі вписуємо необхідну змінну (картинку)
  document.querySelector(".gallery").onclick = () => {
    basicLightbox
      .create(
        `
      <img width="1400" height="900" src="${evt.target.dataset.source}">
      `
      )
      .show();
  };
}
