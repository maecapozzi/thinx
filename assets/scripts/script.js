$( document ).ready(function() { 
  $(".fa.fa-check.beige").hide(); 
  blackCheck();
  beigeCheck(); 
  increment();
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


function increment() { 
  $(".increment").click(function(){ 
    var $button = $(this);
    var oldValue = $button.parent().find(".form-control.input-sm.bfh-number").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find(".form-control.input-sm.bfh-number").val(newVal);
  })
}