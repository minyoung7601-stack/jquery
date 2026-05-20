$(function () {
  let stop;

  $(".panel li:first-child p").addClass("on");

  start();

  function start() {
    stop = setInterval(function () {
      $(".panel p").removeClass("on");
      $(".panel")
        .stop()
        .animate({ "margin-left": `-100%` }, function () {
          $(".panel li:first-child").appendTo(".panel");
          $(".panel").css({ "margin-left": `0px` });
          $(".panel p").addClass("on");
        });
      $(".navi-bar li").removeClass("on");
      $(".navi-bar li").eq(i).addClass("on");
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(stop);
    $(".panel p").removeClass("on");
    $(".panel")
      .stop()
      .animate({ "margin-left": `-100%` }, function () {
        $(".panel li:first-child").appendTo(".panel");
        $(".panel").css({ "margin-left": `0px` });
        $(".panel p").addClass("on");
      });

    $(".navi-bar li").removeClass("on");
    $(".navi-bar li").eq(i).addClass("on");
    start();
  });

  $(".prev").on("click", function () {
    clearInterval(stop);
    $(".panel p").removeClass("on");
    $(".panel li:last-child").prependTo(".panel");
    $(".panel").css({ "margin-left": `-100%` });
    $(".panel").stop().animate({ "margin-left": `0px` });
    $(".panel p").addClass("on");
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
    $(".navi-bar li").removeClass("on");
    $(".navi-bar li").eq(i).addClass("on");
    start();
  });
});
