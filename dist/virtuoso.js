$(document).ready(function(){
	'use strict';

	$('input[type=checkbox]').on('change', function() {
		if($(this).is(':checked')) {
			$($(this).closest('.item')).find('.summary').height($($(this).closest('.item')).find('.summary p').innerHeight());
		} else {
			$($(this).closest('.item')).find('.summary').height(0);
		}
	});
});
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
$(document).ready(function(){
  'use strict';

  /* =============================NAVBAR COLLAPSE ANIMATION ========================= */
  $('.navbar-switcher').click(function() {
    var menu = $($(this).attr('href'));
    if(menu.hasClass('active')) menu.removeClass('active');
    else menu.addClass('active');
  });
 
  $(document).click(function() {
    $('.navbar-collapse').removeClass('active');
  });

//to prevent the closure
$('.navbar-collapse').click(function(event) {
  event.stopPropagation();
});
$('.navbar-switcher').click(function(event) {
  event.stopPropagation();
});
});
$(document).ready(function(){
  	'use strict';
  	$.each($('.slider'), function(index, slider) {
  		var slides = $(slider).find(".slide");
  		$.each(slides, function(index, slide) {
  			if(slides.length === 1) {
  				$(slide).find(".arrow-prev").remove();
  				$(slide).find(".arrow-next").remove();
  			}
  			$(slide).css("background-image", "url(" +  $(this).attr('data-image') + ")");
  			if(index === 0) $(slide).addClass("active");
  		});
  	});


	function previous(e) {
		e.preventDefault();
		var $slider = $(this).closest('.slider');
		var $current = $slider.find('.slide.active'),
		$prev = $current.prev('.slide');
		if (!$prev.length) {
			$prev = $slider.find('.slide:last');
		}
		$current.removeClass('active');
		$prev.addClass('active');
	}

	function next(e) {
		e.preventDefault();
		var $slider = $(this).closest('.slider');
		var $current = $slider.find('.slide.active'),
		$next = $current.next('.slide');
		if (!$next.length) {
			$next = $slider.find('.slide:first');
		}
		$current.removeClass('active');
		$next.addClass('active');
	}

    $('.slider .arrow-prev').on('click', previous);
    $('.slider .arrow-next').on('click', next);

    $( ".slider .slide" ).on( "swipeleft", previous );
});
