window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


const jsonData = require('./data/months.json'); 
console.log(jsonData);

/*createDoors = function() {
  var doors = "";
    for (var i = 0; i < months.months.length; i++) {
        if (i == 0) {
            doors += "<section class=\"row\">"
        }
        if (i % 3 == 0 && i != 0) {
            doors += "</section>" + "<br>" + "<section class=\"row\">"
        }
        doors += "<div class=\"col-12 col-sm-4\">" +
            "<button class=\"card text-center\">" +
            "<div class=\"door\">" + 
            "<div class=\"month\">" + 
            months.months[i].name + 
            "</div>" +
            "</div>" + 
            "</button>" 
            + "</div>";
        if (i == 11) {
            doors += "</section>"
        }
    }
    console.log(doors);
    $("#doors").html(doors);  
}
*/