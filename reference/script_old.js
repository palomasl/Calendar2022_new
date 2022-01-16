window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

//Introduce messages
var insertMessage = function(months) {
    //var message = months.months[0].message
    //$("#message").html(message);
    var doors = "";
    for (var i = 0; i < months.months.length; i++) {
        if (i == 0) {
            doors += "<section class=\"row\">"
        }
        if (i % 3 == 0 && i != 0) {
            doors += "</section>" + "<br>" + "<section class=\"row\">"
        }
        doors += "<div class=\"col-12 col-sm-4\">" +
            "<button id=" + "\"" + months.months[i].name + "\"" + "class=\"card text-center\" style=\"background-image:url(./images/test.jpg); background-size: cover;\" onclick=\"showPopup\" onmouseover=\"openDoorJan()\" onmouseleave=\"closeDoorJan()\">" +
            "<div class=\"card_doorJan\">" + "<div class=\"month\">" + months.months[i].name + "</div>" +
            "</div>" + "</button>" + "</div>";
        if (i == 11) {
            doors += "</section>"
        }
    }
    console.log(doors);
    $("#doors").html(doors);



    var message = "";
    for (var i = 0; i < months.months.length; i++) {
        message += "<div id=\"PopUp\" class=\"popup-content\">" +
            "<span class=\"close\">" + "&times;" + "</span>" +
            "<p>" + months.months[i].message + "</p>" +
            "<p style=\"font-style: italic; font-size: 8px\">" + "Expires on the 31st of January" + "</p>" +
            "</div>";
    }
    $(".test").html(message);
    
}
//--End Introduce messages


//Popup Windows
var curdate = new Date();
var curmonth = curdate.getMonth() + 1;

//JANUARY
// Get the popup
var popup = document.getElementById("PopUp");

// Get the <span> element that closes the popup
var span = (document.getElementsByClassName("close"))[0];

// When the user clicks on the button, open the popup
//document.addEventListener("click", showPopup);
lookupMonth = function(val) {
    var months = {
        'January': '1',
        'February': '2',
        'March': '3',
        'April ': '4',
        'May': '5',
        'June': '6',
        'July': '7',
        'August': '8',
        'September': '9',
        'October': '10',
        'November': '11',
        'December': '12'
    }
    var result = lookupMonth[val];
    return result;
}
showPopup = function() {
    var doormonth = getElementById(months.months[i].name);
    if (curmonth >= lookupMonth(doormonth))
        popup.style.display = "block";
}


// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    popup.style.display = "none";
}
//-- End of Popup Windows
//Open and close doors

//Load JSON
$.ajax({
    async: false,
    url: "data/months.json",
    success: function(months) {
        insertMessage(months);
    }
});
//--End Load JSON




//JANUARY
var doorJan = document.getElementsByClassName("card_doorJan")[0];

openDoorJan = function() {
    if (curmonth >= 1) {
        doorJan.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorJan.style.boxShadow = "none";
        doorJan.style.borderColor = "5px solid #363636";
    }
}

closeDoorJan = function() {
    doorJan.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorJan.style.boxShadow = "2px 2px 5px #fff";
    doorJan.style.borderColor = "5px solid #fff";
}
//--End of JANUARY
//FEBRUARY
var doorFeb = document.getElementsByClassName("card_doorFeb")[0];

openDoorFeb = function() {
    if (curmonth >= 2) {
        doorFeb.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorFeb.style.boxShadow = "none";
        doorFeb.style.borderColor = "5px solid #363636";
    }
}

closeDoorFeb = function() {
    doorFeb.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorFeb.style.boxShadow = "2px 2px 5px #fff";
    doorFeb.style.borderColor = "5px solid #fff";
}
//--End of FEBRUARY
//MARCH
var doorMar = document.getElementsByClassName("card_doorMar")[0];

openDoorMar = function() {
    if (curmonth >= 3) {
        doorMar.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorMar.style.boxShadow = "none";
        doorMar.style.borderColor = "5px solid #363636";
    }
}

closeDoorMar = function() {
    doorMar.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorMar.style.boxShadow = "2px 2px 5px #fff";
    doorMar.style.borderColor = "5px solid #fff";
}
//--End of MARCH
//APRIL
var doorApr = document.getElementsByClassName("card_doorApr")[0];

openDoorApr = function() {
    if (curmonth >= 4) {
        doorApr.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorApr.style.boxShadow = "none";
        doorApr.style.borderColor = "5px solid #363636";
    }
}

closeDoorApr = function() {
    doorApr.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorApr.style.boxShadow = "2px 2px 5px #fff";
    doorApr.style.borderColor = "5px solid #fff";
}
//--End of APRIL
//MAY
var doorMay = document.getElementsByClassName("card_doorMay")[0];

openDoorMay = function() {
    if (curmonth >= 5) {
        doorMay.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorMay.style.boxShadow = "none";
        doorMay.style.borderColor = "5px solid #363636";
    }
}

closeDoorMay = function() {
    doorMay.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorMay.style.boxShadow = "2px 2px 5px #fff";
    doorMay.style.borderColor = "5px solid #fff";
}
//--End of MAY
//JUNE
var doorJun = document.getElementsByClassName("card_doorJun")[0];

openDoorJun = function() {
    if (curmonth >= 6) {
        doorJun.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorJun.style.boxShadow = "none";
        doorJun.style.borderColor = "5px solid #363636";
    }
}

closeDoorJun = function() {
    doorJun.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorJun.style.boxShadow = "2px 2px 5px #fff";
    doorJun.style.borderColor = "5px solid #fff";
}
//--End of JUNE
//JULY
var doorJul = document.getElementsByClassName("card_doorJul")[0];

openDoorJul = function() {
    if (curmonth >= 7) {
        doorJul.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorJul.style.boxShadow = "none";
        doorJul.style.borderColor = "5px solid #363636";
    }
}

closeDoorJul = function() {
    doorJul.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorJul.style.boxShadow = "2px 2px 5px #fff";
    doorJul.style.borderColor = "5px solid #fff";
}
//--End of JULY
//AUGUST
var doorAug = document.getElementsByClassName("card_doorAug")[0];

openDoorAug = function() {
    if (curmonth >= 8) {
        doorAug.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorAug.style.boxShadow = "none";
        doorAug.style.borderColor = "5px solid #363636";
    }
}

closeDoorAug = function() {
    doorAug.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorAug.style.boxShadow = "2px 2px 5px #fff";
    doorAug.style.borderColor = "5px solid #fff";
}
//--End of AUGUST
//SEPTEMBER
var doorSep = document.getElementsByClassName("card_doorSep")[0];

openDoorSep = function() {
    if (curmonth >= 9) {
        doorSep.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorSep.style.boxShadow = "none";
        doorSep.style.borderColor = "5px solid #363636";
    }
}

closeDoorSep = function() {
    doorSep.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorSep.style.boxShadow = "2px 2px 5px #fff";
    doorSep.style.borderColor = "5px solid #fff";
}
//--End of SEPTEMBER
//OCTOBER
var doorOct = document.getElementsByClassName("card_doorOct")[0];

openDoorOct = function() {
    if (curmonth >= 10) {
        doorOct.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorOct.style.boxShadow = "none";
        doorOct.style.borderColor = "5px solid #363636";
    }
}

closeDoorOct = function() {
    doorOct.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorOct.style.boxShadow = "2px 2px 5px #fff";
    doorOct.style.borderColor = "5px solid #fff";
}
//--End of OCTOBER
//NOVEMBER
var doorNov = document.getElementsByClassName("card_doorNov")[0];

openDoorNov = function() {
    if (curmonth >= 11) {
        doorNov.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorNov.style.boxShadow = "none";
        doorNov.style.borderColor = "5px solid #363636";
    }
}

closeDoorNov = function() {
    doorNov.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorNov.style.boxShadow = "2px 2px 5px #fff";
    doorNov.style.borderColor = "5px solid #fff";
}
//--End of NOVEMBER
//DECEMBER
var doorDec = document.getElementsByClassName("card_doorDec")[0];

openDoorDec = function() {
    if (curmonth >= 12) {
        doorDec.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)";
        doorDec.style.boxShadow = "none";
        doorDec.style.borderColor = "5px solid #363636";
    }
}

closeDoorDec = function() {
    doorDec.style.transform = "perspective(0px) translateX(0px) rotateY(0deg)";
    doorDec.style.boxShadow = "2px 2px 5px #fff";
    doorDec.style.borderColor = "5px solid #fff";
}
//--End of DECEMBER
//-- End of Open and close doors


//Expiration of coupon
//JANUARY
expiredJan = function() {
    if (curmonth != 1) {
        document.getElementById("expJan").innerHTML = "Expired";
        document.getElementById("expJan").style.color = "red";
        document.getElementById("expJan").style.fontSize = "16px";
    }
}
expiredJan();
//--End of JANUARY
//FEBRUARY
expiredFeb = function() {
    if (curmonth != 2) {
        document.getElementById("expFeb").innerHTML = "Expired";
        document.getElementById("expFeb").style.color = "red";
        document.getElementById("expFeb").style.fontSize = "16px";
    }
}
expiredFeb();
//--End of FEBRUARY
//MARCH
expiredMar = function() {
    if (curmonth != 3) {
        document.getElementById("expMar").innerHTML = "Expired";
        document.getElementById("expMar").style.color = "red";
        document.getElementById("expMar").style.fontSize = "16px";
    }
}
expiredMar();
//--End of MARCH
//APRIL
expiredApr = function() {
    if (curmonth != 4) {
        document.getElementById("expApr").innerHTML = "Expired";
        document.getElementById("expApr").style.color = "red";
        document.getElementById("expApr").style.fontSize = "16px";
    }
}
expiredApr();
//--End of APRIL
//MAY
expiredMay = function() {
    if (curmonth != 5) {
        document.getElementById("expMay").innerHTML = "Expired";
        document.getElementById("expMay").style.color = "red";
        document.getElementById("expMay").style.fontSize = "16px";
    }
}
expiredMay();
//--End of MAY
//JUNE
expiredJun = function() {
    if (curmonth != 6) {
        document.getElementById("expJun").innerHTML = "Expired";
        document.getElementById("expJun").style.color = "red";
        document.getElementById("expJun").style.fontSize = "16px";
    }
}
expiredJun();
//--End of JUNE
//JULY
expiredJul = function() {
    if (curmonth != 7) {
        document.getElementById("expJul").innerHTML = "Expired";
        document.getElementById("expJul").style.color = "red";
        document.getElementById("expJul").style.fontSize = "16px";
    }
}
expiredJul();
//--End of JULY
//AUGUST
expiredAug = function() {
    if (curmonth != 8) {
        document.getElementById("expAug").innerHTML = "Expired";
        document.getElementById("expAug").style.color = "red";
        document.getElementById("expAug").style.fontSize = "16px";
    }
}
expiredAug();
//--End of AUGUST
//SEPTEMBER
expiredSep = function() {
    if (curmonth != 9) {
        document.getElementById("expSep").innerHTML = "Expired";
        document.getElementById("expSep").style.color = "red";
        document.getElementById("expSep").style.fontSize = "16px";
    }
}
expiredSep();
//--End of SEPTEMBER
//OCTOBER
expiredOct = function() {
    if (curmonth != 10) {
        document.getElementById("expOct").innerHTML = "Expired";
        document.getElementById("expOct").style.color = "red";
        document.getElementById("expOct").style.fontSize = "16px";
    }
}
expiredOct();
//--End of OCTOBER
//NOVEMBER
expiredNov = function() {
    if (curmonth != 11) {
        document.getElementById("expNov").innerHTML = "Expired";
        document.getElementById("expNov").style.color = "red";
        document.getElementById("expNov").style.fontSize = "16px";
    }
}
expiredNov();
//--End of NOVEMBER
//DECEMBER
expiredDec = function() {
    if (curmonth != 12) {
        document.getElementById("expDec").innerHTML = "Expired";
        document.getElementById("expDec").style.color = "red";
        document.getElementById("expDec").style.fontSize = "16px";
    }
}
expiredDec();
//--End of DECEMBER
//--End of Expiration of coupons