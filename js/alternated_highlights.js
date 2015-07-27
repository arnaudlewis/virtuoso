$(document).ready(function(){
	'use strict';

	function displayMobile() {
		$.each($('.alternated-highlights'), function(index, component) {
			$.each($(component).find('.item'), function(index, item) {
				var image = $(item).find('.image-container');
				image.remove();
				$(item).find('.head-text').after(image);
			});
		});
	}@
	function displayDesktop() {
		$.each($('.alternated-highlights'), function(index, component) {
			$.each($(component).find('.item'), function(index, item) {
				var image = $(item).find('.image-container');
				image.remove();
				var textWrapper = $(item).find('.text-wrapper');
				if($(item).hasClass('alternate')) {
					$(textWrapper).after(image);
				} else {
					$(textWrapper).before(image);
				}
			});
		});
	}

	function resize() {
		if($(window).width() <= 320) {
			displayMobile(); 
		} else {
			displayDesktop();
		}
	}

	resize();
	$(window).resize(function(){
		resize();
	});

});