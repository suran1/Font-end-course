/*
    Exercise 26 
*/
var productList = [{
        product: 'Shirt',
        price: 10.00,
        color: 'Blue'
    },
    {
        product: 'Pants',
        price: 15.00,
        color: 'Brown'
    },
    {
        product: 'Shoes',
        price: 10.00,
        color: 'Blue'
    }
];
//////////////////////////////////////////Part 1
/*
    This function should get the total price of the items in your cart.

var productList = [
    {product: 'Shirt', price: 10.00, color:'Blue'},
    {product: 'Pants', price: 10.00, color:'Brown'},
    {product: 'Shoes', price: 15.00, color: 'Blue'}
];

    The total is 35.

*/
function getTotalCost(cart) {
    var totalCost = 0;

    for(var i = 0; i < cart.length; i++){
           totalCost += cart[i].price;
    }

    /*Calculate the total cost of the cart.*/
    /* Your Code Here */

    return totalCost;
}

var totalCost = getTotalCost(productList);
console.log(totalCost);



//////////////////////////////////////////Part 2
/*
    This function should get the total price of the items in your cart AND add tax to it.
var productList = [
    {product: 'Shirt', price: 10.00, color:'Blue'},
    {product: 'Pants', price: 10.00, color:'Brown'},
    {product: 'Shoes', price: 15.00, color: 'Blue'}
];
    The total is 35.
    Total plus tax is 36.75
*/

function getTotalCostPlusTax(cart) {
    var tax = 0.05;
    var totalCart = getTotalCost(cart);

    //Your Code Here

    return (totalCart * tax) + totalCart;
}

var totalCostPlusTax = getTotalCostPlusTax(productList);
console.log(totalCostPlusTax);


//////////////////////////////////////////Part 3
/*
   Use jQuery to perform the following tasks 
*/



//3.1 -  Select the element with the id 'title' and add the class 'color' to it.

//3.2 - Select the odd articles  inside the '.container' element.  Add the class 'odd' to them.
//3.3 - Select and remove the class 'active' from the Home nav link. Add active to the 'About' link.

$(document).ready(function(){

    // Answer of 3.1

   $('#title').addClass('color');

   // Answer of 3.2  

    $('.container .item:nth-child(odd)').addClass('odd');

   

    // Answer of 3.3

    $('nav ul .active').removeClass('active');
    $('.about').addClass('active');

//  Alternative method

    $('nav li').click(function(e){

     $('.active').removeClass('active');
     $('.about').addClass('active');
        e.preventDefault();
     });
});






