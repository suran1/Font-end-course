$(document).ready(function(){
// Code goes here

// ************************part-1*******************************

$('#btnOne').on('click', function(){
    alert('click me is trigged '); 

});


//************************** part-2*******************************
  $('#btnTwo').on('click', function(){
     $('.update-html').html('<h3> Hello World!');

  });

// *****************************part-3***************************


$('#btnThree').on('click', function(){

   $('#text-update').val("Hello World");

});

//****************************part-4********************************

$('#btnCopyHtml').on('click', function(){

    var html = $('.copy-html').html()


    $('.paste-html').html(html);
});




//**************************part-6************************************

$('#btnCopyValues').on('click', function(){
   
   var  value =  $('#copy-text').val()
   $('#paste-text').val(value);
    


    });
    
}); //end







