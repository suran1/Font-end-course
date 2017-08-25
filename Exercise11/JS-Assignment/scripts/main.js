var arrayItems = [];

function update() {
    
    //******************************************* Part -1 *******************************
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);
    var fullName = firstName + ' ' + lastName; 

    document.getElementById('p1_fullName').innerHTML = fullName; // space with fullName

    var isFilledOut;

    if(firstName.length> 0 && lastName.length > 0){  // check filldout or not in the name level
        isFilledOut = true;
    }else{
        isFilledOut = false;
    }

    document.getElementById('p1_valid').innerHTML = isFilledOut;
    document.getElementById('p1_fullNameLength').innerHTML =fullName.length;



    //******************************************** Part -2 *******************************************
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);

    var isValidEmail;

    if(emailAddress.indexOf('@') > -1){  // check valid emailadress or not
        isValidEmail= true;
    }else {
        isValidEmail= false;

    }

    document.getElementById('p2_email').innerHTML = emailAddress;
    document.getElementById('p2_valid').innerHTML = isValidEmail;
    document.getElementById('p2_emailLength').innerHTML = emailAddress.length;


    //**************************************** Part-3 *******************************************

    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    
   var isNumber;
    var parseNumber = parseInt(randomNumber); // convert random number is in integer
    if(parseNumber > 0){
        isNumber= true;
    }else {
        isNumber = false;
    }

    document.getElementById('p3_number').innerHTML = randomNumber;
    
    document.getElementById('p3_valid').innerHTML = isNumber;




    //********************************* Part- 4 ****************************************

    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);

    
    arrayItems.push(arrayInput);   // add the arryItems to the arrayInput

    document.getElementById('p4_arraylength').innerHTML = arrayItems.length;
    document.getElementById('p4_valid').innerHTML = arrayItems;
    

}

var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

