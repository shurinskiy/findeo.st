import Swiper, { Navigation, Parallax, Controller } from 'swiper/core';
Swiper.use([Navigation, Parallax, Controller]);

(() => {
	let $info = $('.hero__info');

	const under_swiper = new Swiper('.slider-1', {
		loop: true,
		speed: 1200,
		parallax: true
	});
	
	const over_swiper = new Swiper('.slider-2', {
		loop: true,
		speed: 1200,
		navigation: {
			nextEl: '.hero__arr_next',
			prevEl: '.hero__arr_prev',
		},
		on: {
			beforeInit: function(swiper) {
				swiper.$el.find('.slider-2__hidden').each(function(index) {
					$info.append(`<div class="hero__info-item">${$(this).html()}</div>`);
				})
			},
			slideChangeTransitionEnd: function(swiper) {
				$info
					.find('.hero__info-item')
					.removeClass('current')
					.eq(swiper.realIndex)
					.addClass('current');
			}
		}
	});

	over_swiper.controller.control = under_swiper;
})();