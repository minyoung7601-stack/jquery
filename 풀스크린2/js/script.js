// $(function () {
//   $("header li").on("click", function () {
//     page1 = $(".page1").offset().top;
//     console.log(page1);
//   });
// });
// $(function () {
//   $("header li").on("click", function () {
//     page2 = $(".page2").offset().top;
//     console.log(page2);
//   });
// });
// $(function () {
//   $("header li").on("click", function () {
//     page3 = $(".page3").offset().top;
//     console.log(page3);
//   });
// });
// $(function () {
//   $("header li").on("click", function () {
//     page4 = $(".page4").offset().top;
//     console.log(page4);
//   });
//   $("header li").on("click", function () {
//     let i = $(this).index();
//     console.log(i);
//     let target = $("section").eq(i).offset().top;
//     console.log(target);

//     $("html, body").stop().animate({ scrollTop: "target" });
//   });
// });
$(function () {
  $("header li").on("click", function () {
    // 1. 클릭한 li가 몇 번째인지 인덱스 번호 가져오기 (0, 1, 2, 3...)
    let i = $(this).index();
    console.log("인덱스:", i);

    // 2. 해당 인덱스에 맞는 section의 상단 위치(top) 구하기
    let target = $("section").eq(i).offset().top;
    console.log("이동할 위치:", target);

    // 3. 부드럽게 스크롤 이동 (target에 따옴표를 제거하세요!)
    $("html, body").stop().animate(
      {
        scrollTop: target,
      },
      500,
    ); // 500은 0.5초 동안 이동한다는 뜻입니다.
  });
});
