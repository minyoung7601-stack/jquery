// 자동으로 넘어가고, 화살표 클릭했을때 넘어가게 만들기

$(function () {
  let stop;

  let width = $("#slider").width();
  console.log(width);

  start();

  function start() {
    stop = setInterval(function () {
      $(".panel")
        .stop()
        .animate({ "margin-left": `${-width}px` }, function () {
          $(".panel li:first-child").appendTo(".panel");
          $(".panel").css({ "margin-left": "0px" });
        });
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(그만);
    $(".panel")
      .stop()
      .animate({ "margin-left": `${-width}px` }, function () {
        $(".panel li:first-child").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
      });

    start();
  });

  $(".prev").on("click", function () {
    clearInterval(그만);
    $(".panel li:last-child").prependTo(".panel");
    $(".panel").css({ "margin-left": `${-width}px` });
    $(".panel").stop().animate({ "margin-left": "0px" });
    start();
  });
});
