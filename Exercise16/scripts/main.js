$(document).ready(function(){ 

//************** part-2************************ */

$('#btnShow').on('click', function(){
$('.display-basic').show();
});


$('#btnHide').on('click', function(){
    $('.display-basic').hide();
    });



    $('#btnToggle').on('click', function(){
        $('.display-basic').toggle();
        });

//************************ part-3 ***************************/

        $('#btnFadeIn').on('click', function(){
            $('.display-fade').fadeIn('fast');
            });



            $('#btnFadeOut').on('click', function(){
                $('.display-fade').fadeOut('slow');
                });


                $('#btnFadeToggle').on('click', function(){
                    $('.display-fade').fadeToggle();
                    });
//******************** part-5 **************************************/
                    $('#btnSlideDown').on('click', function(){
                        $('.display-slide').slideDown(1000);
                        });

                        $('#btnSlideUp').on('click', function(){
                            $('.display-slide').slideUp(500);
                            });
    
                            $('#btnSlideToggle').on('click', function(){
                                $('.display-slide').slideToggle();
                                });
        

                        
}); //end