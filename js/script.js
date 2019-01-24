$(document).ready(function(){
	let changeBlock = document.querySelector('.changeBlock'),
		change = document.querySelectorAll('.changeContent'),
		content = document.querySelectorAll('.contentDesc');
	let hideContent = function(h) {
		for (let i = h; i < content.length; i++){
			content[i].classList.remove('showDes');
			content[i].classList.add('hideDes');
		}
	}
	hideContent(1);

	let showContent = function(s) {
		if(content[s].classList.contains('hideDes')){
			content[s].classList.remove('hideDes');
			content[s].classList.add('showDes');
		}
	}
	changeBlock.addEventListener('click', e => {
		let target = e.target;
			console.log(target);
		if (target && target.classList.contains('changeContent')) {
			for(let i = 0; i < change.length; i++){
				if(target == change[i]){
					hideContent(0);
					showContent(i);
				}
			}
		}
	});
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