// Importa las funciones desde el módulo imgViewer.js
import { openFulImg, closeImg } from '../aggregator.js';

// Obtén referencias a los elementos del DOM
const fulImgBox = document.getElementById("fulImgBox");
const imageGallery = document.querySelector(".img-gallery");

// Agrega un controlador de eventos para abrir una imagen en pantalla completa
imageGallery.addEventListener('click', (event) => {
  if (event.target.tagName === "IMG") {
    openFulImg(event.target.src);
  }
});

// Agrega un controlador de eventos para cerrar la imagen en pantalla completa
fulImgBox.addEventListener('click', () => {
  closeImg();
});

