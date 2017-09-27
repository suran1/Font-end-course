$(document).ready(function(){

    // Hide Error Message on page load
$('.error').hide();

// add even to the selected elements
$('.input-group').filter(':even').addClass('even');

//Add an on('bulr')to the FirstName

$('.input-group input').on('blur', function (){

    var input= $(this);

    var errorMessage = input.closest('.input-group').find('.requiredMsg');

if(input.val()=== ''){
    errorMessage.fadeIn();
}
else errorMessage.fadeOut();

});
//Add an on('bulr')to the LastName

$('#lastName').on('blur', function(){
    var input = $(this);
var msg = input.closest('.input-group').find('.requiredMsg');
if(input.val() === ''){
    msg.fadeIn();
}else {
    msg.fadeOut();
}
});

//Add an on('bulr')to the emailAddress
$('#emailAddress').on('bulr', function (){
    var input = $(this);
    var message= input.closest('.input-group').find('.requiredMsg');
    if(input.val() === ''){
        message.fadeIn();

    }else {
        message.fadeOut();
    }
});

    // check validate emailAddress


$('#emailAddress').on('blur', function(){
    var input =$(this);
    var value= input.val();
    var message =input.closest('.input-group').find('.emailMsg');

    if(value.indexOf('@'=== -1) || vaule.indexOf('.com')=== -1 ){
       message.fadeIn();

    }else{
        message.fadeOut();
    }
});

});