 
 $(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2500 } );

    $('[data-toggle="popover1"]').popover(); 
    $('[data-toggle="popover2"]').popover(); 
    $('[data-toggle="popover3"]').popover(); 


    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');                    
        }
    });
    $("#graciasmaestro").click(function(){
        $("#agradecimiento").modal('show');
    });
    
 
});
 