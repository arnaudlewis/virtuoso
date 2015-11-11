$( document ).ready(function() {

  $('.fixed-menu').prepend('<span class="navbar-switcher menu-burger"></span>');

  $('.fixed-menu').find('.navbar-switcher').on('click', function() {
    $(this).parent().find('nav').toggleClass('active');
  });

  var docElem = $(document)[0],
  $header = $( '.fixed-menu' ),
  changeHeaderOn = 100;


  function scrollPage() {
    window.requestAnimationFrame(scrollPage)
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      $header.addClass('fixed-menu-shrink' );
    }
    else {
      $header.removeClass('fixed-menu-shrink' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  window.requestAnimationFrame(scrollPage)
});
