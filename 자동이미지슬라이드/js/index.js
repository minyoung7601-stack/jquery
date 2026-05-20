$(function () {
  let width = $("#slider").width();
  let stop; // 전역 변수 선언

  function start() {
    stop = setInterval(function () {
      // 다음 버튼 기능을 그대로 실행
      $(".panel")
        .stop()
        .animate({ "margin-left": `${-width}px` }, function () {
          $(".panel li:first-child").appendTo(".panel");
          $(".panel").css({ "margin-left": "0px" });
        });
    }, 2000);
  }

  // 초기 호출 (엔진 시동!)
  start();

  // 다음 버튼
  $(".next").on("click", function () {
    clearInterval(stop);
    $(".panel")
      .stop()
      .animate({ "margin-left": `${-width}px` }, function () {
        $(".panel li:first-child").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
      });
    start();
  });

  // 이전 버튼 (작성하신 부분)
  $(".prev").on("click", function () {
    clearInterval(stop);
    $(".panel li:last-child").prependTo(".panel");
    $(".panel").css({ "margin-left": `${-width}px` });
    $(".panel").stop().animate({ "margin-left": "0px" });
    start();
  });
});

$(".prev").on("click", function () {
  // ① "자동 슬라이드 잠시 멈춰!"
  clearInterval(stop);

  // ② [순서 바꾸기] "맨 뒤에 있던 li(막내)를 떼서 맨 앞(첫째)으로 보내!"
  $(".panel li:last-child").prependTo(".panel");

  // ③ [위치 보정] 순서가 바뀌면 이미지가 툭 끊겨 보이니까,
  // 일단 전체 판을 왼쪽으로 한 칸 밀어놓습니다. (사용자는 눈치 못 채게 순식간에!)
  $(".panel").css({ "margin-left": `${-width}px` });

  // ④ [애니메이션] 밀려있던 판을 부드럽게 0 위치로 당겨옵니다.
  // 그러면 마치 왼쪽에서 이미지가 나타나는 것처럼 보입니다.
  $(".panel").stop().animate({ "margin-left": "0px" });

  // ⑤ "다시 자동으로 돌아가!"
  start();
});

// 자동으로 넘어가고, 화살표 클릭했을때 넘어가게 만들기
