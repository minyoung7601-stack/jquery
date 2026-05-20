$(function () {
  $(".btn1").on("click", function () {
    $("div").animate({ top: "0px" });
  });

  $(".btn2").on("click", function () {
    $("div").animate({ top: "200px" });
  });
});
