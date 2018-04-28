<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8">
  <link rel="icon" href="images/quinoa.jpg" />
  <title>The Whole Food Nut</title>	
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <!--LINK TO CSS-->
  <link rel="stylesheet"  href="css/stylesheet.css">
  <!-- SWAP -->
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <!-- <script src="js/avoG.js"></script> -->
<script>
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
    var data = google.visualization.arrayToDataTable([
						      ['Comparison', 'Quinoa', 'Pasta'],
						      ['Total Fat', 4, 21],
						      ['Cholesterol', 0, 20],
						      ['Sodium', 13, 560],
      
						      ]);

    var materialOptions = {
        chart: {
	    title: 'Food Comparison'
        },
        axes: {
        x: {
            all: {
                range: {
                    y: 100,
                    y:75,
                    y:50,
                    y:0,
                    y: -5
                }
            }
        }
    },
        hAxis: {
	    title: 'Total',
	    minValue: 0,
        },
        vAxis: {
	    title: 'gms'
        },
        bars: 'horizontal'
    };
    var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
    materialChart.draw(data, materialOptions);
}
</script>
</head>

<body>
    <nav><!--HEADER/NAV-->
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
            <div class="masthead mb-auto" style="padding:20px;">
            <h4 class="text-white">Whole Food Nut</h4>
            </p>
            <span class="text-muted">
                <a href="http://ce3d9bee.envatohostedview.com/" target="blank" border="0" height="100" width="200">
                HOME
                </a> |
                <a href="input.html" alt="" border="0" height="100" width="200">
                SWAPER
                </a>  
            </span>
            </div><!--.masthead-->
            </div><!--.collapse-->
            <nav class="navbar navbar-dark masthead mb-auto">
            <button class="navbar-toggler" style="color:#dbdb74;" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            </nav><!--.navbar navbar-dark masthead mb-auto-->
            </div><!--.pos-f-t-->
        </nav><!--.HEADER/NAV-->
        <!--BODY CONTENT-->
<div class="container">     <!-- container -->
   <!--DIV FOR FORM SO USER CAN INPUT FOOD ITEM-->
 <div id="chart_div">
 </div>

 <?php include "marcos.php"; ?>

</div>

    <!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->	
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="../js/top.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <!--END OF BODY-->
  </body>
  </html>
 </body>
</html>