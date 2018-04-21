var food = [];


/*
    https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/

printJson();
function printJson(){
    var food = '{"foodSwap":[' +
    '{"macro":"1","foodItem":"Avo Oil" },' +
    '{"macro":"2","foodItem":"Quinoa" },' +
    '{"macro":"3","foodItem":"Tempeh" }]}';
    
    var testing = '<strong>JSON Test: </strong> ';
    document.getElementById('jsonTest').innerHTML = testing;
    
    //var obj = JSON.parse(food);
    var myJSON = JSON.stringify(food);
    document.getElementById("jsonTestPP").innerHTML = myJSON;
/*    ( 

        /*obj.foodSwap[1].macro + " " +
        obj.foodSwap[1].foodItem
          );
    // /console.log(obj.foodSwap[1].foodItem);
  */


}
var mac = [];
function getFoodinput(){
    var getitem = document.getElementById("food1").value;
    var getMac = document.getElementById("macro1").value;
    // alert(+getMac+ " Food entered: "  +getitem);

    //Print user input        
    //food.push(getitem);
    mac.push(getMac);

    /*Print array elements*/     
    var finput = ' ';
    for(var i = 0; i < food.length; i++){  
        finput.concat(food[i] + ' ' );
    }

    var minput = ' ';
    for(var i = 0; i < mac.length; i++){  
        minput.concat(mac[i] + ' ' );
    }

    //Prints before array
    var text = '<strong>Your food item: </strong> ';
    document.getElementById('foodText').innerHTML = text;
    //Prints data pushed into data array 
    document.getElementById('foodInput').innerHTML = food.toString();
    document.getElementById('macroInput').innerHTML = mac.toString();

    //Checking array for food marco # to switch 
    for(var i=0; i<mac.length;i++){
        if (mac[i] == 0){
            mac.pop(getMac);
            mac.push('<br/> You did not select anything ');
        }
        if (mac[i] == 1){
            mac.pop(getMac);
            mac.push('<br/> Avocado Oil, Cocunut Oil, Olive Oil\n')
        }
        if (mac[i] == 2){
            mac.pop(getMac);
            mac.push('<br/> Quinoa, Amaranth, Teff\n');
        }
        if (mac[i] == 3){
            mac.pop(getMac);
            mac.push('<br/>Tempeh, tofu, soybeans\n' );    
        }
        
    }
    var new2String = ' ';
    for(var i = 0; i < mac.length; i++){
        new2String.concat(mac[i] + ' ' );
    }
    var text = '<strong>Your food swap recommendation: </strong>';
    document.getElementById('foodSwapText').innerHTML = text;
    //Prints data pushed into data array 
    document.getElementById('foodSwap').innerHTML = mac.toString();
}


/*
 DENISE THUY VY NGUYEN
 3/21/2018
*/
