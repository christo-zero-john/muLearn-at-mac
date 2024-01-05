// script.js
$(document).ready(function () {
    // Bootstrap initialization
    $('[data-toggle="modal"]').on('mouseenter', function () {
        $(this).modal('show');
    });

    // Card rotation effect
    $('.card-inner').on('mouseenter', function () {
        $(this).find('.card-front, .card-back').addClass('rotate');
    }).on('mouseleave', function () {
        $(this).find('.card-front, .card-back').removeClass('rotate');
    });

    // Add your custom JavaScript code here
});
