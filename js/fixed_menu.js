$( document ).ready(function() {

  $('.fixed-menu-container').prepend('<span class="navbar-switcher menu-burger"></span>');
  $('.fixed-menu').prepend('<div class="overlay"></div>');

  $('.fixed-menu').find('.navbar-switcher').on('click', function() {
    var $fixedMenu = $(this).closest('.fixed-menu');
    $fixedMenu.find('nav').toggleClass('active');
    $('body').toggleClass('freeze');

    var overlayAction = function toggleOverlay() {
      $overlay = $fixedMenu.find('.overlay');
      
      if($overlay.hasClass('animate')) {
        $overlay.toggleClass('animate')
        window.setTimeout(function() { $overlay.toggleClass('pre-animate') }, 300);
      }
      else {
        $overlay.toggleClass('pre-animate')
        window.setTimeout(function() { $overlay.toggleClass('animate') }, 50);
        $overlay.one('click', function() {
          $(this).parent().find('.navbar-switcher').trigger('click')
        });
      }
    }()

  });

  var docElem = $(document)[0],
  $header = $( '.fixed-menu' ),
  changeHeaderOn = 10;


  function scrollPage() {
    window.requestAnimationFrame(scrollPage)
    var sy = window.scrollY;
    if ( sy >= changeHeaderOn ) {
      $header.addClass('fixed-menu-shrink' );
    }
    else {
      $header.removeClass('fixed-menu-shrink' );
    }
  }
  function is_touch_device() { return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)); } 
  if(!is_touch_device()) window.requestAnimationFrame(scrollPage)
});
