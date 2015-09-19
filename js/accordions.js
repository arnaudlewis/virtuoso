$(document).ready(function () {
  'use strict';

  $('.accordions').map(function(index, component) {
    $(component).children().map(function(index, child) {
      var summaryNode = $($(child).find(".summary"));
      var summaryContent = summaryNode.html();
      summaryNode.html("");
      summaryNode.append('<div class="content"></div>');
      $(child).find('.summary .content').html(summaryContent);
    });
  });

  $('input[type=checkbox]').on('change', function () {
    if ($(this).is(':checked')) {
      $($(this).closest('.item')).find('.summary').height($($(this).closest('.item')).find('.summary .content').innerHeight());
    } else {
      $($(this).closest('.item')).find('.summary').height(0);
    }
  });
});