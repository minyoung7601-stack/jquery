// $(function () {
//   let total = $(".panel li").length;
//   console.log(total); //5

//   let width = $(".slide").width();
//   console.log(width);

//   let i = 0; //순번

//   //첫번째 글자 움직임 추가

//   $(".panel li").eq(0).addClass("on");

//   start();

//   //함수 만들기
//   function start() {
//     //변수 timer안에 넣기
//     timer = setInterval(function () {
//       i++;

//       if (i == total - 1) {
//         $(".panel")
//           .stop()
//           .animate({ "margin-left": -4 * width }, function () {
//             $(".panel").css({ "margin-left": "0" });
//           });
//         i = 0;
//       } else {
//         $(".panel")
//           .stop()
//           .animate({ marginLeft: -i * width });
//       }
//       navi();
//     }, 2000);
//   }

//   $(".next").on("click", function () {
//     clearInterval(timer);
//     i++;

//     if (i == total - 1) {
//       $()
//         .stop()
//         .animate({ "margin-left": -4 * width }, function () {
//           $(".panel").css({ "margin-left": "0" });
//         });
//       i = 0;
//     } else {
//       $(".panel")
//         .stop()
//         .animate({ marginLeft: -i * width });
//     }
//     navi();

//     start();
//   });
//   $(".navi li").on("click", function () {
//     clearInterval(timer);
//     i = $(this).index();
//     $(".panel")
//       .stop()
//       .animate({ marginLeft: -i * width });

//     navi();

//     start();
//   });
//   //반복해서 쓰는것은 함수 만든다. navi함수 만듬
//   function navi() {
//     $(".navi li").removeClass("on");
//     $(".navi li").eq(i).addClass("on");

//     $(".panel li").removeClass("on");
//     $(".panel li").eq(i).addClass("on");
//   }

//   $(".prev").on("click", function () {
//     clearInterval(timer);
//     i--;
//     if (i < 0) {
//       $(".panel").css({ "margin-left": -4 * width });
//       $(".panel")
//         .stop()
//         .animate({ "margin-left": -3 * width });
//     } else {
//       $(".panel")
//         .stop()
//         .animate({ marginLeft: -i * width });
//     }

//     navi();
//   });
// });

$(function () {
  let total = $(".panel li").length; // 5
  let width = $(".slide").width();
  let i = 0;
  let timer; // 전역 변수로 선언

  // 브라우저 크기 변경 대응 (반응형일 경우 필수)
  $(window).resize(function () {
    width = $(".slide").width();
  });

  // 초기 설정: 첫 번째 글자 활성화
  $(".panel li").eq(0).addClass("on");

  start();

  // 자동 재생 함수
  function start() {
    timer = setInterval(function () {
      $(".next").trigger("click"); // next 클릭 이벤트를 강제로 발생시킴 (코드 중복 방지)
    }, 2000);
  }

  // Next 버튼
  $(".next").on("click", function () {
    clearInterval(timer);
    i++;

    if (i == total - 1) {
      // 4번 인덱스(마지막 복사본)에 도달했을 때
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * width }, function () {
          $(".panel").css({ "margin-left": "0" });
        });
      i = 0; // 실제로는 0번으로 돌아감
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * width });
    }
    navi();
    start();
  });

  // Prev 버튼 (빈 화면 해결 구간)
  $(".prev").on("click", function () {
    clearInterval(timer);
    i--;

    if (i < 0) {
      // 1. 현재 0인데 이전을 누르면, 즉시 마지막 복사본(4번) 위치로 순간이동
      $(".panel").css({ "margin-left": -(total - 1) * width });
      // 2. 그 다음 실제 마지막 장인 3번으로 부드럽게 이동
      i = total - 2; // 인덱스를 3으로 명시적 업데이트! (이게 없어서 빈 화면이 나옴)
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * width });
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * width });
    }
    navi();
    start();
  });

  // 네비게이션 클릭
  $(".navi li").on("click", function () {
    clearInterval(timer);
    i = $(this).index();
    $(".panel")
      .stop()
      .animate({ "margin-left": -i * width });
    navi();
    start();
  });

  // 공통 함수: 네비 및 글자 애니메이션
  function navi() {
    $(".navi li").removeClass("on").eq(i).addClass("on");
    $(".panel li").removeClass("on").eq(i).addClass("on");
  }
});
