$(document).ready(function(){
	$('.header__slider,.gallery__slider').slick({
		arrows: false,
		dots: true
	});
});

$(document).ready(function(){
	$('.burger').click(function(event){
		$(".nav").toggleClass('active');
		$('body').toggleClass('lock');
	})
});
