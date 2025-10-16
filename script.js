// Данные для галерей (3 тарифа по 3 фото)
const galleries = [
    ['tariff1-1.jpg', 'tariff1-2.jpg', 'tariff1-3.jpg'],
    ['tariff2-1.jpg', 'tariff2-2.jpg', 'tariff2-3.jpg'],
    ['tariff3-1.jpg', 'tariff3-2.jpg', 'tariff3-3.jpg']
];

let currentSlides = [0, 0, 0];

// Переключение слайдов в галерее
function changeSlide(galleryIndex, direction) {
    const gallery = galleries[galleryIndex];
    currentSlides[galleryIndex] += direction;
    
    if (currentSlides[galleryIndex] < 0) {
        currentSlides[galleryIndex] = gallery.length - 1;
    }
    if (currentSlides[galleryIndex] >= gallery.length) {
        currentSlides[galleryIndex] = 0;
    }
    
    updateGallery(galleryIndex);
}

function setSlide(galleryIndex, slideIndex) {
    currentSlides[galleryIndex] = slideIndex;
    updateGallery(galleryIndex);
}

function updateGallery(galleryIndex) {
    const img = document.getElementById(`gallery-${galleryIndex}`);
    const dots = document.querySelectorAll(`.tariff-card:nth-child(${galleryIndex + 2}) .dot`);
    
    img.src = galleries[galleryIndex][currentSlides[galleryIndex]];
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlides[galleryIndex]);
    });
}

// Видео карусель
let currentVideo = 0;
const videoContainers = document.querySelectorAll('.video-container');
const videoDots = document.querySelectorAll('.video-dot');

function changeVideo(direction) {
    const currentVideoElement = videoContainers[currentVideo].querySelector('video');
    currentVideoElement.pause();
    
    currentVideo += direction;
    
    if (currentVideo < 0) {
        currentVideo = videoContainers.length - 1;
    }
    if (currentVideo >= videoContainers.length) {
        currentVideo = 0;
    }
    
    updateVideo();
}

function setVideo(index) {
    const currentVideoElement = videoContainers[currentVideo].querySelector('video');
    currentVideoElement.pause();
    
    currentVideo = index;
    updateVideo();
}

function updateVideo() {
    videoContainers.forEach((container, index) => {
        container.classList.toggle('active', index === currentVideo);
    });
    
    videoDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentVideo);
    });
}

// Свайпы для мобильных
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        changeVideo(1);
    }
    if (touchEndX > touchStartX + 50) {
        changeVideo(-1);
    }
      }
