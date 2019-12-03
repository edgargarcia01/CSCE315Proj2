var inputtext;
var city = '';
var ip = 'check';
var access_key = '145a6e1f8118cacc7daf96e2b3f5ab42';
var date = '';
var enddate = '';
var viewmode;



$(document).ready(new function() {                  // similar to int main()
    //eventWidget();
    //alert("Make sure to disable any adblockers and allow for unsafe scripts on your browser.");
    getLocation();
    getDate();

    if (localStorage.getItem("viewmode") === null)
    {
        localStorage.setItem("viewmode", 0);
        viewmode = 0;
        document.getElementById("sheetoption").innerHTML = '<link rel="stylesheet" type="text/css" href="stylesheets/stylesheet.css" media="screen">';
    } else {
        viewmode = localStorage.getItem("viewmode");
        colorBlindFunction();
    }

    //getEvents();
});

$(document).on('keypress', function(e) {            // checks when enter key is pressed in text box
    if(e.which == 13) {
        inputtext = document.getElementById("inputtext").value;

        city = inputtext;
        outputCity();
    }
});


function getLocation(){
    $.ajax({
        url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {

        // output the "capital" object inside "location"
        console.log(json);
                    
        city = json.city;
                    
        $(".city").append(city);

        //eventWidget();
        outputCity();
        }
    });
}

function outputCity() {
    document.getElementById("inputtext").value = city;
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

function changeCBVal() {
    if (viewmode == 0)
    {
        viewmode = 1;
        localStorage.viewmode = 1;
    } 
    else if (viewmode == 1) 
    {
        viewmode = 0;
        localStorage.viewmode = 0;
    }
    colorBlindFunction();
}

function colorBlindFunction() {
  
    if (viewmode == 0)
    {
        document.getElementById("sheetoption").innerHTML = '<link rel="stylesheet" type="text/css" href="stylesheets/stylesheet.css" media="screen">';
    } 
    if (viewmode == 1) {
        document.getElementById("sheetoption").innerHTML = '<link rel="stylesheet" type="text/css" href="stylesheets/stylesheetcb.css" media="screen">';
    }
  }
