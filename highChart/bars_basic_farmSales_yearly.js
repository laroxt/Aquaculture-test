// Create the chart
Highcharts.chart("farm_sales_monthly", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 10,
    spacingRight: 15,
    type: "column",
  },
  title: {
    text: '<span style="font-weight: bold">Farm Sales(YTD)</span>',
    align: "center",
  },
  subtitle: {
    text: "BA1, Pulau Ketam, 2017-2021",
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
      text: "Sales Revenue(RM)",
    },
  },

  xAxis: {
    type: "category",
    crosshair: true,
  },

  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">●</span>{series.name}:<b> RM{point.y}k<br/></b>',
    shared: true,
  },

  plotOptions: {
    series: {
      pointWidth: 50,
      dataLabels: {
        enabled: true,
        format: "{point.y}k",
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
      name: "Farm BA",
      color: "#4d1b7b",
      data: [
        {
          name: "2017",
          y: 43.4,
          drilldown: "Farm BA in 2017",
        },
        {
          name: "2018",
          y: 29.2,
        },
        {
          name: "2019",
          y: 32,
        },
        {
          name: "2020",
          y: 38.2,
        },
        {
          name: "2021",
          y: 52.3,
        },
      ],
    },
    {
      name: "YTD",
      color: "#99cc33",
      data: [
        {
          name: "2017",
          y: null,
        },
        {
          name: "2018",
          y: null,
        },
        {
          name: "2019",
          y: null,
        },
        {
          name: "2020",
          y: null,
        },
        {
          name: "2021",
          y: null,
        },
        {
          name: "YTD",
          y: 73.5,
        },
      ],
    },
  ],
  drilldown: {
    drillUpButton: {
      relativeTo: "spacingBox",
      position: {
        y: 0,
        x: 0,
      },
    },
    series: [
      {
        name: "Farm BA in 2017",
        id: "Farm BA in 2017",
        color: "#4d1b7b",

        data: [
          {
            name: "Jan",
            y: 32.2,
            drilldown: "BA1, Pulau Ketam, Jan, 2017",
          },
          {
            name: "Feb",
            y: 42.3,
          },
          {
            name: "Mar",
            y: 52.3,
          },
          {
            name: "Apr",
            y: 81,
          },
          {
            name: "Jun",
            y: 68.1,
          },
          {
            name: "July",
            y: 29.0,
          },
          {
            name: "Aug",
            y: 38.1,
          },
          {
            name: "Sept",
            y: 29.2,
          },
          {
            name: "Oct",
            y: 54.2,
          },
          {
            name: "Nov",
            y: 32.1,
          },
          {
            name: "Dec",
            y: 43.1,
          },
          {
            name: "YTD",
            y: 53,
            color: "#99cc33",
          },
        ],
      },
    ],
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 750,
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
              pointWidth: 25,
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
