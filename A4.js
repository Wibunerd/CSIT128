var pos = "upper-lower";
function change_para(){
    if(pos == "upper-lower"){
        document.getElementById("lower").innerHTML = 'I have read the policy for plagiarism at Wollongong University. I declare that this assignment solution is entirely my work.';
        document.getElementById("upper").innerHTML = "I acknowledge that this assignment is scheduled to be marked in the computer lab in Week 8 and Week 9, and absence from the labs may result in zero mark.";
        pos = "lower-upper";
    }else{
        document.getElementById("upper").innerHTML = 'I have read the policy for plagiarism at Wollongong University. I declare that this assignment solution is entirely my work.';
        document.getElementById("lower").innerHTML = "I acknowledge that this assignment is scheduled to be marked in the computer lab in Week 8 and Week 9, and absence from the labs may result in zero mark.";
        pos = "upper-lower";
    }
}

function display(animal){
    if(animal=='cat'){
        document.getElementById('txtfield').innerHTML = "User clicks cat";
        document.getElementById("msg").innerHTML = "Cat is clicked";
        document.getElementById("image").src = "cat.jpg";
    }else if(animal == 'dog'){
        document.getElementById('txtfield').innerHTML = "User clicks dog";
        document.getElementById("msg").innerHTML = "Dog is clicked";
        document.getElementById("image").src = "doggo.jpg";
    }else{
        document.getElementById('txtfield').innerHTML = "User clicks frog";
        document.getElementById("msg").innerHTML = "Frog is clicked";
        document.getElementById("image").src = "frog.jpg";
    }
}

var hours = 0;
var minutes = 0;

function increase_hour(){
    hours++;
    if(hours==24){
        hours = 0;
    }
    document.getElementById('hrs').innerHTML = hours;
}
function increase_minute(){
    minutes++;
    if(minutes==60){
        minutes = 0;
    }
    document.getElementById('min').innerHTML = minutes;
}

var frogpos = 2;
function hop_org(){
    if(frogpos==2){
        document.getElementById('pos0').src = "frog.jpg";
        document.getElementById('pos1').src = "cat.jpg";
        document.getElementById('pos2').src = "doggo.jpg";
        frogpos = 0;
    }
}

function hop_new(){
    if(frogpos==0){
        document.getElementById('pos0').src = "cat.jpg";
        document.getElementById('pos1').src = "doggo.jpg";
        document.getElementById('pos2').src = "frog.jpg";
        frogpos = 2;
    }
}

function cat_talk_org(){
    if(frogpos == 2){
        alert("Don't click me, click the frog");
    }
}

function dog_talk_org(){
    if(frogpos==2){
        alert("Don't click me, click the frog");
    }
}

function cat_talk_new(){
    if(frogpos==0){
        alert("Don't click me, click the frog");
    }
}

function dog_talk_new(){
    if(frogpos==0){
        alert("Don't click me, click the frog");
    }
}