$(function () {
  let total = $(".panel li").length;
  //   console.log(total);
  let i = 0;
  let stop;

  start();
  function start() {
    stop = setInterval(function () {
      i++;

      if (i == total - 1) {
        $(".panel")
          .stop()
          .animate({ "margin-left": "-2000px" }, function () {
            $(".panel").css({ "margin-left": 0 });
          });
        i = 0;
      } else {
        $(".panel")
          .stop()
          .animate({ "margin-left": -i * 500 });
      }

      navi();
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(stop);
    i++;

    if (i == total - 1) {
      $(".panel")
        .stop()
        .animate({ "margin-left": "-2000px" }, function () {
          $(".panel").css({ "margin-left": 0 });
        });
      i = 0;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * 500 });
    }
    navi();

    start();
  });

  $(".prev").on("click", function () {
    clearInterval(stop);
    i--;

    if (i < 0) {
      $(".panel").css({ "margin-left": "-2000px" });
      $(".panel").stop().animate({ "margin-left": -1500 });
      i = 3;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * 500 });
    }

    navi();
    start();
  });

  $(".navi li").on("click", function () {
    clearInterval(stop);

    i = $(this).index();
    $(".panel")
      .stop()
      .animate({ "margin-left": -i * 500 });
    navi();
    start();
  });

  function navi() {
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
  }
});
