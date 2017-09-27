var DateFormatter = {
    //getshortTime
    getShortTime: function (date){
        var hour = date.getHours();
       var minute= date.getMinutes();
        var time = date.getTime();
        var second= date.getSeconds();
        totalTime = hour + ":" + minute + ":" + second ;
        if(totalTime >= "00:00:00" && totalTime <="11:59:59") {
        var hour12 = parseInt(hour);
        var newHour = 12 - hour12 ;
        console.log(newHour.toString() + ":" + minute  + "AM");
        }
        else return hour + ":" + minute + ":" + "PM";
    },

//     //getlongTime

//     getLongTime : function(date){
//     var hour= date.getHours();
//     var minute= date.getMinutes();
//     var second= date.getSeconds();

//     return hour + ":" + minute + ":" + second + " " + "AM";
// },

//getshortDate

getShortDate: function (date){
    var month= date.getMonth() + 1;
    var day= date.getDate();
    var year= date.getYear ();
    return month + '/' + day + '/' + year;
    // return date.getDate();
},

//getShortDate With Time

getShortDateTime: function (date){
    var month= date.getMonth() + 1;
    var day= date.getDay();
    var year= date.getYear ();
    var hour= date.getHours();
    var minute = date.getMinutes();

    return month + '/' + day + '/' + year + ' ' + hour + ':' + minute + 'AM';
},
// getlongDate
getLongDate: function (date){
     var month= date.getMonth() + 1;
    var day= date.getDay();
     var year= date.getYear ();

 return month + '/' + day + '/' + year ;
   
}




    
    };   
    // var getShortTime = DateFormatter.getShortTime(new Date());
    // console.log(getShortTime);

    // var getLongTime = DateFormatter.getLongTime(new Date());
    // console.log(getLongTime);
  var getShortDate = DateFormatter.getShortDate(new Date());
  console.log(getShortDate);

  var getShortDateTime = DateFormatter.getShortDateTime(new Date());
  console.log(getShortDateTime);

   var getLongDate = DateFormatter.getLongDate(new Date());
   console.log(getLongDate);




   