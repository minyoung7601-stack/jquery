$(function () {
  // 자동 슬라이드를 시작하는 함수 호출
  start();

  let stop; // 타이머를 담을 변수

  // 자동 슬라이드 함수 정의
  function start() {
    stop = setInterval(function () {
      $(".panel")
        .stop()
        .animate({ "margin-left": "-100%" }, function () {
          // 애니메이션 완료 후 첫 번째 li를 맨 뒤로 이동
          $(".panel li:first-child").appendTo(".panel");
          // 위치를 0px로 리셋하여 무한 루프 구현
          $(".panel").css({ "margin-left": "0px" });
        });
    }, 2000); // 2초마다 반복
  }

  // 다음(.next) 버튼 클릭 시 이벤트
  $(".next").on("click", function () {
    // 1. 자동 재생 중지
    clearInterval(stop);

    // 2. 수동으로 다음 슬라이드 한 번 넘기기
    $(".panel")
      .stop()
      .animate({ "margin-left": "-100%" }, function () {
        $(".panel li:first-child").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
      });
  });
});
