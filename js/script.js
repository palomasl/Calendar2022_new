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
                                "<button style=\"background-image: url('./images/" + createdoors.months[i].image + "');\">" +
                                "<div class=\"door\">" +
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
document.addEventListener("DOMContentLoaded",
        function() {
            $ajaxUtils
                .sendGetRequest("data/months.json",
                    function(openDoor) {
                        document.addEventListener('mouseover',function(){
                        var curdate = new Date();
                        var curmonth = curdate.toLocaleString('en-US', {month: 'long'});
                        var doormonth = event.target.innerText;
                        //var door = document.getElementsByClassName("door");
                        if(curmonth == doormonth){
                        console.log("works")
                        //door.style.transform = "perspective(1000px) translateX(-70px) rotateY(-100deg)"; 
                        //door.style.boxShadow = "none";
                        //door.style.borderColor = "5px solid #363636";

     }
 });
                    });
                });
//-- END-Open doors

