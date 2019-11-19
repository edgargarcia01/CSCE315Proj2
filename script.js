var inputtext;
var out;
var city = '';
var ip = 'check';
var eventW;
var access_key = '145a6e1f8118cacc7daf96e2b3f5ab42';



$(document).ready(new function() {                  // similar to int main()
    eventWidget();
    getLocation();
    out = document.getElementById("out");
    eventW = document.getElementById("eventapi");
    getEvents();
    
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

function eventWidget() {
    document.getElementById("eventapi").innerHTML = '<div w-type="event-discovery" w-tmapikey="pLOeuGq2JL05uEGrZG7DuGWu6sh2OnMz" w-googleapikey="YOUR_GOOGLE_API_KEY" w-keyword="" w-theme="listviewthumbnails" w-colorscheme="light" w-width="300" w-height="600" w-size="10" w-border="2" w-borderradius="4" w-radius="25" w-period="day" w-layout="vertical" w-attractionid="" w-promoterid="" w-venueid="" w-affiliateid="" w-segmentid="" w-proportion="xxl" w-titlelink="off" w-sorting="groupByName" w-id="id_i80o9o" w-source="" w-branding="TicketWeb" w-countrycode="US" w-postalcode="" w-city="Houston" w-latlong=""></div>';
}

function getEvents() {
    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=jAgPHe9zhnVREzoNhSvYNrfX1V9zeecJ",
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                    // Parse the response.
                    // Do other things.
                 },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
      });
}
