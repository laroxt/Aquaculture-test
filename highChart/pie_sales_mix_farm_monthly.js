// Create the chart
Highcharts.chart("sales_mix_farm_monthly", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 0,
    spacingRight: 0,
    type: "pie",
  },
  title: {
    text: '<span style="font-weight: bold">Mix Farm Sales Profit</span>',
    align: "center",
  },
  subtitle: {
    text: "All Farm<br>Jan, 2021",
    align: "center",
  },

  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
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
      name: "Farm Location",
      colorByPoint: true,
      data: [
        {
          name: "Pulau Ketam",
          y: 61.41,
          drilldown: "BA1A",
        },
        {
          name: "Kong Kong",
          y: 11.84,
        },
      ],
    },
  ],
  drilldown: {
    series: [
      {
        name: "Farms",
        id: "BA1A",
        data: [
          ["BA1", 0.1],
          ["BA2", 1.3],
          ["BA3", 30.02],
          ["BA4", 1.4],
          ["BA5", 0.88],
          ["BA6", 34.3],
          ["BA7", 15],
          ["BA8", 40.4],
          ["BA9", 30.88],
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
