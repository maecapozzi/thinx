$( document ).ready(function() { 
  $(".fa.fa-check.black").hide();
  blackCheck();
  beigeCheck(); 
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