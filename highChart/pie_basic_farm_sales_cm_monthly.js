// Create the chart
Highcharts.chart("farm_sales_cm_month", {
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
    text: "Pulau Ketam<br> Jan, 2021",
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
          name: "BA1",
          y: 31.41,
        },
        {
          name: "BA2",
          y: 11.84,
        },
        {
          name: "BA3",
          y: 10.85,
        },
        {
          name: "BA4",
          y: 4.67,
        },
        {
          name: "BA5",
          y: 4.18,
        },
        {
          name: "BA6",
          y: 16.64,
        },
        {
          name: "BA7",
          y: 20.64,
        },
        {
          name: "BA8",
          y: 31.64,
        },
        {
          name: "BA9",
          y: 24.64,
        },
      ],
    },
  ],
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
