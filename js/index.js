$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1200, // Large devices (desktops)
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 992, // Medium devices (tablets)
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 768, // Small devices (phones)
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 576, // Extra small devices (phones)
            settings: {
                slidesToShow: 2
            }
        }]
    });
});
