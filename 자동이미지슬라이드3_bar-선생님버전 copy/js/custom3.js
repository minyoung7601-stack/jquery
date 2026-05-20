$(function () {
  let stop;
  let i = 0;
  let total = $(".panel li").length;

  $(".panel li:first-child p").addClass("on");

  start();

  function start() {
    stop = setInterval(function () {
      nextSlide();
    }, 2000);
  }

  function updateNavi() {
    $(".navi-bar li").removeClass("on");
    $(".navi-bar li").eq(i).addClass("on");
  }

  function nextSlide() {
    i++;
    if (i >= total) {
      i = 0;
    }

    $(".panel p").removeClass("on");

    $(".panel")
      .stop()
      .animate({ "margin-left": "-100%" }, 500, function () {
        $(".panel li:first-child").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
        $(".panel li:first-child p").addClass("on");
      });

    updateNavi();
  }

  function prevSlide() {
    i--;
    if (i < 0) {
      i = total - 1;
    }

    $(".panel p").removeClass("on");

    $(".panel li:last-child").prependTo(".panel");
    $(".panel").css({ "margin-left": "-100%" });

    $(".panel")
      .stop()
      .animate({ "margin-left": "0px" }, 500, function () {
        $(".panel li:first-child p").addClass("on");
      });

    updateNavi();
  }

  $(".next").on("click", function () {
    clearInterval(stop);
    nextSlide();
    start();
  });

  $(".prev").on("click", function () {
    clearInterval(stop);
    prevSlide();
    start();
  });

  $(".navi-bar li").on("click", function () {
    clearInterval(stop);

    let target = $(this).index();
    let diff = target - i;

    if (diff > 0) {
      for (let k = 0; k < diff; k++) {
        $(".panel li:first-child").appendTo(".panel");
      }
    } else if (diff < 0) {
      for (let k = 0; k < Math.abs(diff); k++) {
        $(".panel li:last-child").prependTo(".panel");
      }
    }

    i = target;

    $(".panel p").removeClass("on");
    $(".panel li:first-child p").addClass("on");

    updateNavi();
    start();
  });
});
