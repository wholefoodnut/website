google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
    var data = google.visualization.arrayToDataTable([
						      ['Comparison', 'Butter', 'Avo Oil'],
						      ['Total Fat', 14, 14],
						      ['Cholesterol', 40, 0],
						      ['Sodium', 170, 0],
      
						      ]);

    var materialOptions = {
        chart: {
	    title: 'Food Comparison'
        },
        hAxis: {
	    title: 'Total',
	    minValue: 0,
        },
        vAxis: {
	    title: 'City'
        },
        bars: 'horizontal'
    };
    var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
    materialChart.draw(data, materialOptions);
}