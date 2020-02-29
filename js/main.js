
$( ".icon" ).click(function() {
  // $( ".dropdown" ).slideToggle(1000);
  $(this).next('.dropdown').slideToggle(1000);
});

$( ".icon" ).click(function() {
  $(this).toggleClass("ruota");
});
