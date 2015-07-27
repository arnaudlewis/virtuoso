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