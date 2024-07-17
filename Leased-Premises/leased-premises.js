$(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: true
    });

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('next.owl.carousel');
    });
    $(".prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });
});
