$(document).ready(function () {

	$(".scrollToNext").click(function () {
		let top = $(this).closest('section').next().offset().top;
		$('html,body').animate({
			scrollTop: top
		}, 300);
	});
	let a = Array.from($('header > a'));
	let u = Array.from($('section'));
	window.onclick(function (e) {
		e = event.target;
		if(e.tagName != a) return;
		let g = a.indexOf(e);
		let w = u[g];
		$('html,body').animate({
			scrollTop: w;
		}, 300);
	});
	$(".select2").each(function () {
		$(this).select2({
			minimumResultsForSearch: -1,
			dropdownParent: $(this).closest('.form__group')
		})

	});

});
