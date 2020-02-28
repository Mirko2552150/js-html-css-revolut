// $('.menu-item-first .icon').click(function(){
//     $( ".dropdown-menu-first.visibility" ).css("display", "block");
// });
//
// $('.menu-item-first .icon').dblclick(function(){
//     $( ".dropdown-menu-first.visibility" ).css("display", "none");
// });
//
// $('.menu-item-second .icon').click(function(){
//     $( ".dropdown-menu-second.visibility" ).css("display", "block");
// });
//
// $('.menu-item-second .icon').dblclick(function(){
//     $( ".dropdown-menu-second.visibility" ).css("display", "none");
// });
//
// $('.menu-item-third .icon').click(function(){
//     $( ".dropdown-menu-third.visibility" ).css("display", "block");
// });
//
// $('.menu-item-third .icon').dblclick(function(){
//     $( ".dropdown-menu-third.visibility" ).css("display", "none");
// });

$('.iconUno').click(function(){
    $(".dropdown-menu-first").removeClass("visibility");
});

$('.iconUno').dblclick(function(){
    $(".dropdown-menu-first").addClass("visibility");
});

$('.iconDue').click(function(){
    $(".dropdown-menu-second").removeClass("visibility-due");
});

$('.iconDue').dblclick(function(){
    $(".dropdown-menu-second").addClass("visibility-due");
});

$('.iconTre').click(function(){
    $(".dropdown-menu-third").removeClass("visibility-tre");
});

$('.iconTre').dblclick(function(){
    $(".dropdown-menu-third").addClass("visibility-tre");
});

/* DA RIVEDERE DOMANI */
