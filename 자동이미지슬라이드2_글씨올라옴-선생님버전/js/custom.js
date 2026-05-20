$(function () {
  let stop; // 타이머 변수

  // [중요] 첫 로딩 시, 첫 번째 슬라이드의 글자가 바로 나타나도록 설정 (4행 내용)
  $(".panel li:first-child p").addClass("on");

  // 초기 실행
  start();

  // 자동 슬라이드 함수 정의
  function start() {
    stop = setInterval(function () {
      // 1. 슬라이드 이동 전 글자 숨기기
      $(".panel p").removeClass("on");

      // 2. 슬라이드 판 이동
      $(".panel")
        .stop()
        .animate({ "margin-left": "-100%" }, function () {
          // 3. 사진 재배치 및 좌표 리셋
          $(".panel li:first-child").appendTo(".panel");
          $(".panel").css({ "margin-left": "0px" });

          // 4. 이동 완료 후 새로운 슬라이드의 글자 등장 (16행 내용)
          $(".panel p").addClass("on");
        });
    }, 2000); // 2초마다 반복
  }

  // [다음 버튼] 클릭 시 제어 (이미지 하단 연결용)
  $(".next").on("click", function () {
    clearInterval(stop); // 자동 재생 중지
    $(".panel p").removeClass("on"); // 글자 숨기기

    $(".panel")
      .stop()
      .animate({ "margin-left": "-100%" }, function () {
        $(".panel li:first-child").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
        $(".panel p").addClass("on"); // 글자 등장
      });

    start(); // 다시 자동 재생 시작
  });
});
