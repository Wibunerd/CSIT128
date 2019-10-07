function getTimetable(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        readyStateChangeHandler(xhttp);
    };

    xhttp.open("GET", "LabEx10.xml", true);
    xhttp.send();
}

function readyStateChangeHandler(){
    if(xhttp.readyState == 4 && xhttp.status == 200){
        handleStatusSuccess(xhttp);
    }else{
        handleStatusFailure(xhttp);
    }
}

function handleStatusFailure(xhttp){
    var displayDiv = document.getElementById("display");
    displayDiv.innerHTML = "XMLHttpRequest failed: status " + xhttp.status;
}

function handleStatusSuccess(xhttp){
    var xml = xhttp.responseXML;
    var timetableObj = parseXMLTimetable(xml)
    displayTimetable(timetableObj);
}

function parseXMLTimetable(xml){
    var timetableObj = {};

    var timetableEle = xml.getElementByTagName("timetable")[0];

    var desEle = timetableEle.getElementByTagName("destination")[0];
    timetableObj.destination = desEle.textContent;
    var departEle = timetableEle.getElementByTagName("depart")[0];
    timetableObj.depart = departEle.textContent;
    var trainEleList = timetableEle.getElementByTagName("train");
    timetableObj.trainList = parseTrainList(trainEleList);

}

function parseTrainList(trainEleList){
    var trainList = [];
    for(var i =0; i< trainEleList.length; i++){
        var trainElement = trainEleList[i];
        var trainObj = parseTrainEle(trainElement);
        trainList.push(trainObj);
    }
    return trainList;
}

function parseTrainEle(trainElement){
    var trainObj = {};

    var timeEle = trainElement.getElementByTagName("time")[0];
    trainObj.time = timeEle.textContent;
    var fromEle = trainElement.getElementByTagName("from")[0];
    trainObj.from = fromEle.textContent;
    var platformEle = trainElement.getElementByTagName("platform")[0];
    trainObj.platform = platformEle.textContent;
    
    return trainObj;
}


function displayTimetable(timetableObj){
    var html = "";

    html+= "<h1>"+timetableObj.destination+", due:"+timetableObj.depart+"</h1>";
    for(var i = 0; i<timetableObj.length; i++){
        var train = trainList[i];
        html += "<li>";
        html += train.from +", "+ train.time+", P"+train.platform;
        html += "</li>";
    }
}