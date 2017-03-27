$(document).ready(function(){


	/* Main-carousel*/
		$('.main-carousel').slick({
			dots: true,
			speed: 1000,
			autoplay:false,
			arrows:false,
			autoplaySpeed:5000
		});

	// /* Main-carousel*/
	// 	$('.main-carousel').slick({
	// 		dots: true,
	// 		speed: 1000,
	// 		autoplay:true,
	// 		prevArrow: '<button class="slick-prev"><i class="icon-arrow-left"></i></button>',
	// 		nextArrow: '<button class="slick-next"><i class="icon-arrow-right"></i></button>',
	// 		autoplaySpeed:5000
	// 	});


	$('.navbar-toggle').on('click', function() {
		$(this).toggleClass('active');

		$('.navbar-collapse').slideToggle('fast', function(){
			$('.navbar-collapse').removeAttr('style').toggleClass('show');
		});
		// $('.navbar-collapse').toggleClass('show');
	});

});