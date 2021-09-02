console.log(js/index.js);

$(document).ready(function() {
  $(".navLinks").hover(function() {
    $(this).css("color", "blueviolet");
    $(this).css("font-size", "250px");
  },
  function() {
    $(this).css("color", "black");
    $(this).css("font-size", "14px");
  }); 
});