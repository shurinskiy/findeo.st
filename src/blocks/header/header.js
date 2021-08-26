import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {

	let $shell = $('.header__navi');
	let $toggle = $('.header__toggle');

	$('.header__toggle').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('opened');
		$shell.toggleClass('opened');
		
		if($shell.hasClass('opened')) {
			disablePageScroll();
			return;
		}
		
		enablePageScroll();
	});

	$(window).on('click', function(e) {
		if($shell.hasClass('opened') && !e.target.closest('.header__navi')) {
			e.preventDefault();
			$toggle.removeClass('opened');
			$shell.removeClass('opened');
			enablePageScroll();
		}
	});
})();
