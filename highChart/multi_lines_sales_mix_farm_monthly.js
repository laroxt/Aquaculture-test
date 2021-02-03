Highcharts.chart("sales_mix_farm_overview", {
  title: {
    text: '<span style="font-weight: bold">Farm & Species Sales(RM)</span>',
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
    text: "All Farm & Species ",
    align: "left",
    verticalAlign: "top",
  },

  xAxis: {
    gridLineWidth: 1,
    accessibility: {
      rangeDescription: "Range: 2010 to 2017",
    },
  },

  yAxis: {
    offset: 5,
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
    {
      name: "Fish",
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
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
