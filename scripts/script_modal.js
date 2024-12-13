// Открытие модального окна
function openModal(service) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("serviceType").value = service; // Установка значения скрытого поля
}

// Закрытие модального окна
document.querySelector(".close").onclick = function () {
    closeModal();
}

window.onclick = function (event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("feedbackForm").reset();
    document.getElementById("successMessage").classList.add("hidden");
}

// Валидация формы и отправка данных
document.getElementById("feedbackForm").onsubmit = function (event) {
    event.preventDefault();

    const consentChecked = document.getElementById("consent").checked;
    if (!consentChecked) {
        alert("Вы должны согласиться на обработку персональных данных.");
        return;
    }

    // Здесь можно добавить код для отправки данных на сервер
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden");
    setTimeout(closeModal, 2000); // Закрытие модального окна через 2 секунды
};

// Маска ввода телефона
document.getElementById("phone").addEventListener("input", function (event) {
    let value = this.value.replace(/\D/g, '').substring(0, 10); // Удаляем все, кроме цифр
    if (value.length > 0) {
        const formattedValue = "+7 (" + value.substring(0, 3) + ") " + value.substring(3, 6) + "-" + value.substring(6, 8) + "-" + value.substring(8, 10);
        this.value = formattedValue.trim();
    } else {
        this.value = ''; // Если поле пустое, оставляем его пустым
    }
});