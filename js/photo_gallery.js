$(document).ready(function () {

  function is_touch_device() { return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)); } 
  
  if(!is_touch_device()) {
    $('.wrapper').hover(function() { $(this).toggleClass('active') });
  }
   else {
    $('.wrapper').on('click', function() {
      $(this).removeClass('active');
      previewImage($(this));
    });
  }

  $('.show-action').on('click', function() {
    previewImage($(this).closest('.wrapper'));
  });

  function previewImage($wrapper) {

    $('body').addClass('freeze');
    var url = $wrapper.find('.inner').data('image-url');
    $('body').prepend('<div class="preview-image"><img src="' + url + '" alt=""/></div>');
    
    $imgViewer = $('.preview-image');

    setTimeout(function() { $imgViewer.addClass('active') }, 50);
    $('.preview-image').one('click', function() {
      $imgViewer.removeClass('active');
      setTimeout(function() { $imgViewer.remove(); $('body').removeClass('freeze'); }, 300);
    })
  }

});