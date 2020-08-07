$(document).ready(function(){
	$('.header__slider,.gallery__slider').slick({
		arrows: false,
		dots: true
	});
});

$(document).ready(function(){
	$('.burger').click(function(event){
		$(".nav,.burger").toggleClass('active');
		$('body').toggleClass('lock');
	})
});

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

$(document).ready(function(){
	let but = document.getElementById("search");
	but.addEventListener('click', function(){
		swal({
		  content: {
		    element: "input",
		    attributes: {
		      placeholder: "Write something to search:",
		      type: "text",
		    },
		  },
		});
	});
});