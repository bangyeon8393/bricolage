let slide = 0;
let maxSlide = 2;
const videoSrc = 'vid/test-';

$('.video li').css('zIndex', -1).hide().eq(0).show();
$('.video_btn_left').click(function(){
    let nowSlide = slide;
    $('.video').removeClass('act'+slide).children('li').fadeIn().hide().eq(nowSlide).css('zIndex', 0).show().fadeOut(200);
    slide--;
    if (slide < 0) {slide = maxSlide;}
    $('.video').addClass('act'+slide).children('li').eq(slide).show().children('video').get(0).currentTime = 0;
});
$('.video_btn_right, .dial').click(function(){
    let nowSlide = slide;
    $('.video').removeClass('act'+slide).children('li').fadeIn().hide().eq(nowSlide).show().fadeOut(200);
    slide++;
    if (slide > maxSlide) {slide = 0;}
    $('.video').addClass('act'+slide).children('li').eq(slide).show().children('video').get(0).currentTime = 0;
});
setInterval(function(){
    let nowSlide = slide;
    $('.video').removeClass('act'+slide).children('li').fadeIn().hide().eq(nowSlide).show().fadeOut(100); //이건 빠르게
    slide++;
    if (slide > maxSlide) {slide = 0;}
    $('.video').addClass('act'+slide).children('li').eq(slide).show().children('video').get(0).currentTime = 0;
}, 15000);

$('.pause').click(function(){
    if ($('.video video').get(slide).paused){
        $('.video video').get(slide).play();
        $('.pause').removeClass('act');
    } else {
        $('.video video').get(slide).pause();
        $('.pause').addClass('act');
    }
    $('.video_btn_left, .video_btn_right').click(function(){
        $('.video video').get(slide).play();
        $('.pause').removeClass('act');
    });
});

$('.ham').click(function(){
    if ($('#wrap').hasClass('ham-act')) {
        $('#wrap').removeClass('ham-act');
    } else {
        $('#wrap').addClass('ham-act');
    }
    $('#lnb').css('transition', 'all 0.5s');
    $('.ham span').css('transition', 'all 0.5s');
});

let scroll = $('html').offset().top - 120;
$('a').click(function(){
    let arrive = $(this).attr('href');
    $('.notHidden').removeClass('notHidden');
    $(arrive).addClass('notHidden');
    $('.ham-act').removeClass('ham-act');
    $('#lnb').css('transition', 'none');
    $('html, body').animate({scrollTop:scroll}, 500);
});
$(window).resize(function() {
  if ($('html').width() >= 1024) {
    $('.ham-act').removeClass('ham-act');
    $('#lnb').css('transition', 'none');
  }
});

$('.index_slide_btn_left').click(function(){
    let maxIndexSlide = 2;
    let indexSlideEq = $(this).parent().find('.act').index();
    $(this).parent().find('ul').removeClass('act'+indexSlideEq);
    $(this).parent().find('li').eq(indexSlideEq).removeClass('act');
    indexSlideEq--;
    if (indexSlideEq < 0) {indexSlideEq = 0;}
    $(this).parent().find('ul').addClass('act'+indexSlideEq);
    $(this).parent().find('li').eq(indexSlideEq).addClass('act');
});

$('.index_slide_btn_right').click(function(){
    let maxIndexSlide = 2;
    let indexSlideEq = $(this).parent().find('.act').index();
    $(this).parent().find('ul').removeClass('act'+indexSlideEq);
    $(this).parent().find('li').eq(indexSlideEq).removeClass('act');
    indexSlideEq++;
    if (indexSlideEq > maxIndexSlide) {
        indexSlideEq = 0;
        $(this).parent().find('li').eq(indexSlideEq).addClass('act');
        return;
    }
    $(this).parent().find('ul').addClass('act'+indexSlideEq);
    $(this).parent().find('li').eq(indexSlideEq).addClass('act');
});

let nowScorll = 0;
let maxScroll = 3;
$(window).on('wheel', function (scrollProduct) {
    if (scrollProduct.originalEvent.deltaY > 0) {
        if (nowScorll >= maxScroll || !$('#product_wrap').hasClass('notHidden')) {
            return;
        } else {
            $('#product-scroll ').removeClass('act'+nowScorll);
            nowScorll++;
        }
    } else {
        if (nowScorll <= 0) {
            return;
        } else {
            $('#product-scroll ').removeClass('act'+nowScorll);
            nowScorll--;
        }
    }
    $('#product-scroll').addClass('act'+nowScorll);
    $('html, body').animate({scrollTop:scroll}, 200);
});
$('.product-comp-1').click(function(){
    let getScroll = $('#product-scroll').attr('class');
    let thisScroll = $(this).index();
    $('#product-scroll').removeClass(getScroll).addClass('act'+thisScroll);
    nowScorll = thisScroll;
});
$('#product-scroll .scrollPrev').click(function(){
    if (nowScorll > 0) {
        $('#product-scroll ').removeClass('act'+nowScorll);
        nowScorll--;
        $('#product-scroll').addClass('act'+nowScorll);
    }
});
$('#product-scroll .scrollNext').click(function(){
    if (nowScorll < maxScroll) {
        $('#product-scroll ').removeClass('act'+nowScorll);
        nowScorll++;
        $('#product-scroll').addClass('act'+nowScorll);
    }
});


















