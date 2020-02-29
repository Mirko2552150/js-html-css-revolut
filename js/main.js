
$( ".icon" ).click(function() {
  $(this).next('.dropdown').slideToggle(1000); // NEXT FRATELLO SUBUTO DOPO / SLIDE TOGGLE SLIDE DOWN + SLIDE UP (TEMPO IN ms)
});

$( ".icon" ).click(function() {
  $(this).toggleClass("ruota"); // this per selezionare QUELL? ELEMENTO TRA ELEMENTI UGUALI
});
