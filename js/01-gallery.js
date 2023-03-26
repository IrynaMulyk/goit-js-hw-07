import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryList = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<li class="gallery__item"><a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a></li>`,
  ""
);

gallery.insertAdjacentHTML("beforeend", galleryList);

function showModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    { onClose: () => gallery.removeEventListener("keydown", closeModal) }
  );
  instance.show();

  gallery.addEventListener("keydown", closeModal);
  function closeModal(event) {
    if (event.keyCode === 27) {
      instance.close();
    }
  }
}

gallery.addEventListener("click", showModal);
