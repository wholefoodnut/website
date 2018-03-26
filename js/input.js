var data = [];
function getFoodinput(){
    var getitem = document.getElementById("food1").value;
    var getMac = document.getElementById("macro1").value;
    // alert(+getMac+ " Food entered: "  +getitem);

    //Print user input        
    data.push(getMac);
    data.push(getitem);

    /*Print array elements*/     
    var newString = ' ';
    for(var i = 0; i < data.length; i++){  
        newString.concat(data[i] + ' ' );
        newString.concat(data[i] + ' <br/> ' );
    }
    //Prints before array
    var text = '<strong>Your food item: </strong> ';
    document.getElementById('foodText').innerHTML = text;
    //Prints data pushed into data array 
    document.getElementById('printFood').innerHTML = data.toString();


    //Checking array for food marco # to switch 
    for(var i=0; i<data.length;i++){
        if (data[i] == 0){
            data.pop(getMac);
            data.push('<br/> You did not select anything ');
        }
        if (data[i] == 1){
            data.pop(getMac);
            data.push('<br/> Avocado Oil, Cocunut Oil, Olive Oil\n')
        }
        if (data[i] == 2){
            data.pop(getMac);
            data.push('<br/> Quinoa, Amaranth, Teff\n');
        }
        if (data[i] == 3){
            data.pop(getMac);
            data.push('<br/>Tempeh, tofu, soybeans\n' );    
        }
        
    }
 
    var new2String = ' ';
    for(var i = 0; i < data.length; i++){
        new2String.concat(data[i] + ' ' );
    }
    var text = '<strong>Your food swap recommendation: </strong>';
    document.getElementById('foodSwapText').innerHTML = text;
    //Prints data pushed into data array 
    document.getElementById('foodSwap').innerHTML = data.toString();
}


/*
class Ingredient {
    constructor() {
      this.name = "User Ingredient";
    }
  }
  
  var food = new Ingredient();
  console.log(food.name);

  var obj = {
    foo() {
      return getFoodinput();
    }
  }
  
  console.log(obj.foo());
  // expected output: "bar"
*/
/*
 DENISE THUY VY NGUYEN
 3/21/2018
*/
