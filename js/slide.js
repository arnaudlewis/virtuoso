$(document).ready(function(){
  'use strict';

$.each($(".slide"), function(index, slide) {
 $(slide).css("background-image", "url(" +  $(this).attr('data-image') + ")");
});
});