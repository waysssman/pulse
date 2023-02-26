$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		// adaptiveHeight: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></img></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></img></button>',
		responsive: [
				{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	  });
  });

