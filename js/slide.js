$(document).ready(function () {
  'use strict';

  $.each($('.slider'), function (index, slider) {
    var slides = $(slider).find(".slide");
    $.each(slides, function (index, slide) {
      if (slides.length === 1) {
        $(slide).find(".arrow-prev").remove();
        $(slide).find(".arrow-next").remove();
      }
      $(slide).css("background-image", "url(" +  $(this).attr('data-image') + ")");
      if (index === 0) {
        $(slide).addClass("active");
      }
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
