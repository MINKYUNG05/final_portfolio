
// menu bt
$(document).ready(function () {
    $(".logo3").click(function () {
        $(".bottom-logo-nav").slideToggle();
    });
});


//menu click
$(document).ready(function () {
    $(".pj-box:nth-of-type(1)").click(function () {
        $(location).attr("href", "https://minkyung05.github.io/project4_react_jordan/")
	})

    $(".pj-box:nth-of-type(2)").click(function () {
        $(location).attr("href", "https://minkyung05.github.io/Project.2_grammyaward/")
	})

    $(".pj-box:nth-of-type(3)").click(function () {
        $(location).attr("href", "https://minkyung05.github.io/project.3_amazonbooks/")
	})

    $(".pj-box:nth-of-type(4)").click(function () {
        $(location).attr("href", "https://minkyung05.github.io/avatar_group_pj_new/")
	})

    });




// swiperdemo
$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
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


