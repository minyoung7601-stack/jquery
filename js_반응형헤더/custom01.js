$(function () {
  $(".content > ul > li").on("click", function () {
    isOn = $(this).hasClass("on");

    console.log(isOn);

    if (isOn == true) {
      $(this).find(".txt").stop().slideUp();
      $(".content > ul li").removeClass("on");
      $(".content").stop().animate({ bottom: "80px" });
    } else {
      $(".content > ul li .txt").stop().slideUp();
      $(this).find(".txt").stop().slideDown();
      $(".content > ul li").removeClass("on");
      $(this).addClass("on");
      $(".content").stop().animate({ bottom: "30px" });
    }
  });
});
