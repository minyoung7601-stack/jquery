$(function (params) {
  $("li").on("mouseenter", function () {
    $(this).find("p").stop().animate({ right: "50px" });
    $(this).find("p").show();
  });
  $("li").on("mouseleave", function () {
    $("li p").stop().animate({ right: "-50px" });
    $("li p").hide();
  });
});
// mouseenter와 mouseleave를 사용할때 stop을 사용
// 이벤트가 발생된 선택자는 this로 받을 수 있다.
// $("li").on("mouseleave", function () {
//     $("li p").stop().animate({ right: "-50px" });
//   }); 에서 .find("p")를 삭제

/* p에 display :none;을 쓰면 위의 js script가 길어져서 비효율적이라서 li에 overflow: hidden;을 쓰는것이 훨씬 실용적 */
