$(document).ready(function () {
    $(".logo3").click(function () {
        $(".bottom-logo-nav").slideToggle();
    });
});


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


$(document).ready(function () {
    $(".i1").click(function () {
        $(".i1-content").show("slide", { direction: "left" }, 1000);
    });
});
