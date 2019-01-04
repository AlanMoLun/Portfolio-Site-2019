
$(document).ready(function() {
  mouseMove();
  const marqueeInstance = Marquee3k.init();
  let scrollTimeout = null

  // window.addEventListener('scroll', function () {
  //   clearTimeout(scrollTimeout)

  //   marqueeInstance.speed = 5

  //   scrollTimeout = setTimeout(function () {
  //     marqueeInstance.speed = 1.5
  //   }, 500)
  // })

  $(window).on('scroll', function () {
    let factor = 1 + ($(window).scrollTop())/100;
    marqueeInstance.speed = 2 * factor;
  });
  marqueeInstance.speed = 2;

  bgColorChange();
})

function mouseMove () {
  $('.intro-section').on("mousemove", function (e) {
    let cursorX = e.pageX;
    let cursorY = e.pageY;
    let halfWindowWidth = ($(window).innerWidth()) / 2;
    let halfWindowHeight = ($(window).innerHeight()) / 2;
    let moveX = (cursorX - (halfWindowWidth)) * -0.08;
    let moveY = (cursorY - (halfWindowHeight)) * -0.08;

    TweenMax.to($('.intro-img-item-1, .profile-img'), 1.175, {
      x: moveX,
      y: moveY
    })
    TweenMax.to($('.intro-img-item-2'), 1.175, {
      x: moveX * 0.4,
      y: moveY * 0.8
    })
    TweenMax.to($('.intro-img-item-3'), 1.175, {
      x: moveX * 1.2,
      y: moveY * 1.4
    })
  })
}

function bgColorChange () {
  $('.intro-section').on("mousemove", function (e) {
    let x = e.pageX;
    //console.log("i'm here");
    let width = $(window).width();
    let percentage = x / width;
    let num = Math.floor(percentage * 4);

    switch (num) {
      case 0:
        $('.color-bg').css({"background": "#DDDDDD"});
        break;
      case 1:
        $('.color-bg').css({"background": "#DDA518"});
        break;
      case 2:
        $('.color-bg').css({"background": "#DDD1BE"});
        break;
      case 3:
        $('.color-bg').css({"background": "#A0B0BE"});
    }
  })
}

function titleHover() {
  $(".hover-title").on("mousemove", function() {
      var t = i.site.mousePos.pageX - (e(this).offset().left + e(this).outerWidth() / 2)
        , s = i.site.mousePos.pageY - (e(this).offset().top + e(this).outerHeight() / 2);
      e(this).find(".follow-title").css({
          transform: "translate(calc( -50% + " + t / 2 + "px), " + s / 2 + "px)"
      }),
      e(this).find(".slow-title").css({
          transform: "translate(calc( -50% + " + t / 8 + "px), " + s / 8 + "px)"
      })
  })
}

