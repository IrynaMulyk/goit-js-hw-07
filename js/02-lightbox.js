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
      alt="${item.description}"
    />
  </a></li>`,
  ""
);

gallery.insertAdjacentHTML("beforeend", galleryList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
