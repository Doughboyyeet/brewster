$(document).ready(function(){
  $("button").click(function(){
    $("img").animate({
      left: '300px',
      opacity: '1',
      height: '300px',
      width: '300px',
    });
  });
});
$(document).ready(function(){
  $("#hide").click(function(){
    $("img").hide();
  });
  $("#show").click(function(){
    $("img").show();
  });
});