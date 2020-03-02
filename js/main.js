// $(".menu-item").click(function(){ // quando clicco l'icona
//     if ($(this).next('.dropdown').is(':visible')) { // se il menu che clicco è visibile
//         $(this).next('.dropdown').slideUp(1000); // il menu scompare
//
//         $(this).toggleClass("ruota");  // relativo icona che ruoterà
//     } else { // altrimenti
//         $('.menu-item').next('.dropdown').slideUp(1000); // tutti i menu-item scomparinanno
//         $(this).next('.dropdown').slideDown(1000); // ed il menu selezionato apparira
//
    //         $(this).toggleClass("ruota"); // relativo icona // anche l'icona ruoterà
//     }
// });

$('.menu-item').click(function(){  // quando clicco sul div menu-item
        if ($(this).children('.dropdown').is(':visible')){ // se il menu che clicco è visibile
            $(this).children('.dropdown').slideToggle(1000); // il menu selezionato scompare
            $('.menu-item').children('a').removeClass('ruota'); // relativo icona che ruoterà
        } else {
            $('.menu-item').children('.dropdown').slideUp(1000); // tutti i menu-item scomparinanno
            $(this).children('.dropdown').slideToggle(1000); // ed il menu selezionato apparira
            $('.menu-item').children('a').removeClass('ruota'); // tolgo la classe a tutti le icone facendole tornare nella posizione nativa
            $(this).children('a').addClass('ruota'); // ruoterà solo quella selezionata
        }
    });
