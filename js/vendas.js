$(function () {
  $(".watch-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
     variableWidth: true,
    prevArrow: $("#arrow-prev"),
    nextArrow: $("#arrow-next"),
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: false,
        },
      },
      {
        breakpoint: 670,
        settings: {
          centerMode: false
        }
      }
    ],
  });


});
