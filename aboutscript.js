$(document).ready(new function() {                  // similar to int main()
    
    
});

function colorBlindFunction() {
    if (document.getElementById("sheetoption").innerHTML == '<link rel="stylesheet" type="text/css" href="stylesheets/stylesheet.css" media="screen">')
    {
        document.getElementById("sheetoption").innerHTML = '<link rel="stylesheet" type="text/css" href="stylesheets/stylesheetcb.css" media="screen">';
    }
    else
    {
        document.getElementById("sheetoption").innerHTML = '<link rel="stylesheet" type="text/css" href="stylesheets/stylesheet.css" media="screen">';
    }
}