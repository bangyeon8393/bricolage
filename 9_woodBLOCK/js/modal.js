// 모달 숨김 초기화
$('.modal').hide();

// 모달 토글 버튼 클릭 시 모달 열기
$('.toggle').click(function (e) {
    e.stopPropagation(); // 외부 클릭 이벤트로 전달되지 않도록
    var target = $(this).data('target');
    $('.modal').not(target).hide();
    $(target).toggle(300);
});

// 모달 닫기 버튼 클릭
$('.close').click(function () {
    $(this).closest('.modal').hide(300);
});

// 모달 내부 클릭 시 외부 클릭으로 인식하지 않음
$('.modal-content').click(function (e) {
    e.stopPropagation();
});

// 문서 클릭 시 (모달 외부 클릭으로 간주) → 모달 닫기
$(document).on('click', function () {
    $('.modal:visible').hide(300);
});

// ESC 키 눌렀을 때 모달 닫기
$(document).on('keydown', function (e) {
    if (e.key === "Escape") {
        $('.modal:visible').hide(300);
    }
});
