$(function () {
  let page1 = $(".page1").offset().top;
  console.log(page1);
  let page2 = $(".page2").offset().top;
  console.log(page2);
  let page3 = $(".page3").offset().top;
  console.log(page3);
  let page4 = $(".page4").offset().top;
  console.log(page4);

  // 1. 헤더 메뉴(header li)와 우측 점( #navi li) 모두 클릭 이벤트를 연결.
  $("header li, #navi li").on("click", function () {
    // 2. 클릭한 요소가 몇 번째인지 인덱스 번호를 가져온다. (0, 1, 2, 3)
    let i = $(this).index();
    console.log("클릭한 인덱스:", i);

    // 3. 해당 인덱스에 맞는 section의 상단 위치값을 구한다.
    let target = $("section").eq(i).offset().top;

    // 4. 해당 위치로 부드럽게 스크롤 이동
    $("html, body").stop().animate(
      {
        scrollTop: target,
      },
      600,
    );

    // 5. 우측 네비게이션(#navi li)의 활성화 표시(빨간색) 변경
    // 클릭한 순서(i)와 일치하는 네비게이션 요소에 'on' 클래스를 줍니다.
    $("#navi li").eq(i).addClass("on").siblings().removeClass("on");
  });
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    console.log(scroll);
    base = -300;
    // 스크롤바가 page1보다 크거나 같고(&&) page2보다 작으면
    if (scroll >= page1 + base && scroll < page2) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");
      $("section").removeClass("on");
      $(".page1").addClass("on");
    } else if (scroll >= page2 && scroll < page3) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");
      $("section").removeClass("on");
      $(".page2").addClass("on");
    } else if (scroll >= page3 && scroll < page3) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      $("section").removeClass("on");
      $(".page3").addClass("on");
    } else {
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
    }
  });
});

// 문제)
// - 스크롤바가 page1보다 크거나 같고 page2보다 작으면 네비바를 1로 변경함.
// - 스크롤바가 page2보다 크거나 같고 page3보다 작으면 네비바를 2로 변경함.
// - 스크롤바가 page3보다 크거나 같고 page4보다 작으면 네비바를 3로 변경함.
// -그렇지 않으면 네비바를 4로 변경함
