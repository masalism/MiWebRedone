$(document).ready(function() {

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 50) {
            $('.card-1').addClass('moveFromLeftX');
            $('.card-2').addClass('moveFromTop');
            $('.card-3').addClass('moveFromRightX');
        } else {
            $('.card-1').removeClass('moveFromLeftX');
            $('.card-2').removeClass('moveFromTop');
            $('.card-3').removeClass('moveFromRightX');
        }
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 400) {
            $('.card-4').addClass('moveFromLeft2');
            $('.card-5').addClass('moveFromBottom');
            $('.card-6').addClass('moveFromRight2');
        } else {
            $('.card-4').removeClass('moveFromLeft2');
            $('.card-5').removeClass('moveFromBottom');
            $('.card-6').removeClass('moveFromRight2');
        }
    });

});