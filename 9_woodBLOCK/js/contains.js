// 대소문자 구분 없이 검색되도록 커스텀 :icontains 필터 정의
jQuery.expr[":"].icontains = function (el, i, m) {
  return (
    jQuery(el).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0
  );
};

// 검색 버튼 클릭 시 동작
$('.btn').click(function () {
  let keyword = $('.text').val().trim(); // 공백 제거
  $('.product > li').hide(); // 모든 상품 숨기기

  if (keyword === '') {
    // 검색어가 없으면 전체 다시 표시
    $('.product > li').show();
  } else {
    // 검색어 포함하는 상품만 표시
    $('.name:icontains("' + keyword + '")')
      .closest('li')
      .show();
  }
});

// Enter 키 입력 시 검색 트리거
$('.text').keydown(function (e) {
  if (e.keyCode === 13) {
    $('.btn').click();
  }
});
