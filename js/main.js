
// menu bt
$(document).ready(function () {
    $(".logo3").click(function () {
        $(".bottom-logo-nav").slideToggle();
    });
});

// content hover
// $(document).ready(function () {
//     $(".pj-box").hover(function () {
//         $(".pj-img").addClass('pj-img-hover-before');
//         $(".arrow").addClass('arrow_hover');
//     });
// });


// see the project bt

// $(document).ready(function () {
//     $(".arrow").mouseover(function () {
//         $(this).addClass('arrow_hover');
//     });
//     $(".arrow").mouseleave(function () {
//         $(this).removeClass('arrow_hover');
//     });

// });


// swiperdemo
$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        // loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
});


// index animation
$(document).ready(function () {
    $('.title').click(function () {
        // $(window).scrollTop(0);
        $('html,body').animate({ scrollTop: 0 }, 1000);
        let w = $('.main').width();
        // console.log($(this).next('.content').css('flex-basis'))
        if ($(this).next('.con').css('flex-basis') == '0px') {
            // $('.main').animate({ marginLeft: -w }, 1000);
            $(this).parent().css({ width: '99vw' });
            $(this).siblings('.con').animate({ flexBasis: 0 });
            $('.inner-con').hide();
            $(this).next('.con').animate({ flexBasis: w }, function () {
                console.log($(this).find('.inner-con'))
                $(this).find('.inner-con').fadeIn();
            });


        } else {
            // $('.main').animate({ marginLeft: 0 });
            $(this).parent().css({ width: '20%' });

            $('.inner-con').hide();
            $(this).next('.con').animate({ flexBasis: 0 });
        }
    });
});


// drop-text
