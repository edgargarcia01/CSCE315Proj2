var inputtext;
var out;

$(document).ready(new function() {                  // similar to int main()
    //inputtext = document.getElementById("inputtext");
    out = document.getElementById("out");

    //out.innerHTML = "testing";
    
});

$(document).on('keypress', function(e) {
    if(e.which == 13) {
        checkZip();
    }
});

function checkZip() {
    inputtext = document.getElementById("inputtext").value;
    out.innerHTML = inputtext;
}