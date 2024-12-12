// Получаем контейнер и изображение
const container = document.querySelector('.image-container');
const image = document.querySelector('.image');

// Функция вращения изображения при наведении
container.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = container.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // Рассчитываем угол поворота по осям X и Y
    const rotateX = (offsetY / height) * 50; // Ограничиваем вращение по оси X
    const rotateY = (offsetX / width) * -50; // Ограничиваем вращение по оси Y

    // Применяем вычисленные значения вращения
    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Сброс вращения, когда мышь выходит за пределы контейнера
container.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateX(0deg) rotateY(0deg)';
});