$( document ).ready(function() { 
  $(".fa.fa-check.black").hide(); 
  blackCheck();
  beigeCheck(); 





var $animation_elements = $('.center-image');
var $container = $(".image-container");

function check_if_in_view() {
  var container_height = $container.height();
  var container_top_position = $container.scrollTop();
  var container_bottom_position = (container_top_position + container_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= container_top_position) &&
        (element_top_position <= container_bottom_position)) {
      console.log($element);
    } else {
      console.log("hi");
    }
  });
}

$container.on('scroll resize', check_if_in_view);
$container.trigger('scroll');

});


function blackCheck() { 
  $("#black-button").click(function(){  
    $(".fa.fa-check.black").show();
    $(".fa.fa-check.beige").hide();
  });
}

function beigeCheck() { 
  $("#beige-button").click(function(){ 
    $(".fa.fa-check.beige").show();
    $(".fa.fa-check.black").hide();
  });
}



