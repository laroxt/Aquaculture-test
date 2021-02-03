Highcharts.chart("speciesSales_byFarm_yearly", {
  title: {
    text: '<span style="font-weight: bold">Species GP(RM)</span>',
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
    text: "Red Snapper",
    align: "left",
    verticalAlign: "top",
  },

  xAxis: {
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
