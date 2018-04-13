//TEXT FILE DROP DOWN
$(function() {
    //JSON FILE DROP DOWN
    $("#json-one").change(function() {
        var $dropdown = $(this);
        //GETS JSON FILE WITH FOOD INPUT OPTIONS
        $.getJSON("jsondata/data.json", function(data) {
            var key = $dropdown.val();
            //ARRAY TO STORE DATA 
            var vals = [];             
            switch(key) {
                case 'fat':
                    vals = data.Fat.split(",");
                    break;
                case 'carb':
                    vals = data.Carb.split(",");
                    break;
                case 'protien':
                    vals = data.Protien.split(",");
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
    $("#json-two").change(function() {
        var $dropdown = $(this);
        //GETS JSON FILE WITH FOOD INPUT OPTIONS
        $.getJSON("jsondata/data.json", function(data) {
            var key = $dropdown.val();
            //ARRAY TO STORE DATA 
            var vals = [];             
            switch(key) {
                case 'Butter':
                    vals = data.Butter.split(",");
                    break;
                case 'Cheese':
                    vals = data.Cheese.split(",");
                    break;
                case 'Whole Milk':
                    vals = data.WholeMilk.split(",");
                break;                                   
                case 'base':
                    vals = ['Please choose from above'];
            }
            var $jsonthree = $("#json-three");
            $jsonthree.empty();
            $.each(vals, function(index, value) {
                $jsonthree.append("<option>" + value + "</option>");
            });
        });
    });
});

