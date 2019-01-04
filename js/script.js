$(document).ready(function(){
	$(() =>{
		$('#phone-number').mask('+7(999) 999-99-99');
	});
	$('.button-application').click(function(){
		$('.popup-request').css('display', 'block');
	});
	$('.header-nav-call').click(function(){
		$('.popup-phone').css('display', 'block');
	});
	$('.closeBtn').click(function(){
		$('.popup-request').css('display', 'none');
		$('.popup-phone').css('display', 'none');
	});
});