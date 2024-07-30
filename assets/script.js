// slick slider code
$(document).ready(function () {
    $('.carousel > .row').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 2,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/Button.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/Button (1).png'>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ],
    })

    $('.carousel2 > .row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/Button.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/Button (1).png'>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
    })
});
