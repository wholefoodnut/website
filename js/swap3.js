<!-- The first select list -->
Select Option: <select name="slist1" onchange="SList.getSelect('slist2', this.value);">
 <option>- - -</option>
 <option value="s1_opt1">S1 Option1</option>
 <option value="s1_opt2">S1 Option2</option>
</select>
<!-- Tags for the other 2 dropdown list, and for text-content -->
<span id="slist2"></span> <span id="slist3"></span> <div id="scontent"></div>

<script><!--
/* Script Triple Select Dropdown List, from: coursesweb.net/javascript/ */
var SList = new Object();             // JS object that stores data for options

// HERE replace the values with the text you want to be displayed near Select
var txtsl2 = 'Select Option:';         // text for the seccond dropdown list
var txtsl3 = 'Select Option:';         // text for the third dropdown list

/*
 Property with options for the Seccond select list
 The key in this object must be the same with the values of the options added in the first select
 The values in the array associated to each key represent options of the seccond select
*/
SList.slist2 = {
 "s1_opt1": ['s1o1_opt1', 's1o1_opt2'],
 "s1_opt2": ['s1o2_opt1', 's1o2_opt2'],
};

/*
 Property with options for the Third select list
 The key in this object must be the same with the values (options) added in each Array in "slist2" above
 The values in the array associated to each key represent options of the third select
*/
SList.slist3 = {
 "s1o1_opt1": ['s2o1_1_opt1', 's2o1_1_opt2'],
 "s1o1_opt2": ['s2o1_2_opt1', 's2o1_2_opt2'],
 "s1o2_opt1": ['s2o2_1_opt1', 's2o2_1_opt2'],
 "s1o2_opt2": ['s2o2_2_opt1', 's2o2_2_opt2'],
};

/*
 Property with content associated to the options of the third select list
 The key in this object must be the same with the values (options) added in each Array in "slist3" above
 The values of each key represent the content displayed after the user selects an option in 3rd dropdown list
*/
SList.scontent = {
 "s2o1_1_opt1": 'Content for s2o1_1_opt1',
 "s2o1_1_opt2": 'Content for s2o1_1_opt2',
 "s2o1_2_opt1": 'Content for s2o1_2_opt1',
 "s2o1_2_opt2": 'Content for s2o1_2_opt2',
 "s2o2_1_opt1": 'Content for s2o2_1_opt1',
 "s2o2_1_opt2": 'Content for s2o2_1_opt2',
 "s2o2_2_opt1": 'Content for s2o2_2_opt1',
 "s2o2_2_opt2": 'Content for s2o2_2_opt2',
};

    /* From here no need to modify */

// function to get the dropdown list, or content
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
--></script>