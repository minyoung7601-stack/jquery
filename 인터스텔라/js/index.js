$(function () {
  $(".content > ul li").on("click", function () {
    $(this).find(".txt").slideToggle();
    $(".content > ul li").removeClass("on");
    $(this).addClass("on");
  });
});
