ymaps.ready(init);
function init() {
    // Создаем объект карты, центрируем его и устанавливаем масштаб
    var myMap = new ymaps.Map("map", {
        center: [55.66985876502471, 37.48046689054042], // Координаты центра
        zoom: 15,  // Уровень масштабирования
        controls: ['zoomControl', 'typeSelector']  // Контролы для карты (масштаб и тип)
    });

    // Создаем метку на карте
    var myPlacemark = new ymaps.Placemark([55.66985876502471, 37.48046689054042], {
        hintContent: 'Занятия проходят по этому адресу'  // Подсказка при наведении
    });

    // Добавляем метку на карту
    myMap.geoObjects.add(myPlacemark);
}