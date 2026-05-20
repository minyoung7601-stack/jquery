$(function () {
  $("li").on("mouseenter", function () {
    $(this).addClass("on");

    $(this).find(".arr").hide();
    $(this).find(".txt2").show();
  });
  $("li").on("mouseleave", function () {
    $(this).removeClass("on");

    $(this).find(".arr").show();
    $(this).find(".txt2").hide();
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
});
