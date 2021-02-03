// Create the chart
Highcharts.chart("species_sales_cm_month", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 0,
    spacingRight: 15,
    type: "pie",
  },
  title: {
    text: '<span style="font-weight: bold">Yearly Red Snapper CM</span>',
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
          y: 30.41,
          drilldown: "Red Snapper Farm",
        },
        {
          name: "Golden Snapper",
          y: 23.84,
        },
        {
          name: "Pomfret",
          y: 54.85,
        },
        {
          name: "Seabass",
          y: 12.67,
        },
        {
          name: "Hybrid Grouper",
          y: 23.18,
        },
        {
          name: "Giant Grouper",
          y: 20.64,
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
          ["Red Snapper BA1", 51],
          ["Red Snapper BA2", 32],
          ["Red Snapper BA3", 52],
          ["Red Snapper BA4", 21],
          ["Red Snapper BA5", 14],
          ["Red Snapper BA6", 67],
          ["Red Snapper BA7", 42],
          ["Red Snapper BA8", 54],
          ["Red Snapper BA9", 20],
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
