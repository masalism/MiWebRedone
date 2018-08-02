$(document).ready(function() {

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 50) {
            $('.book-card-1').addClass('moveFromLeft');
        } else {
            $('.book-card-1').removeClass('moveFromLeft');

        }
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 630) {
            $('.book-card-2').addClass('moveFromLeft');
        } else {
            $('.book-card-2').removeClass('moveFromLeft');

        }
    });
});