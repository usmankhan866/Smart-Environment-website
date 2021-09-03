// piechart 1 script code

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Very Unhealthy',     8],
          ['Unhealthy',      3],
          ['unhealthy for sensitive group',  3],
          ['Good', 2],
          ['Moderate',    4]
        ]);

        var options = {
          title: 'Air Quality index',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }

    
    // piechart 2 script
    
    // $(document).ready(function(){
    //     var chartDiv = $("#barChart");
    // var myChart = new Chart(chartDiv, {
    //     type: 'pie',
    //     data: {
    //         labels: ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"],
    //         datasets: [
    //         {
    //             data: [21,39, 10, 14,16],
    //             backgroundColor: [
    //                "#FF6384",
    //             "#4BC0C0",
    //             "#FFCE56",
    //             "#E7E9ED",
    //             "#36A2EB"
    //             ]
    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: 'Pie Chart'
    //         },
    //         responsive: true,
    // maintainAspectRatio: false,
    //     }
    // });
    // });