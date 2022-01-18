window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


//Create doors
document.addEventListener("DOMContentLoaded",
        function() {
            $ajaxUtils
                .sendGetRequest("data/months.json",
                    function(createdoors) {
                        var doors = "";
                        for (var i = 0; i < createdoors.months.length; i++) {
                            if (i == 0) {
                                doors += "<section class=\"row\">"
                            }
                            if (i % 3 == 0 && i != 0) {
                                doors += "</section>" + "<br>" + "<section class=\"row\">"
                            }
                            doors += "<div class=\"col-12 col-sm-4\">" +
                                "<button onmouseleave=\"closeDoor()\" style=\"background-image: url('./images/" + createdoors.months[i].image + "'); background-size: cover\">" +
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
    $(event.target).css("transform","perspective(1000px) translateX(-70px) rotateY(-100deg)"); 
    $(event.target).css("boxShadow", "none");
    $(event.target).css("borderColor", "5px solid #363636");
}};
//-- END-Open doors

//Close doors
var closeDoor = function(){
    $(event.target).children().css("transform","perspective(0px) translateX(0px) rotateY(0deg)"); 
    $(event.target).children().css("boxShadow", "2px 2px 5px #fff");
    $(event.target).children().css("borderColor", "5px solid #fff");
};
//-- END-Close doors
