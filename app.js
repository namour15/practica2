window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  
			  breakpoint: 450,
			  settings: {
				
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

window.sr=ScrollReveal();

	sr.reveal('.padre', {
		duration:3000,
		origin: 'left',
		distance:'-100px'

	});

window.sr=ScrollReveal();

	sr.reveal('.navbar', {
		duration:3000,
		origin: 'button',
		distance:'-100px'

	});

window.sr=ScrollReveal();

	sr.reveal('.columna3', {
		duration:3000,
		origin: 'right',
		distance:'-100px'

	});