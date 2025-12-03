$(document).ready(function() {	
	$('.gnb_1dli').hover(function() {
		$('ul.gnb_2dul', this).slideDown(200);
		$('ul.gnb_2dul', this).css('display','block');
		$(this).children('a:first').addClass("hov");
	}, function() {
		$('ul.gnb_2dul', this).slideUp(200);
		$('ul.gnb_2dul', this).css('display','none');
		$(this).children('a:first').removeClass("hov");		
	});
});

$(document).ready(function() {
	//모바일 좌측메뉴 해쉬태그
	$(function (){
		hashload();
		//해쉬태그 레이어 슬라이드
		$(window).hashchange(function(){
			var hashTag = location.hash;
			hashAjax(hashTag);
	
		}).hashchange();
	});
	
});