import Swiper, {EffectCoverflow} from 'swiper/core';
Swiper.use([EffectCoverflow]);

(() => {

	const featured_swiper = new Swiper('.slider-3', {
		effect: "coverflow",
		centeredSlides: true,
		loop: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 350,
			modifier: 1,
			slideShadows: false
		},
		breakpoints: {
			780: { 
				slidesPerView: 2.5,
			},
			640: { 
				slidesPerView: 2.4,
			},
			480 : {
				slidesPerView: 1.7,
			},
			360: { 
				spaceBetween: 0,
				slidesPerView: 1.2,
			},
			0: { 
				spaceBetween: 100,
				slidesPerView: 1.08,
			}
		}
	});

})();
