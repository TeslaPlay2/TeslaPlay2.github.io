$('.happy__container').slick({
	autoplay: 1,
	arrows: 0,
	dots: true
});

$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
});