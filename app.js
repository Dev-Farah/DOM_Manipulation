function textColor() {
    var text = document.getElementById("container-1");
    var txtColorName = prompt("Enter a color");
    text.style.color = txtColorName;
}

function bgColors() {
    background = document.getElementById("container-1");
    var bgColorName = prompt("Enter a Background color");
    background.style.backgroundColor = bgColorName;
}

function imgHandler(condition) {
    var image = document.getElementById("figure");
    if (condition == 'show') {
        image.style.display = "block";
        image.style.width = "25%";
        image.style.fontSize = "16px";
    } else if (condition == 'large') {
        image.style.width = "40%";
        image.style.fontSize = "25px";
    } else if (condition == 'small') {
        image.style.width = "15%";
        image.style.fontSize = "14px";
    } else if (condition == 'hide') {
        image.style.display = "none";
    }
}

function imgChange(condition, element) {
    if (condition == 'on') {
        element.src = "./images/On-Bulb.png";   
    } else {
        element.src = "./images/Off-Bulb.png";   
    }  
}

function paraColor() {
    var container4 = document.getElementById("container-4");
    var para = container4.getElementsByTagName("p");
    
    para[0].style.color = prompt("Enter color for paragraph one");
    para[1].style.color = prompt("Enter color for paragraph two");
    para[2].style.color = prompt("Enter color for paragraph three");
    para[3].style.color = prompt("Enter color for paragraph four");
}

function firstLastChild() {
    var container5 = document.getElementById("container-5");
    var firstPara = container5.firstChild.nextSibling.nextSibling.nextSibling;
    var lastPara = container5.lastChild.previousSibling.previousSibling.previousSibling;

    firstPara.style.color = prompt("Enter color for first paragraph");
    lastPara.style.color = prompt("Enter color for last paragraph");
}