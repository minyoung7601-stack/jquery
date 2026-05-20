$(function () {
  $(".right li").on("mouseenter", function () {
    vid = $(this).find("video").get(0); // li에서 video찾음
    vid.currentTime = 0; // 0번 트랙으로 이동
    vid.play(); // 재생
    $(this)
      .stop()
      .animate({ width: "35%" }, function () {
        /* 비디오 보이게함*/
        /* h3보이게함*/
        /* p 보이게함*/
        $(this).find("video").stop().animate({ opacity: 1 });
        $(this).find("h3").stop().animate(
          {
            right: "10px",
            opacity: 1,
          },
          500,
        );
        // $(this).find("p").stop().delay(100).animate(
        //   {
        //     right: "10px",
        //     opacity: 1,
        //   },
        //   600,
        // );
        $(".right li").on("mouseleave", function () {
          // 마우스가 나갔을 때 원래대로 복구
          vid.pause();
          $(this).stop().animate({ width: "15%" }, 600);
          $(this).find("video").stop().animate({ opacity: 0 }, 600);

          $(this)
            .find("h3")
            .stop()
            .animate({ right: "-100px", opacity: 0 }, 400);
          $(this)
            .find("p")
            .stop()
            .animate({ right: "-100px", opacity: 0 }, 400);
        });
      });
  });
});
