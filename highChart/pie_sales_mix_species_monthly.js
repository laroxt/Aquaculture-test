// Create the chart
Highcharts.chart("sales_mix_species_monthly", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 0,
    spacingRight: 0,
    type: "pie",
  },
  title: {
    text: '<span style="font-weight: bold">Mix Species Sales Profit</span>',
    align: "center",
  },
  subtitle: {
    text: "All Species<br>Jan, 2021",
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
          y: 41.41,
          drilldown: "Fish BA1",
        },
        {
          name: "Golden Snapper",
          y: 31.84,
        },
        {
          name: "Pomfret",
          y: 10.85,
        },
        {
          name: "Seabass",
          y: 54.67,
        },
        {
          name: "Hybrid Grouper",
          y: 44.18,
        },
        {
          name: "Giant Grouper",
          y: 21.64,
        },
      ],
    },
  ],
  drilldown: {
    series: [
      {
        name: "Fish BA1",
        id: "Fish BA1",
        data: [
          ["Red Snapper BA1", 13],
          ["Red Snapper BA2", 23],
          ["Red Snapper BA3", 33.02],
          ["Red Snapper BA4", 1.4],
          ["Red Snapper BA5", 32],
          ["Red Snapper BA6", 32],
          ["Red Snapper BA7", 42],
          ["Red Snapper BA8", 12],
          ["Red Snapper BA9", 42],
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
