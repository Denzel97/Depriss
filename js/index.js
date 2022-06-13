// $(document).ready(function () {

//     //hide services details first
//     $('.dets').hide();

//     //show facilities management services details onclick 
//     $('#facil').click(function () {
//         $('#about_us1').hide();
//         $('#our-services1').fadeToggle(100);
//     });

// });

$(document).ready(function(){
    $(".dets").hide(); 
    $(".about-us").show();

    $('#facil').click(function(){
        $('#about_us1').hide();
        $("#our-services1").slideToggle();
    });
    $('#prop').click(function(){
        $('#about_us2').hide();
        $('#our-services1').hide();
        $("#our-services2").slideToggle();
        $("#about_us1").slideToggle();
    });
    $('#proj').click(function(){
        $('#about_us3').hide();
        $('#our-services1').hide();
        $('#our-services2').hide();
        $("#about_us1").show();
        $("#about_us2").show();
        $("#our-services3").show();
        
    });
});