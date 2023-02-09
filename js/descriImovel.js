$(".descri-imagens").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $("#arrow-prev"),
  nextArrow: $("#arrow-next"),
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: false,
      },
    },
  ],
});
