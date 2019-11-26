var inputtext;
var city = '';
var ip = 'check';
var eventW;
var access_key = '145a6e1f8118cacc7daf96e2b3f5ab42';
var date = '';
var enddate = '';
var boxlist = '';
var box = '<div class="eventbox">';



$(document).ready(new function() {                  // similar to int main()

    //getLocation();
    getDate();
});

$(document).on('keypress', function(e) {            // checks when enter key is pressed in text box
    if(e.which == 13) {
        inputtext = document.getElementById("inputtext").value;

        city = inputtext;
        //outputCity();
        getEvents();
    }
});

function outputCity() {
    document.getElementById("inputtext").value = city;
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

        outputCity();
        getEvents();
        }
    });
}

function eventWidget() {
    
    document.getElementById("eventwidget").innerHTML = '<div w-type="event-discovery" w-tmapikey="pLOeuGq2JL05uEGrZG7DuGWu6sh2OnMz" w-googleapikey="YOUR_GOOGLE_API_KEY" w-keyword="" w-theme="listviewthumbnails" w-colorscheme="light" w-width="401" w-height="600" w-size="10" w-border="2" w-borderradius="4" w-radius="25" w-period="day" w-layout="vertical" w-attractionid="" w-promoterid="" w-venueid="" w-affiliateid="" w-segmentid="" w-proportion="xxl" w-titlelink="off" w-sorting="groupByName" w-id="id_i80o9o" w-source="" w-branding="TicketWeb" w-countrycode="US" w-postalcode="" w-city="Houston" w-latlong=""></div>';
}

function getEvents() {
    $.ajax({
        type:"GET",
        //url:"https://app.ticketmaster.com/discovery/v2/events.json?size=10&city=" + city + "&radius=20&unit=miles&includeTBA=no&includeTBD=no&startDateTime=" + date + "Z&endDateTime=" + enddate +"Z&sort=date,name,desc&apikey=jAgPHe9zhnVREzoNhSvYNrfX1V9zeecJ",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?size=10&city=" + "Houston" + "&radius=20&unit=miles&includeTBA=no&includeTBD=no&startDateTime=" + date + "Z&endDateTime=" + enddate +"Z&sort=date,name,desc&apikey=jAgPHe9zhnVREzoNhSvYNrfX1V9zeecJ",
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                    // Parse the response.
                    // Do other things.
                    outputEvents();
                 },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
      });
}

function outputEvents() {
    boxlist = '';
    var i;
    for (i = 0; i < 10; i++) {
        boxlist = boxlist + box + '<h3>' + 'event' + i + '</h3><div>' + city +  '</div></div>';
    }
    //document.getElementById("boxes").innerHTML = '<div class="eventbox"><h3> Event name </h3><div>Location</div> <div> date and time </div> <div> Information </div></div>';
    document.getElementById("boxes").innerHTML = boxlist;
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