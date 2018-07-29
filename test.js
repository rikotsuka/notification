$(function(){
  $("#bg").hide();

  $(".button").click(function(){
    $("#bg").fadeIn(300);
  });

  $(".ok").click(function(){
    $("#bg").fadeOut(300);
  });
});
