$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
   $.get(appendUrl, function(result){
   var appendElm= $('#append');
   var fullHTML = "";

   for (var i = 0; i<result.length; i++){
       var post = result[i];
       // <li>Inex: [index] Title: [object]
       
    var html = '<li>Index ' + i + 'Title' + post.title + '</li>';
    appendElm.append(html);
    }
});

    //prepend


    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';

   $.get(prependUrl, function (response){
       var prependElm =$('#prepend');
       

for(var i= 0; i<response.length; i++){
    var post = response[i];
    var html= '<li>Index ' + 'Title' + post.title + '</li>';

    prependElm.prepend(html);
}


   });
});