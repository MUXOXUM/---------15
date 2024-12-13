// Показ кнопки при прокрутке вниз
window.addEventListener('scroll', function () {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

//<button class="scroll-to-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'});">Наверх</>

 /* Кнопка прокрутки вверх */
 /*.scroll-to-top {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #4a7b61;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
} */