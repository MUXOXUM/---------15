// Функционал для фотографии студента
const studentPhoto = document.querySelector('.image');
const studentPhotoSrc = "img/person.jpg"; // Исходное фото студента
const favoriteTeacherPhotoSrc = "img/rubnik.png"; // Фото преподавателя
let isTeacherPhoto = false; // Флаг для определения текущего изображения

studentPhoto.addEventListener('click', function () {
    // Переключение между фото студента и преподавателя
    if (isTeacherPhoto) {
        this.src = studentPhotoSrc;
    } else {
        this.src = favoriteTeacherPhotoSrc;
    }
    isTeacherPhoto = !isTeacherPhoto; // Меняем состояние флага
});

studentPhoto.addEventListener('dblclick', function () {
    alert('Не налегай, у меня не так много любимых преподавателей.');
});