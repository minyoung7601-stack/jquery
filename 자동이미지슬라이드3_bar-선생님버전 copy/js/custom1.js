$(function () {
  let total = $(".panel li").length;
  console.log(total);
  let width = $("#slider").width();
  let i = 0;

  start();

  function start() {
    timer = setInterval(function () {
      // console.log("122");
      i++;
      if (i == total - 1) {
        $(".panel")
          .stop()
          .animate({ "margin-left": -i * width }, function () {
            $(".panel").css({ "margin-left": 0 });
          });
        i = 0;
      } else {
        $(".panel")
          .stop()
          .animate({ "margin-left": -i * width });
      }

      $(".navi-bar li").removeClass("on");
      $(".navi-bar li").eq(i).addClass("on");
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(timer);
    i++;
    if (i == total - 1) {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * width }, function () {
          $(".panel").css({ "margin-left": 0 });
        });
      i = 0;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * width });
    }

    $(".navi-bar li").removeClass("on");
    $(".navi-bar li").eq(i).addClass("on");
    start();
  });

  $(".navi-bar li").on("click", function () {
    clearInterval(timer);
    i = $(this).index();
    $(".panel")
      .stop()
      .animate({ "margin-left": -i * width });
    $(".navi-bar li").removeClass("on");
    $(".navi-bar li").eq(i).addClass("on");
    start();
  });

  $(".prev").on("click", function () {
    clearInterval(timer);
    i--;
    if (i < 0) {
      $(".panel").css({ "margin-left": -(total - 1) * width });
      $(".panel")
        .stop()
        .animate({ "margin-left": -(total - 2) * width });
      i = total - 2; // 3번 인덱스
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * width });
    }
    $(".navi-bar li").removeClass("on");
    $(".navi-bar li").eq(i).addClass("on");
    start();
  });
});
