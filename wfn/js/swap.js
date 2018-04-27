/* Script Triple Select Dropdown List, from: coursesweb.net/javascript/ */
    var SList = new Object();                     // JS object that stores data for options
    var txtsl2 = '<strong>Select Food to Swap:</strong><br>';          // text for the seccond dropdown list
    var txtsl3 = '<strong>Healthier food option:</strong><br>';       // text for the third dropdown list
/*
 Property with options for the Seccond select list
 The key in this object must be the same with the values of 
 the options added in the first select. The values in the array associated 
 to each key represent options of the seccond select
*/
SList.slist2 = {
 "s1_opt1": ['Butter', 'Cheese', 'Whole Milk'],
 "s1_opt2": ['White Bread', 'Pasta', 'White Rice'],
 "s1_opt3": ['Chicken', 'Talapia', 'Beef'],
};

/*
 Property with options for the Third select list
 The key in this object must be the same with the values (options) added in 
 each Array in "slist2" above The values in the array associated to each 
 key represent options of the third select
*/
SList.slist3 = {
 "Butter": ['Avocado Oil', 'Coconut Oil'],
 "Cheese": ['Ghee'],
 "Whole Milk": ['Almond Milk'],
 "White Bread": ['Buck Wheat'],
 "Pasta": ['Quinoa'],
 "White Rice": ['Wild Rice'],
 "Chicken": ['Tofu'],
 "Talapia": ['Lentils'],
 "Beef": ['Tempeh'],
};

/*
 Property with content associated to the options of the third select list
 The key in this object must be the same with the values (options) added in 
 each Array in "slist3" above. The values of each key represent the content 
 displayed after the user selects an option in 3rd dropdown list
*/
SList.scontent = {
 "Avocado Oil": '<a href="avo.php">Nutrition Comparison</a></br><br> <img class="center" style="width:25%" src="images/avoOil.jpg"><br>Is pressed from the fleshy pulp surrounding the avocado pit, making it one of the few edible oils not derived from seed. This pulp produces an oil full of healthy fats, including oleic acid and essential fatty acids',
 "Coconut Oil": 'Refined, bleached, and deodorized (RBD) oil is usually made from copra, dried coconut kernel, which is pressed in a heated hydraulic press to extract the oil. This yields practically all the oil present, amounting to more than 60% of the dry weight of the coconut.',
 "Ghee": 'Ghee differs slightly in its production. The process of creating traditional clarified butter is complete once the water is evaporated and the fat (clarified butter) is separated from the milk solids. However, the production of ghee includes simmering the butter, which makes it nutty-tasting and aromatic.',
 "Almond Milk": 'It contains neither cholesterol nor lactose, and is often consumed by those who are lactose-intolerant and others who wish to avoid dairy products, including vegans. Commercial almond milk comes in sweetened, unsweetened, plain, vanilla and chocolate flavors, and is usually fortified with micronutrients.',
 "Buck Wheat": 'Is an herbaceous annual plant in the family Polygonaceae grown for its seeds which can be utilized in a manner similar to wheat or oats. The plant produces many small white or pink flowers which, when pollinated, quickly produce seeds.',
 "Quinoa": 'Is a flowering plant in the amaranth family. It is a herbaceous annual plant grown as a grain crop primarily for its edible seeds.',
 "Wild Rice": 'A grain-like plant that is not actually a type of rice, but an aquatic grass bearing edible seeds that grows in wild marshy areas of fresh water lakes and rivers. Wild rice is native to the northern waters of Minnesota, parts of Wisconsin, and adjacent areas of Canada.',
 "Tofu": 'Tofu, also known as bean curd, is a food cultivated by coagulating soy milk and then pressing the resulting curds into soft white blocks. It is a component in East Asian and Southeast Asian cuisines.',
 "Lentils": 'Is an edible pulse. It is a bushy annual plant of the legume family, known for its lens-shaped seeds. It is about 40 cm (16 in) tall, and the seeds grow in pods, usually with two seeds in each.',
 "Tempeh": 'Is made from soybeans, but it is a whole soybean product with different nutritional characteristics and textural qualities. Tempehs fermentation process and its retention of the whole bean give it a higher content of protein, dietary fiber, and vitamins.',
};

SList.getSelect = function(slist, option) {
  document.getElementById('scontent').innerHTML = '';           // empty option-content

  if(SList[slist][option]) {
    // if option from the last Select, add text-content, else, set dropdown list
    if(slist == 'scontent') document.getElementById('scontent').innerHTML = SList[slist][option];
    else {
      var addata = '<option>- - -</option>';
      for(var i=0; i<SList[slist][option].length; i++) {
        addata += '<option value="'+SList[slist][option][i]+'">'+SList[slist][option][i]+'</option>';
      }

      // cases for each dropdown list
      switch(slist) {
        case 'slist2':
          document.getElementById('slist2').innerHTML = txtsl2+' <select name="slist2" onchange="SList.getSelect(\'slist3\', this.value);">'+addata+'</select>';
          document.getElementById('slist3').innerHTML = '';
          break;
        case 'slist3':
          document.getElementById('slist3').innerHTML = txtsl3+' <select name="slist3" onchange="SList.getSelect(\'scontent\', this.value);">'+addata+'</select>';
          break;
      }
    }
  }
  else {
    // empty the tags for select lists
    if(slist == 'slist2') {
      document.getElementById('slist2').innerHTML = '';
      document.getElementById('slist3').innerHTML = '';
    }
    else if(slist == 'slist3') {
      document.getElementById('slist3').innerHTML = '';
    }
  }
}
