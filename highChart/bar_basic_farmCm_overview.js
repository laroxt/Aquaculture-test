// $(function () {
//   // Create the chart

//   var options = {
//     chart: {
//       events: {
//         drilldown: function (e) {
//           if (!e.seriesOptions) {
//             var chart = this;

//             // Show the loading label
//             chart.showLoading("Loading ...");

//             setTimeout(function () {
//               chart.hideLoading();
//               chart.addSeriesAsDrilldown(e.point, series);
//             }, 1000);
//           }
//         },
//       },
//       plotBorderWidth: 0,
//     },

//     //
//     xAxis: {
//       type: "category",
//     },

//     legend: {
//       enabled: true,
//     },
//     //
//     plotOptions: {
//       series: {
//         pointPadding: 0.2,
//         borderWidth: 0,
//         dataLabels: {
//           enabled: true,
//         },
//       },
//       pie: {
//         plotBorderWidth: 0,
//         allowPointSelect: true,
//         cursor: "pointer",
//         size: "100%",
//         dataLabels: {
//           enabled: true,
//           format: "{point.name}: <b>{point.y}</b>",
//         },
//       },
//     },
//     //
//     series: [
//       {
//         name: "Case",
//         colorByPoint: true,
//         data: [3, 2, 1, 3, 4],
//       },
//     ],
//     //
//     drilldown: {
//       series: [],
//     },
//   };

//   // Column chart
//   options.chart.renderTo = "speciesCm_overview";
//   options.chart.type = "column";
//   var chart1 = new Highcharts.Chart(options);

//   chartfunc = function () {
//     var column = document.getElementById("column");
//     var bar = document.getElementById("bar");
//     var pie = document.getElementById("pie");
//     var line = document.getElementById("line");

//     if (column.checked) {
//       options.chart.renderTo = "speciesCm_overview";
//       options.chart.type = "column";
//       var chart1 = new Highcharts.Chart(options);
//     } else if (bar.checked) {
//       options.chart.renderTo = "speciesCm_overview";
//       options.chart.type = "bar";
//       var chart1 = new Highcharts.Chart(options);
//     } else if (pie.checked) {
//       options.chart.renderTo = "speciesCm_overview";
//       options.chart.type = "pie";
//       var chart1 = new Highcharts.Chart(options);
//     } else {
//       options.chart.renderTo = "speciesCm_overview";
//       options.chart.type = "line";
//       var chart1 = new Highcharts.Chart(options);
//     }
//   };

//   $("#change_chart_title").click(function () {
//     var new_title = $("#chart_title").val();
//     var chart = $("#speciesCm_overview").highcharts();
//     chart.setTitle({ text: new_title });

//     alert("Chart title changed to " + new_title + " !");
//   });
// });

Highcharts.chart("farmCm_overview", {
  title: {
    text: '<span style="font-weight: bold">Farm CM(%)</span>',
    align: "left",
  },

  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 15,
    spacingRight: 15,
    type: "line",
  },

  subtitle: {
    text: "All Farm",
    align: "left",
    verticalAlign: "top",
  },

  xAxis: {
    gridLineWidth: 1,
    accessibility: {
      rangeDescription: "Range: 2010 to 2017",
    },
  },

  legend: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom",
    borderWidth: 0,
  },

  tooltip: {
    valueSuffix: "%",
    shared: true,
    crosshairs: true,
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2014,
    },
  },

  series: [
    {
      name: "Pulau Ketam",
      data: [30, 23, 23, 42, 23, 42, 37, 64],
    },
    {
      name: "Kong Kong",
      data: [36, 24, 62, 52, 42, 32, 24, 32],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});
