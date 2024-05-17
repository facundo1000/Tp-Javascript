const images = ['./img/imagen.jpg', './img/imagen2.jpg', './img/imagen3.jpg'];
let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

function showPrevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    galleryImage.src = images[currentIndex];
}

function showNextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    galleryImage.src = images[currentIndex];
}
