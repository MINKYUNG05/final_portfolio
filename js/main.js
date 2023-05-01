
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
        slidesPerView: 1,
        spaceBetween: 30,
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
    $(".i1").click(function () {
        $(".i1-content").show("slide", { direction: "left" }, 1000);
    });
});
