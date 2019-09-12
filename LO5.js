function sayHi(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var greetingMes = "Hi "+firstname+" "+lastname+"!";
    var greets = document.getElementById("greeting");
    greets.innerHTML = greetingMes;  
    greets.style.color = "orange";
    greets.style.fontSize="30px";
    greets.style.fontStyle = "italic"; 
}

function clearPage(){
    var firstname = document.getElementById("firstname");
    firstname.value="";
    var lastname = document.getElementById("lastname");
    lastname.value="";
    clrGreet = document.getElementById("greeting");
    clrGreet.innerHTML= "";
}

function showResult(){
    var firstNumTxt = document.getElementById("firstnum").value;
    var firstNum = Number(firstNumTxt);
    var secondNumTxt = document.getElementById("secondnum").value;
    var secondNum = Number(secondNumTxt);
    var operator = document.getElementById("operators").value;
    var result = document.getElementById("result");
    var answer;
    if(operator=="plus"){ 
        answer = firstNum+secondNum;
    }else if(operator=="minus"){
        answer = firstNum-secondNum;
    }else if(operator=="multiple"){
        answer = firstNum*secondNum;
    }else{
        return false;
    }
    result.value = answer;
}

function rollDice(){
    var diceImg = document.getElementById("rollpic");
    var result = Math.floor(Math.random()*6 + 1);

    switch(result){
        case 1:
            diceImg.src = "dice1.png";
            break;
        case 2:
            diceImg.src = "dice2.png";
            break;
        case 3:
            diceImg.src = "dice3.png";
            break;
        case 4:
            diceImg.src = "dice4.png";
            break;
        case 5:
            diceImg.src = "dice5.png";
            break;
        default:
            diceImg.src = "dice6.png";
            break;
    }

}

function showClock(){
    var now = new Date();
    var display = now.getHours()+":"+ now.getMinutes()+":"+now.getSeconds();
    document.getElementById("clockdisplay").innerHTML= display;
}

var ok = confirm("Are you over 18")
if(ok){
    alert("Ok, come on in");
}else{
    alert("Who even clicks no");
}

var name = prompt("Please enter your name", "cat in the hat");
if(name != null){
    alert("Hello " + name);
}
/*
function addSubject(){
    // ask user for a subject code
    var subject = prompt("Enter subject code");
    if(subject != null){
    // create a new paragraph holding the subject code
        var para = document.createElement("p");
        var subjectText = document.createTextNode(subject);
        para.appendChild(subjectText);
        // add the new paragraph element to the subject div
        var subjectDiv = document.getElementById("subjectList");
        subjectDiv.appendChild(para);
    }
}
*/
function addSubject(){
    // ask user for a subject code
    var subject = prompt("Enter subject code");
    if(subject != null){
    // create a new list item holding the subject code
    var li = document.createElement("li");
    var subjectText = document.createTextNode(subject);
    li.appendChild(subjectText);
    // add the new list item element to the unordered list
    var subjectUL = document.getElementById("subjectList");
    subjectUL.appendChild(li);
    }
   }

var counter = 0;
var counterSchedule;
function startCounterAnimation(){
 // start the counter animation
    counterSchedule = setInterval(showCounter, 1000);
}
function showCounter(){
    // increase the counter by 1
    counter = counter + 1;
    // show the counter
    var counterSpan = document.getElementById("counter");
    counterSpan.innerHTML = counter;
}
function stopCounterAnimation(){
    clearInterval(counterSchedule);
}

//The push() method adds a new element to the end of an array
var subjects = ["ISIT206", "MATH121", "CSCI301"];
subjects.sort();
var numbers = [1, 20, -3, 4];
numbers.sort();
alert(numbers);
numbers.sort(function (a, b) { return a - b; });
alert(numbers);
/*In general:
    the_array_to_be_sorted.sort(the_sorting_function ...);
    The sorting function function (a, b) must
        ● return a positive value to indicate a > b
        ● return a negative value to indicate a < b
        ● return zero to indicate a = b*/
ninja_results = [
    {name: "John", level: 4, seconds: 85},
    {name: "Peter", level: 2, seconds: 35},
    {name: "Kate", level: 4, seconds: 80},
    {name: "Luke", level: 5, seconds: 120}
];//We want to sort the ninja results based on the level first, if two persons achieved the same level, then we compare the number of seconds.

ninja_results.sort(
    function (p1, p2) {
    if (p1["level"] > p2["level"]){
    return 1;
   }
   if (p1["level"] < p2["level"]){
    return -1;
   }
    //at this point the two persons have the same level
   if (p1["seconds"] < p2["seconds"]){
    return 1;
   }
   if (p1["seconds"] > p2["seconds"]){
    return -1;
   }
   return 0;
    }
);