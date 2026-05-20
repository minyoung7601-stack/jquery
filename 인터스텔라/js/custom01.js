$(function () {
  $(".content > ul > li").on("click", function () {
    isOn = $(this).hasClass("on");

    console.log(isOn);

    if (isOn == true) {
      $(this).find(".txt").stop().slideUp();
    } else {
      $(this).find(".txt").stop().slideUp();
    }
  });
});
