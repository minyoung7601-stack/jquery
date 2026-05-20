$(function () {
  $(".btn").on("click", function () {
    isOn = $(this).hasClass("on");
    console.log(isOn);
    if (isOn) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  });
});
