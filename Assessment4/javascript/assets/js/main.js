$(document).ready(function () {

    var maxLength = 50;
   $('#btnSubmit').on('click', function(e){

    $('text').keyup(function(){
       var length = $this.val().length;
       var length = maxLength- length;
        $('').text(length);
    });



       
  //3
  
var inputText= $('#firstName').val();
if(inputText.indexOf('a') > -1){
    console.log(inputText + ' ' + 'is valid');
    $('#firstName').css('color', 'green');

}else
console.log(inputText +  ' ' + 'is not valid');
$('#firstName').css('color', 'red');
    
}




// 
$('text').keydown(function(){
    alert('number is down');

});




   
   
});


// date object

var date = new Date(2018,0,14);

console.log(date.toDateString());



// form2

$('btnSubmit2'). on('click', function (e){

 $('#form2').hide().html('<h3> Thanks for submitting the from! </h3>');


    e.preventDefault();

});


// Q.N 4

document.getElementById('json-block-output').addEventLisitener('click', loadJsonObject);
function loadJsonObject(){ 
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://jsonplaceholder.typicode.com/post/1/', true);
xhr.onload = function (){
    if(this.status == 200){
        console.log(this.response);

    }
}

// send request
xhr.send();

}


// OR || alternativemethod


$.ajax({
    url: 'http://jsonplaceholder.typicode.com/post/1/comments',
    method: 'get',
    success: function (response){
        $('#json-block-output').html(response);
    },
    failure: function(){
        console.log('failure');
    }
})
$.get('http://jsonplaceholder.typicode.com/post/1/comments', function(response){
    $('#json-block-output').html(response);
});

});







