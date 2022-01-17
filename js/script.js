window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


//Create doors
document.addEventListener("DOMContentLoaded",
        function() {
            $ajaxUtils
                .sendGetRequest("data/months.json",
                    function(months) {
                        var doors = "";
                        for (var i = 0; i < months.months.length; i++) {
                            if (i == 0) {
                                doors += "<section class=\"row\">"
                            }
                            if (i % 3 == 0 && i != 0) {
                                doors += "</section>" + "<br>" + "<section class=\"row\">"
                            }
                            doors += "<div class=\"col-12 col-sm-4\">" +
                                "<button style=\"background-image: url('./images/" + months.months[i].image + "');\">" +
                                "<div id=\"open\" class=\"door\">" +
                                "<div class=\"month\">" +
                                months.months[i].name +
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
                    function(opendoor) {
                        document.addEventListener('mouseover',function(e){
    if(e.target && e.target.id== 'open'){
          console.log("hello");
     }
 });
                    });
                });
//-- END-Open doors