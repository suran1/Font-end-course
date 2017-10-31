$(document).ready(function () {


    $('#btnAddNumbers').on('click', function () {
        /*
            Retrieve the numbers from the input fields
        */
        
        var firstNumber = parseInt($('#txtFirstNumber').val());

        var secondNumber = parseInt($('#txtSecondNumber').val());
        
        /*
            Add the two numbers together
        */
        var sum = firstNumber + secondNumber;

           console.log(sum);

         //$('#txtThirdNumber').val(sum);
        /*
            If our sum is greater than 10. Add a blue class to the input.
            If our sum is less than 10, add a red class
        */
        if(sum > 10){
           
            $('#txtFirstNumber').addClass('blue');
            $('#txtFirstNumber').removeClass('red');

            $('#txtSecondNumber').addClass('blue');
            $('#txtSecondNumber').removeClass('red');

        } else {
            $('#txtSecondNumber').addClass('red');
            $('#txtSecondNumber').removeClass('blue');
            $('#txtFirstNumber').addClass('red');
            $('#txtFirstNumber').removeClass('blue');
        }

        /*
           
        Update the third input field with our value.
        */

        $('#txtThirdNumber').val(sum);
    });



});