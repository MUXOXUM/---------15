// Полноэкранное изображение в слайдере
function openFullscreen(img) {
    const overlay = document.getElementById("fullscreenOverlay");
    const image = document.getElementById("fullscreenImage");
    image.src = img.src;
    overlay.style.display = "flex";
    overlay.focus(); // Установка фокуса на оверлей
}
function closeFullscreen() {
    const overlay = document.getElementById("fullscreenOverlay");
    overlay.style.display = "none";
}