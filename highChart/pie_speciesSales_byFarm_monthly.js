// Create the chart
Highcharts.chart("speciesSales_monthly", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 10,
    spacingRight: 15,
    type: "column",
  },
  title: {
    text: '<span style="font-weight: bold">Species Sales By Farm, 2017-2021</span>',
    align: "center",
  },
  subtitle: {
    text: "Red Snapper, Pulau Ketam",
    align: "center",
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },

  yAxis: {
    min: 0,
    title: {
      text: '<span style="font-weight: bold">Sales Revenue(RM)</span>',
    },
    stackLabels: {
      enabled: true,
      formatter: function () {
        return this.total + "M";
      },
      style: {
        fontWeight: "bold",
      },
    },
  },

  xAxis: {
    type: "category",
    crosshair: true,
  },

  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">●</span>{series.name}:<b> RM{point.y}M<br/></b>',
    shared: true,
  },

  plotOptions: {
    series: {
      pointWidth: 50,
      dataLabels: {
        enabled: false,
        format: "{point.y}M",
      },
    },
    column: {
      stacking: "normal",
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },

  series: [
    {
      yAxis: 0,
      name: "BA1",
      color: "#feeceb",
      data: [
        {
          name: "2017",
          y: 43.9,
        },
        {
          name: "2018",
          y: 29.7,
        },
        {
          name: "2019",
          y: 32.4,
        },
        {
          name: "2020",
          y: 38.1,
        },
        {
          name: "2021",
          y: 52.3,
        },
      ],
    },
    {
      yAxis: 0,
      name: "BA2",
      color: "#fcc7c3",
      data: [
        {
          name: "2017",
          y: 43.9,
        },
        {
          name: "2018",
          y: 29.7,
        },
        {
          name: "2019",
          y: 32.4,
        },
        {
          name: "2020",
          y: 38.1,
        },
        {
          name: "2021",
          y: 52.3,
        },
      ],
    },
    {
      yAxis: 0,
      name: "BA3",
      color: "#faa19b",
      data: [
        {
          name: "2017",
          y: 33.9,
        },
        {
          name: "2018",
          y: 49.7,
        },
        {
          name: "2019",
          y: 42.4,
        },
        {
          name: "2020",
          y: 48.1,
        },
        {
          name: "2021",
          y: 2.3,
        },
      ],
    },
    {
      yAxis: 0,
      name: "BA4",
      color: "#f88279",
      data: [
        {
          name: "2017",
          y: 38.7,
        },
        {
          name: "2018",
          y: 32.4,
        },
        {
          name: "2019",
          y: 38.1,
        },
        {
          name: "2020",
          y: 42.1,
        },
        {
          name: "2021",
          y: 52.3,
        },
      ],
    },
    {
      yAxis: 0,
      name: "BA5",
      color: "#f66257",
      data: [
        {
          name: "2017",
          y: 40,
        },
        {
          name: "2018",
          y: 23.1,
        },
        {
          name: "2019",
          y: 26.4,
        },
        {
          name: "2020",
          y: 42.1,
        },
        {
          name: "2021",
          y: 55,
        },
      ],
    },
    {
      yAxis: 0,
      name: "BA6",
      color: "#f44336",
      data: [
        {
          name: "2017",
          y: 37,
        },
        {
          name: "2018",
          y: 44.3,
        },
        {
          name: "2019",
          y: 32.4,
        },
        {
          name: "2020",
          y: 38.5,
        },
        {
          name: "2021",
          y: 56,
        },
      ],
    },
    {
      yAxis: 0,
      name: "BA7",
      color: "#d63b2f",
      data: [
        {
          name: "2017",
          y: 44.8,
        },
        {
          name: "2018",
          y: 21.7,
        },
        {
          name: "2019",
          y: 42.4,
        },
        {
          name: "2020",
          y: 35,
        },
        {
          name: "2021",
          y: 46.3,
        },
      ],
    },
    {
      yAxis: 0,
      name: "BA8",
      color: "#b73229",
      data: [
        {
          name: "2017",
          y: 45.1,
        },
        {
          name: "2018",
          y: 40.8,
        },
        {
          name: "2019",
          y: 36.3,
        },
        {
          name: "2020",
          y: 38.1,
        },
        {
          name: "2021",
          y: 50,
        },
      ],
    },
    {
      yAxis: 0,
      name: "BA9",
      color: "#992a22",
      data: [
        {
          name: "2017",
          y: 30.7,
        },
        {
          name: "2018",
          y: 19,
        },
        {
          name: "2019",
          y: 26.3,
        },
        {
          name: "2020",
          y: 28.1,
        },
        {
          name: "2021",
          y: 40,
        },
      ],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 650,
        },
        chartOptions: {
          legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
          },
          yAxis: {
            labels: {
              align: "left",
              x: 0,
              y: -5,
            },
            title: {
              text: null,
            },
          },
          subtitle: {
            text: null,
          },
          credits: {
            enabled: false,
          },
          plotOptions: {
            series: {
              pointWidth: 15,
            },
            column: {
              stacking: "normal",
              pointPadding: 0.2,
              borderWidth: 0,
              dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.y != 0 ? this.y : "";
                },
              },
            },
          },
        },
      },
    ],
  },
});
