var food = [];
var mac = [];

function getFoodinput(){
    var getMac = document.getElementById('macro').value;
    document.getElementById("marcoInput").innerHTML = getMac;

    var text1 = '<strong>Your Macro Selection: </strong>';
    document.getElementById('text1').innerHTML = text1;
}

$(function() {

    $("#text-one").change(function() {
        $("#text-two").load("textdata/" + $(this).val() + ".txt");
    });
    
    $("#json-one").change(function() {
    
        var $dropdown = $(this);
    
        $.getJSON("jsondata/data.json", function(data) {
        
            var key = $dropdown.val();
            var vals = [];
                                
            switch(key) {
                case 'beverages':
                    vals = data.beverages.split(",");
                    break;
                case 'snacks':
                    vals = data.snacks.split(",");
                    break;
                case 'base':
                    vals = ['Please choose from above'];
            }
            
            var $jsontwo = $("#json-two");
            $jsontwo.empty();
            $.each(vals, function(index, value) {
                $jsontwo.append("<option>" + value + "</option>");
            });
    
        });
    });

});


/*
 DENISE THUY VY NGUYEN
 3/21/2018
*/