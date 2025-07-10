//공통
// .btn>li 중 첫번째 li에 check클래스 추가
$('.btn>li').first().addClass('check');

// 전역 변수 설정
let nth = 0; // 순번
let pos = 0; // 위치
const MAX = $('.btn>li').length - 1;// .btn>li의 최대 eq값
let auto = 0; // 자동 실행조건




$('.btn>li').mouseover(function autoplay() {
    if (auto === 0) {
        auto = setInterval(function() {
    nth++;
    if (nth > MAX) nth = 0;
    $('.slide>ul').animate({
        left:'-100%'
    },200,function(){  // 1컷의 슬라이드 시간
        $('.slide>ul').append($('.slide>ul>li:first')).css('left',0);
        $('.btn>li').removeClass('check').eq(nth).addClass('check');
    });
   },5000);// 1컷의 (슬라이드 + 멈춤) 총 시간
  };
};
autoplay();



$('.slide').mouseover(function(){
    clearInterval(auto);auto = 0;
}).mouseout(function(){autoplay();});



$('.next').click(function(){
   nth++;
    if (nth > MAX) nth = 0;
    $('.slide>ul').animate({
        left:'-100%'
    },200,function(){  // 1컷의 슬라이드 시간
        $('.slide>ul').append($('.slide>ul>li:first')).css('left',0);
        $('.btn>li').removeClass('check').eq(nth).addClass('check');
    });
  console.log('nth=',nth);
 });


$('.prev').click(function () {
    nth--;
    if (nth < 0) nth = MAX;
    $('.slide>ul').animate({
        left: '-100%'
    },0, function () {
        $('.slide>ul').prepend($('.slide>ul>li:last'));
    });
    $('.slide>ul').animate({
        left:0
    },200, function(){
        $('.btn>li').removeClass('check').eq(nth).addClass('check');
    });
    console.log('nth=', nth);
});



$('.btn>li').click(function () {
    let checkBtn = $(this).index();
    let result = checkBtn - nth;
    let reflect;
    nth = checkBtn;
$('.btn>li').removeClass('check').eq(nth).addClass('check');
    
    if (result > 0) { pos = -100 * result + '%';
$('.slide>ul').animate({left: pos}, 1000, function () {
$('.slide>ul').append($('.slide>ul>li:lt(' + result + ')')).css('left', 0);});

  } else if (result < 0) { pos = 100 * result + '%';
    reflect = result + MAX;
$('.slide>ul').animate({left: pos}, 0, function () {
$('.slide>ul').prepend($('.slide>ul>li:gt(' + reflect + ')'));
$('.slide>ul').animate({left: 0}, 1000);});
  } else return;
console.log('nth=', nth, ',pos=', pos, ',reflect', reflect);
});