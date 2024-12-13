// Предотвращение закрытия аккордеона
$('#accordionFrontend').on('show.bs.collapse', function (event) {
    $(event.target).siblings('.collapse').collapse('show');
});
