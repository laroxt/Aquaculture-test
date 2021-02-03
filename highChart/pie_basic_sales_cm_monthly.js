// Create the chart
Highcharts.chart("species_sales_cm_year", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 0,
    spacingRight: 15,
    type: "pie",
  },
  title: {
    text: '<span style="font-weight: bold">Monthly Red Snapper CM</span>',
    align: "center",
  },
  subtitle: {
    text: "All Species",
    align: "center",
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
      showInLegend: true,
    },
  },

  series: [
    {
      name: "Fish",
      colorByPoint: true,
      data: [
        {
          name: "Red Snapper",
          y: 32.41,
          drilldown: "Red Snapper Farm",
        },
        {
          name: "Golden Snapper",
          y: 43.84,
        },
        {
          name: "Pomfret",
          y: 21.85,
        },
        {
          name: "Seabass",
          y: 34.67,
        },
        {
          name: "Hybrid Grouper",
          y: 24.18,
        },
        {
          name: "Giant Grouper",
          y: 15.64,
        },
      ],
    },
  ],
  drilldown: {
    series: [
      {
        name: "Red Snapper Farm",
        id: "Red Snapper Farm",
        data: [
          ["Red Snapper BA1", 5],
          ["Red Snapper BA2", 35],
          ["Red Snapper BA3", 10],
          ["Red Snapper BA4", 30],
          ["Red Snapper BA5", 15],
          ["Red Snapper BA6", 15],
          ["Red Snapper BA7", 32],
          ["Red Snapper BA8", 45],
          ["Red Snapper BA9", 12],
        ],
      },
    ],
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: "pointer",
              dataLabels: {
                enabled: false,
                format: "<b>{point.name}</b>:         {point.percentage:.1f} %",
                style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || "black",
                },
              },
            },
          },
        },
      },
    ],
  },
});
