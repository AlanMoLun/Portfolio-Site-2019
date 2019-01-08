
$(document).ready(function() {
  let curTop = 0;
  let currentPosition = { x: 0, y: 0 },
  newPosition = { x: 0, y: 0 };
  // let tm = new TweenMax();
  // if (tl.isActive()) { return; }

  mouseMove();
  bgColorChange();
  // findSpacing();
  // cursor();

  
  $(document).scroll(function(e) {
    let newTop = $(window).scrollTop();
    let diff = newTop - curTop;
    curTop = newTop;
    let posTop = $('.cursor').position().top;
    let posLeft = $('.cursor').position().left;
    TweenMax.set($('.cursor'), {
      x: posLeft,
      y: posTop + diff
  })
  })

  $(document).on("mousemove", function (e) {
    currentPosition.x = e.pageX;
    currentPosition.y = e.pageY;
    // newPosition.x += (currentPosition.x - newPosition.x) / 1.5;
    // newPosition.y += (currentPosition.y - newPosition.y) / 1.5;

    TweenMax.set($('.cursor'), {
      x: currentPosition.x,
      y: currentPosition.y
    })
  })

  $('.prj-link, .next-link').on("mouseenter", function () {
    // $('.cursor').css({
    //   "display": "block"
    // });
    TweenMax.to($('.cursor'), .05, {
      autoAlpha:1,
    });
  })

  $('.prj-link, .next-link').on("mouseleave", function () {
    TweenMax.to($('.cursor'), .05, {
      autoAlpha: 0,
    });
    // $('.cursor').css({
    //   "display": "none"
    // });
  })



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

function findSpacing() {
  let referencePadding = $('.equal-padding').css('padding-left').replace(/[^-\d\.]/g, '');
  let spacing = $('.spacing-reference').offset().left - referencePadding;
  $('.project-m-bottom').css("margin-bottom", `${spacing}px`);
}

function cursor() {


  
  $('.prj-link').on("mouseenter", function () {
    $('.cursor').css({
      "display": "block"
    });
    TweenMax.to($('.cursor'), .3, {
      autoAlpha:1,
    });
  })

  $('.prj-link').on("mouseleave", function () {
    $('.cursor').css({
      "display": "none"
    });
    TweenMax.to($('.cursor'), .3, {
      autoAlpha: 0,
    });
  })

  $(document).on("mousemove", function (e) {
    currentPosition.x = e.pageX;
    currentPosition.y = e.pageY;
    // newPosition.x += (currentPosition.x - newPosition.x) / inertia;
    // newPosition.y += (currentPosition.y - newPosition.y) / inertia;

    TweenMax.set($('.cursor'), {
      x: currentPosition.x,
      y: currentPosition.y
    })
  })
}












/* <div class="row no-gutters equal-padding grid-m-bottom"> 
      <div class="col-md-4 offset-md-1 m-top">
        <v-project-thumbnail></v-project-thumbnail>
      </div>
      <div class="col-md-4 offset-md-2">
        <a href="#" class="prj-link prj-2">
          <img class="prj-2-img" src="../img/prj-2.jpg">
          <div class="title">Sam Fox Calendar</div>
        </a>
      </div>
    </div>
    <div class="row no-gutters right-padding grid-m-bottom">
      <div class="col-md-9 offset-md-3">
        <a href="#" class="prj-link prj-3">
          <img class="prj-3-img" src="../img/prj-3.jpg">
          <div class="title">Noise: Within, Among and Beyond</div>
        </a>
      </div>
    </div>
    <div class="row no-gutters equal-padding grid-m-bottom">
      <div class="col-md-4 offset-md-1 m-top">
        <a href="#" class="prj-link prj-4">
          <img class="prj-4-img" src="../img/prj-4.jpg">
          <div class="title">Tu Youyou</div>
        </a>
      </div>
      <div class="col-md-4 offset-md-2">
        <a href="#" class="prj-link prj-5">
          <img class="prj-5-img" src="../img/prj-5.jpg">
          <div class="title">Wout van Aert</div>
        </a>
      </div>
    </div>
    <div class="row no-gutters left-padding grid-m-bottom">
        <div class="col-md-9">
          <a href="#" class="prj-link prj-6">
            <img class="prj-6-img" src="../img/prj-6.jpg">
            <div class="title p-left">In Praise of the Messed Up Mind</div>
          </a>
        </div>
      </div>
      <div class="row no-gutters equal-padding">
          <div class="col-md-4 offset-md-1">
            <a href="#" class="prj-link prj-7">
              <img class="prj-7-img" src="../img/prj-7.jpg">
              <div class="title">Process Books</div>
            </a>
          </div>
      </div> */