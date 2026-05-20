// 자동 재생, 버튼 클릭 제어, 상태 표시(게이지)
$(function () {
  let i = 0;
  let total = $(".panel li").length;
  console.log(total);

  //   1. 초기화 및 시작 세팅
  if (i == 0) {
    $(".panel li").eq(0).addClass("on");
    $(".progress_bar li")
      .eq(0)
      .find("div")
      .stop()
      .animate({ width: "100%" }, 1000);
  }

  //   2. 자동 재생 제어 (start 함수)

  start();

  function start() {
    timer = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }

      fade();
    }, 2000);
  }

  //   3. 사용자 인터랙션 (클릭 이벤트)
  $(".next").on("click", function () {
    clearInterval(timer);
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    fade();
    start();
  });

  $(".prev").on("click", function () {
    clearInterval(timer);
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
    fade();
    start();
  });

  $(".play_bar .pause").on("click", function () {
    clearInterval(timer);
    $(".pause").hide();
    $(".play").show();
  });

  $(".play_bar .play").on("click", function () {
    start();
    $(".play").hide();
    $(".pause").show();
  });

  $(".progress_bar li").on("click", function () {
    clearInterval(timer);
    i = $(this).index();
    fade();
    start();
  });
  // 4. 핵심 액션 함수 (fade 함수)
  function fade() {
    $(".panel li").stop().fadeOut();
    $(".panel li").eq(i).stop().fadeIn();
    $(".panel li").removeClass("on");
    $(".panel li").eq(i).addClass("on");

    $(".txt li").hide();
    $(".txt li").eq(i).show();

    $(".progress_bar li div").stop().css({ width: "0" });
    $(".progress_bar li")
      .eq(i)
      .find("div")
      .stop()
      .animate({ width: "100%" }, 1000);
  }
});
