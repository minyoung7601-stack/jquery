$(function () {
  $(".top")
    .stop()
    .animate({ width: "100%" }, 1500, function () {
      $(".right")
        .stop()
        .animate({ height: "100%" }, 1500, function () {
          $(".bottom")
            .stop()
            .animate({ width: "100%" }, 1500, function () {
              $(".left").stop().animate({ height: "100%" });
            });
        });
    });
});
