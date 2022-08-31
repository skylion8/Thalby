$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout: 3000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });
});
$(document).ready( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "clip",
            duration: 1000
        },
        hide: {
            effect: "clip",
            duration: 1000
        }
    });

    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
} );