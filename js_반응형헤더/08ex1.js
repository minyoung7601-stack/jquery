$(function () {
  $("button").on("click", function () {
    // $("div").animate({ width: "200px", height: "200px" });
    // $("div").stop().animate({ width: "200px" });
    // $("div").stop().animate({ height: "200px" });
    // $("div").stop().animate({ "border-radius": "20px" });

    $("div")
      .stop()
      .animate({ width: "200px" }, 1000, function () {
        $("div")
          .stop()
          .animate({ height: "200px" }, 1000, function () {
            $("div").stop().animate({ "border-radius": "20px" }, 1000);
          });
      });
  });
});
//기본형식은 $("선택자").animate({"속성":"속성값"}, 밀리초, 콜백함수)
// "border-radius"는 두 단어가 합쳐쳐서 이뤄진거라 따옴표 써야함
