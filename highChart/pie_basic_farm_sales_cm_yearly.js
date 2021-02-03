// Create the chart
Highcharts.chart("farm_sales_cm_year", {
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
    text: "Pulau Ketam<br>2021",
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
          y: 20,
        },
        {
          name: "BA2",
          y: 11.84,
        },
        {
          name: "BA3",
          y: 32.41,
        },
        {
          name: "BA4",
          y: 4.67,
        },
        {
          name: "BA5",
          y: 9,
        },
        {
          name: "BA6",
          y: 31.64,
        },
        {
          name: "BA7",
          y: 14.64,
        },
        {
          name: "BA8",
          y: 20.64,
        },
        {
          name: "BA9",
          y: 30.64,
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
