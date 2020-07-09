$(document).ready(function () {

	let header = $('header'),
		headerHeight;

	function headerFixing() {
		header
			.addClass("fixed")
			.next()
			.addClass('marginTop');

	};
	$(window).scroll(function () {

		if ($(this).scrollTop() >= 1) {

			headerFixing();

		} else {

			header
				.removeClass("fixed")
				.next()
				.removeClass('marginTop');
		}

	});

	$(".scrollToNext").click(function () {

		headerFixing();

		$('html,body').animate({
			scrollTop: $(this)
				.closest('section')
				.next()
				.offset()
				.top - header.height()


		}, 300);
	});


	$('.header .nav__link').click(function () {
		if('.nav-wrap--active') {
			$('.nav-wrap').removeClass('nav-wrap--active');
			$('.hamburger').toggleClass('hamburger--open');
		}
		$('.header .nav__link').removeClass('nav__link--active');
		$(this).addClass('nav__link--active');

		let link = $(this).attr('href');

		$('html,body').animate({
			scrollTop: $(link)
				.offset()
				.top - header.innerHeight()
		}, 300);

	});

	$('.hamburger').click(function() {
		$(this).toggleClass('hamburger--open');
		$('body').toggleClass('body--overflow-hidden');
		$('.nav-wrap').toggleClass('nav-wrap--active');
	});

	$(".select2").each(function () {
		$(this).select2({
			minimumResultsForSearch: -1,
			dropdownParent: $(this).closest('.form__group')
		})

	});



});
