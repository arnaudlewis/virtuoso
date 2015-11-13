$( document ).ready(function() {
  $('.tab').on('click', function() {
    $('.tab').removeClass('active');
    $('.tab-content').removeClass('active');
    $(this).addClass('active');
    var $currentTab = $(this);
    var tabIndex = -1;
    $.each($currentTab.closest('.tabs').children(), function(index, elem) {
      if($currentTab[0] == elem) tabIndex = index;
    });
    $($currentTab.closest('.tab-menu').find('.tab-content')[tabIndex]).addClass('active');
  })
});