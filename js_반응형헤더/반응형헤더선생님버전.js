$(function () {
  $(".bar").on("click", function () {
    $("nav").stop().animate({ right: "2rem" });
    $(".bar").hide();
    $(".close").show();
  });
  $(".close").on("click", function () {
    $("nav").stop().animate({ right: "-500px" });
    $(".bar").show();
    $(".close").hide();
  });
});
