window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

var jsonData;

//Create doors
document.addEventListener("DOMContentLoaded",
        function() {
            $ajaxUtils
                .sendGetRequest("data/months.json",
                    function(createdoors) {
                        jsonData = createdoors;
                        var doors = "";
                        for (var i = 0; i < createdoors.months.length; i++) {
                            if (i == 0) {
                                doors += "<section class=\"row\">"
                            }
                            if (i % 3 == 0 && i != 0) {
                                doors += "</section>" + "<br>" + "<section class=\"row\">"
                            }
                            doors += "<div class=\"col-12 col-sm-4\">" +
                                "<button onclick=\"createpopup()\" onmouseleave=\"closeDoor()\" style=\"background-image: url('./images/" + createdoors.months[i].image + "'); background-size: cover\">" +
                                "<div class=\"door\" onmouseenter=\"openDoor()\">" +
                                "<div class=\"month\">" +
                                createdoors.months[i].name +
                                "</div>" +
                                "</div>" +
                                "</button>" +
                                "</div>";
                            if (i == 11) {
                                doors += "</section>"
                            }
                        }
                        $("#doors").html(doors);
                    })
                });
//-- END-Create doors

//Open doors
var openDoor = function(){
    var curdate = new Date();
    var curmonth = curdate.toLocaleString('en-US', {month: 'long'});
    var doormonth = event.target.innerText;
    if(curmonth == doormonth){
    $(event.target).removeClass("door"); 
    $(event.target).addClass("opendoor"); 
}};
//-- END-Open doors

//Close doors
var closeDoor = function(){
    $(event.target).children().removeClass("opendoor"); 
    $(event.target).children().addClass("door"); 

};
//-- END-Close doors

//Generate popup windows
var createpopup = function() {
    console.log(jsonData);
    var popup = 
    "<div class=\"popup\">" +
    "<span onclick=\"closepopup()\" class=\"close\">&times;</span>" +
    "<p>" +
    retrievemessage(event.target.innerText) +
    "</p>" +
    "<p style=\"font-style: italic; font-size: 8px\">" +
    "Expires end of " +
    event.target.innerText +
    "</p>" +
    "</div>";
    $("#popups").append(popup); 
}
//-- END-Generate popup windows

//Close popup windows
var closepopup = function() {
    $(".popup").hide(); 
}
//-- END-Close popup windows

//Retrieve month
var retrievemessage = function(monthName) {
    for (var i = 0; i < jsonData.months.length; i++) {
        var monthData = jsonData.months[i];
        if (monthData.name == monthName) {
            return jsonData.months[i].message;
        }
    }
}
//-- END-Retrieve month