$(document).ready(function () {

  function is_touch_device() { return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)); } 
  
  if(!is_touch_device()) {
    $('.wrapper').hover(function() { $(this).toggleClass('active') });
  }
   else {
    $('.wrapper').on('click', function() {
      previewImage($(this));
    });
  }

  $('.show-action').on('click', function() {
    previewImage($(this).closest('wrapper'));
  });

  function previewImage($wrapper) {
    window.alert('preview');
  }

});