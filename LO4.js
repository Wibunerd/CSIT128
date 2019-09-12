var dogClick = 0;
var catClick = 0;

function roar(animal){
    if(animal == 1){
        dogClick++;
        document.getElementById("dogcount").innerHTML = dogClick;
        document.getElementById("des").innerHTML = "WO0f wOoF W00f";
        document.getElementById("field").value = "WO0f wOoF W00f";
        document.getElementById("pic").src = "doggo.jpg"; 
    }
    else if(animal == 2){
        catClick++;
        document.getElementById("catcount").innerHTML = catClick;
        document.getElementById("des").innerHTML = "meow meow N*GGA";
        document.getElementById("field").value = "meow meow N*GGA";
        document.getElementById("pic").src = "cat.jpg";
    }
}

var text = "One Fish, Two Fish, Red Fish, Blue Fish";
var textLength = text.length;

var upper = text.toUpperCase();
 
var lower = text.toLowerCase();

var fishIndex = text.indexOf("Fish"); 
var catIndex = text.indexOf("cat");
var redFound = text.includes("Red");
var greenFound = text.includes("Green");
var s1 = text.slice(10, 12); 
var s2 = text.slice(10); 
var s3 = text.slice(-9, -6); 
var s4 = text.slice(-9); 
document.getElementById("str").innerHTML = text;

//var d = new Date(); //current date & time
//var d = new Date(millisec);
//var d = new Date(dateString);
//var d = new Date(year, month, day, hour, min, sec, millisec);

var d = new Date(86400000);
alert(d)
//using YYYY-MM-DD format
var d = new Date("2000-01-30");
alert(d); 
//using YYYY-MM-DDTHH:MI:SS
var d = new Date("2000-01-30T10:00:00");
alert(d);
//The last 4 parameters can be omitted.
//Months count from 0 to 11. January is 0. December is 11.
var d = new Date(2000, 0, 1); // 01 Jan 2000
alert(d); 
//getDate() //Get the day as a number (1-31)
//getDay() //Get the weekday as a number (0-6)
        //Sunday is 0, Saturday is 6
//getFullYear() //Get the four digit year (yyyy)
//getHours()// Get the hour (0-23)
//getMilliseconds()// Get the milliseconds (0-999)
//getMinutes()// Get the minutes (0-59)
//getMonth()// Get the month (0-11)
 //         January is 0, December is 11
//getSeconds() //Get the seconds (0-59)
//getTime() //Get the milliseconds since 01/Jan/1970

var now = new Date();
alert("now is " + now);
alert("getDate returns " + now.getDate());
alert("getDay returns " + now.getDay());
alert("getFullYear returns " + now.getFullYear());
alert("getHours returns " + now.getHours());
alert("getMilliseconds returns " + now.getMilliseconds());
alert("getMinutes returns " + now.getMinutes());
alert("getMonth returns " + now.getMonth());
alert("getSeconds returns " + now.getSeconds());
alert("getTime returns " + now.getTime());

alert(now);

var tomorrow = new Date();
tomorrow.setDate(now.getDate() + 1);
alert(tomorrow);
var hundredDayAgo = new Date();
hundredDayAgo.setDate(now.getDate() - 100);
alert(hundredDayAgo);
s