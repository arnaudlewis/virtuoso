$(document).ready(function () {
  'use strict';

  $('input[type=checkbox]').on('change', function () {
    if ($(this).is(':checked')) {
      $($(this).closest('.item')).find('.summary').height($($(this).closest('.item')).find('.summary p').innerHeight());
    } else {
      $($(this).closest('.item')).find('.summary').height(0);
    }
  });
});