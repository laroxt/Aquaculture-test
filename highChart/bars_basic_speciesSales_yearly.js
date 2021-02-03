// Create the chart
Highcharts.chart("speciesSales_yearly", {
  title: {
    text: '<span style="font-weight: bold">Overall Species Sales(RM)</span>',
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
    text: "All Species",
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
      name: "Pulau Ketam",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: "Kong Kong",
      data: [51234, 235123, 41235, 12512, 24235, 53234, 423512, 734234],
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
