// Create the chart
Highcharts.chart("speciesCm_overview", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 10,
    spacingRight: 15,
    type: "column",
  },
  title: {
    text: '<span style="font-weight: bold">Species CM(%)</span>',
    align: "left",
  },
  subtitle: {
    text: "All Species",
    align: "left",
  },

  xAxis: {
    categories: [
      "Red Snapper",
      "Golden Snapper",
      "Pomfret",
      "Seabass",
      "Hyrbrid Grouper",
      "Giant Grouper",
    ],
    crosshair: true,
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
    formatter: function () {
      return "The value for <b>" + this.x + "</b> is <b>" + this.y + "%</b>";
    },
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
    series: {
      pointWidth: 25,
    },
    column: {
      dataLabels: {
        enabled: true,
      },
    },
  },

  series: [
    {
      colorByPoint: true,
      showInLegend: false,
      data: [
        {
          name: "Red Snapper",
          y: 40,
        },
        {
          name: "Golden Snapper",
          y: 32,
        },
        {
          name: "Pomfret",
          y: 55,
        },
        {
          name: "Seabass",
          y: 63,
        },
        {
          name: "Hybrid Grouper",
          y: 51,
        },
        {
          name: "Giant Grouper",
          y: 24,
        },
      ],
    },
  ],
});
