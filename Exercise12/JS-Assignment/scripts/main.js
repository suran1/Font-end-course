function update() {
    /* ===================
        Your code starts here
    =====================*/

    //****************************Create new array.*********************************************
    var message = [];

    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var emailAddress = getValue('emailAddress');

    //*******************If first name is empty. Add it to the array************

    if (firstName.length === 0) {
        message.push('First Name is required');
    }


    //***************If last name is empty. Add it to the array****************
    if (lastName.length === 0) {
        message.push('Last Name is required');
    }

    //**************Email is empty. Add it to the array*********************

    if (emailAddress.length === 0) {
        message.push('Email is required');
    }


    document.getElementById('error-list').innerHTML = message;

    //***************************Loop through array************************
    var error = "<ul>"

    for (var i = 0; i < message.length; i++) {

        error = error + '<li>' + message[i] + '</li>'
    }
    error = error + "</ul>"
    document.getElementById('error-list').innerHTML = error;

    //*********************Create javascript object for the user*************

    var user = {
        firstName: 'Suran',
        lastName: 'Wagle',
        emailAddress: 'er.suran@gmail.com',
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    };

    console.log(user.fullName());



    //*****************log the user object to the console*********************

    console.log(user);


    //**********************Check to see if everything is valid***************
    var isValid;
    if (message > 0) {

    }
    //*************Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.

    var currentDate = new Date();

    console.log(currentDate.toString());

    var submittedDate = new Date();
    console.log(submittedDate.toDateString());
    //***********Make the alert box.**************************************
    if (message.length === 0) {
        alert(submittedDate.toDateString());
    }


    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}