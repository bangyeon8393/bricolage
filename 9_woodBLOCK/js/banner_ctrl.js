//공통
// .btn>li 중 첫번째 li에 check클래스 추가
//$('.btn>li').first().addClass('check');
//
//// 전역 변수 설정
//let nth = 0; // 순번
//let pos = 0; // 위치
//const MAX = $('.btn>li').length - 1;// .btn>li의 최대 eq값
//let auto = 0; // 자동 실행조건

let index = 0;
const MAX = $('.btn > li').length;

function moveSlide(newIndex) {
  if (newIndex === index) return;

  $('.btn > li').removeClass('check').eq(newIndex).addClass('check');

  $('.slide > ul').animate({
    left: '-100%'
  }, 100, function () {
    $('.slide > ul').append($('.slide > ul > li:first'));
    $('.slide > ul').css('left', 0);
  });

  index = newIndex;
}

$('.btn > li').each(function (i) {
  $(this).on('click', function () {
    if (i === index) return;

    const step = i - index;
    for (let j = 0; j < Math.abs(step); j++) {
      if (step > 0) {
        $('.slide > ul').animate({
          left: '-100%'
        }, 200, function () {
          $('.slide > ul').append($('.slide > ul > li:first'));
          $('.slide > ul').css('left', 0);
        });
      } else {
        $('.slide > ul').prepend($('.slide > ul > li:last'));
        $('.slide > ul').css('left', '-100%').animate({ left: 0 }, 200);
      }
    }

    $('.btn > li').removeClass('check').eq(i).addClass('check');
    index = i;
  });
});

setInterval(function () {
  $('.btn > li').eq((index + 1) % MAX).trigger('click');
}, 7000);






//
//setInterval(function () {
//  $('.slide>ul').animate({
//    left: '-100%'
//  }, 200, function () {
//    $('.slide>ul').append($('.slide>ul>li:first'));
//    $('.slide>ul').css('left', 0);
//  });
//}, 7000);
//    
//    if (result > 0) { pos = -100 * result + '%';
//$('.slide>ul').animate({left: pos}, 1000, function () {
//$('.slide>ul').append($('.slide>ul>li:lt(' + result + ')')).css('left', 0);});
//
//  } else if (result < 0) { pos = 100 * result + '%';
//    reflect = result + MAX;
//$('.slide>ul').animate({left: pos}, 0, function () {
//$('.slide>ul').prepend($('.slide>ul>li:gt(' + reflect + ')'));
//$('.slide>ul').animate({left: 0}, 1000);});
//  } else return;
//console.log('nth=', nth, ',pos=', pos, ',reflect', reflect);
//});