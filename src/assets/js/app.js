var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $(".tab-a").click(function () {
    $(".tab").removeClass("tab-active");
    $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass("tab-active");
    $(".tab-a").removeClass("active-a");
    $(this).parent().find(".tab-a").addClass("active-a");
  });

  // $(".close_side_nav").click(function () {
  //   $(".sidenav").removeClass("nav-close");
  //   $(".grid--nav").removeClass("grid--nav-close");
  //   $(".side-logo").removeClass("logo");
  // });

  $(".close_side_nav").click(function () {
    $(".sidenav").toggleClass("nav-close");
    $(".grid--nav").toggleClass("grid--nav-close");
    $(".side-logo").toggleClass("logo");
  });
});
