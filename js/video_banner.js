$(document).ready(function () {
  'use strict';

  $('.play').on('click', function () {
    if($($(this).closest('.video-banner')).hasClass('active')) {
        $($(this).closest('.video-banner')).removeClass('active');
        $($(this).closest('.video-banner')).find('.video video').removeAttr('controls');
        $($(this).closest('.video-banner')).find('.video video').attr('muted', true);
    } else {
        $($(this).closest('.video-banner')).addClass('active');
        $($(this).closest('.video-banner')).find('.video video').get(0).pause();
        $($(this).closest('.video-banner')).find('.video video').get(0).currentTime = 0;
        $($(this).closest('.video-banner')).find('.video video').get(0).play();
        $($(this).closest('.video-banner')).find('.video video').attr('controls', true);
        $($(this).closest('.video-banner')).find('.video video').removeAttr('muted');
    }
  });
});