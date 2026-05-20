$(function () {
  $(".left li").on("click", function () {
    let i = $(this).index();
    // console.log(i);

    // 왼쪽 tab에 효과주기
    $(".left li").removeClass("on");
    $(this).addClass("on");

    // right section 보이게하기
    $("section").stop().fadeOut();
    $("section").eq(i).stop().fadeIn();

    // right section글자 이미지 효과
    $("section").removeClass("on");
    $("section").eq(i).addClass("on");
  });
});
