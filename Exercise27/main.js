/*
    Exercise 27
*/
$(document).ready(function (e) {

  /*=======================
      Regular Expressions
   =======================*/
  function validateEmail(email) {
    var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return reg.test(email);
  }

  function validate() {
    $('#result').text('');
    var email = $('#email').val();
    if (validateEmail(email)) {
      $('#result').text(email + ' ' + 'is valid');
      $('#result').css('color', 'green');
    } else {
      $('#result').text(email + ' ' + 'is not valid');
      $('#result').css('color', 'red');
    }
    return false;
  }

  $('#btnvalidate').on('click', validate);


  /************************************* */

  $('#numeric').keyup(function () {
    // var numericReg= /^[0-9]+$/i;

    $(this).val($(this).val().replace(/\D/, ''));

  });





  /*=======================
    Array Methods
  =======================*/


  var array = [1, 2, 3, 4, 5];

  var newArray = array.map(function (number) {
    return number * number;
  });

  console.log(newArray); // [1,4,9,16,25]

});