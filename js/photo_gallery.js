$(document).ready(function () {

  if($('.photo-gallery').length > 0) $('body').prepend('<div class="preview-image"><img alt=""/></div>');

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
    $imgViewer = $('.preview-image');

    $('body').addClass('freeze');
    var url = $wrapper.find('.inner').data('image-url');
    $imgViewer.find('img').attr('src', url);
    $imgViewer.addClass('pre-active');
    

    setTimeout(function() { $imgViewer.addClass('active') }, 50);
    $imgViewer.one('click', function() {
      setTimeout(function() { removeImageViewer($imgViewer); $('body').removeClass('freeze'); }, 300);
    })

    function removeImageViewer($imgViewer) {
      $imgViewer.removeClass('active')
      setTimeout(function() { $imgViewer.removeClass('pre-active') }, 300);
    }
  }

});