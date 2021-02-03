Highcharts.chart("farm_sales_yearly", {
  title: {
    text: '<span style="font-weight: bold">Farm Sales(RM)</span>',
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
      name: "Farm",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
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
