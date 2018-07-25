$(document).ready(function() {

    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 400) {
            $('.mi-menu').addClass('mi-menu__scroll');
        } else {
            $('.mi-menu').removeClass('mi-menu__scroll');
        }
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 400) {
            $('.mi-menu__logo').addClass('mi-menu__logo--hidden');
        } else {
            $('.mi-menu__logo').removeClass('mi-menu__logo--hidden');
        }
    });
});