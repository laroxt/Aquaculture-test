// Create the chart
Highcharts.chart("container333", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 0,
    spacingRight: 15,
    type: "pie",
  },
  title: {
    text: '<span style="font-weight: bold">Employment Growth by Sector</span>',
    align: "left",
  },
  subtitle: {
    text: "Farm BA",
    align: "left",
  },

  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },

  series: [
    {
      name: "Fish",
      colorByPoint: true,
      data: [
        {
          name: "Red Snapper",
          y: 61.41,
        },
        {
          name: "Golden Snapper",
          y: 11.84,
        },
        {
          name: "Pomfret",
          y: 10.85,
        },
        {
          name: "Seabass",
          y: 4.67,
        },
        {
          name: "Hybrid Grouper",
          y: 4.18,
        },
        {
          name: "Giant Grouper",
          y: 1.64,
        },
      ],
    },
  ],
});
