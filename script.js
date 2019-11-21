var inputtext;
var out;
var city = '';
var ip = 'check';
var access_key = '145a6e1f8118cacc7daf96e2b3f5ab42';
var date = '';
var enddate = '';



$(document).ready(new function() {                  // similar to int main()
    //eventWidget();
    getLocation();
    getDate();
    out = document.getElementById("out");
    //city = "Houston";
    //getEvents();
});

$(document).on('keypress', function(e) {            // checks when enter key is pressed in text box
    if(e.which == 13) {
        inputtext = document.getElementById("inputtext").value;

        city = inputtext;
        
        outputInputTest();
    }
});

function outputInputTest() {                        // outputs to site
    inputtext = document.getElementById("inputtext").value;
    out.innerHTML = city;
}

function getLocation(){
    $.ajax({
        url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {

        // output the "capital" object inside "location"
        console.log(json);
                    
        city = json.city;
                    
        $(".city").append(city);

        out.innerHTML = city;
        //eventWidget();
        }
    });
}



function getDate() {
    var today = new Date();
    today.setHours(today.getHours() - 6);
    var latertoday = new Date(today);
    latertoday.setHours(latertoday.getHours() + 12);
    date = (new Date(today)).toISOString().slice(0, 19).replace("'T'", " ");
    //date = (new Date(today)).toISOString().slice(0, 10).replace("'T'", " ")+"T20:00:00";
    enddate = (new Date(latertoday)).toISOString().slice(0, 19).replace("'T'", " ");
    //document.getElementById("eventwidget").innerHTML = enddate ;
}