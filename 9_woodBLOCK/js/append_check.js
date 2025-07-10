// 첫 번째 체크버튼에 배경색 지정
$('.btn>li').first().addClass('check');

//전역변수 설정
let nth = 0; //순번
let pos = 0; //위치 
const MAX = $('.btn>li').length - 1;
// .btn>li의 최대 eq값(length는 서수(序数), 1부터)

/*
.btn>li 클릭하면
1. 지역변수 checkBtn에 클릭한 li의 순번을 넣어줌
2. 지역변수 result에 checkBtn에서 nth를 뺀 값을 넣어줌
3. 변수 nth에 checkBtn을 넣어줌
4. .btn>li에 check클래스 제거, nth번째 li만 check클래스 추가
5-1. 만약 --> next 방향 클릭
     - append_check_next.js
5-2. 아니면 --> prev 방향 클릭
     - append_check_prev.js
5-3. 둘다 아니면 
     - 아무것도 실행하지 않음
*/

$('.btn>li').click(function () {
    let checkBtn = $(this).index();
    let result = checkBtn - nth;
    nth = checkBtn;
    $('.btn>li').removeClass('check').eq(nth).addClass('check');

    if (result > 0) {
        pos = -100 * result + '%';
        $('.slide>ul').animate({
            left: pos
        }, 1000, function () {
            $('.slide>ul').append($('.slide>ul>li:lt(' + result + ')')).css('left', 0);
        });

    } else if (result < 0) {
        pos = 100 * result + '%';
        let reflect = result + MAX;

        $('.slide>ul').animate({
            left: pos
        }, 0, function () {
            $('.slide>ul').prepend($('.slide>ul>li:gt(' + reflect + ')'));
        });
        $('.slide>ul').animate({
            left: 0
        }, 1000);
    } else return;
    $('.btn>li').removeClass('check').eq(checkBtn).addClass('check');
    console.log('nth=', nth, ',pos=', pos, ',reflect', reflect);
});
