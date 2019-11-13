var inputtext;
var out;
var city = 'test';
var ip = 'check';
var access_key = '145a6e1f8118cacc7daf96e2b3f5ab42';



$(document).ready(new function() {                  // similar to int main()
    getLocation();
    out = document.getElementById("out");
});

$(document).on('keypress', function(e) {            // checks when enter key is pressed in text box
    if(e.which == 13) {
        inputtext = document.getElementById("inputtext").value;
        
        outputInputTest();
    }
});

function outputInputTest() {                        // outputs to site
    inputtext = document.getElementById("inputtext").value;
    out.innerHTML = inputtext;
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
        
        }
    });
}
