$(function () {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  });
});

Highcharts.chart("farm_sales_yearly", {
  title: {
    text: '<span style="font-weight: bold">Farm Sales</span>',
    align: "center",
  },

  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 15,
    spacingRight: 15,
    type: "column",
  },

  subtitle: {
    text: "All Farm, 2021 ",
    align: "center",
    verticalAlign: "top",
  },

  yAxis: {
    min: 0,
    title: {
      text: "Sales Revenue(RM)",
    },
    stackLabels: {
      enabled: true,
      formatter: function () {
        return this.total + "k";
      },
      style: {
        fontWeight: "bold",
      },
    },
  },

  credits: {
    enabled: false,
  },

  legend: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom",
    borderWidth: 0,
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
      name: "Pulau Ketam",
      color: "#84d9e5",
      data: [
        {
          name: "Jan",
          y: 43.9,
          drilldown: "Pulau Ketam, Jan, 2021",
        },
        {
          name: "Feb",
          y: 29.7,
        },
        {
          name: "Mar",
          y: 32.4,
        },
        {
          name: "Apr",
          y: 38.1,
        },
        {
          name: "May",
          y: 52.3,
        },
        {
          name: "Jun",
          y: 52.3,
        },
        {
          name: "July",
          y: 52.3,
        },
        {
          name: "Aug",
          y: 52.3,
        },
        {
          name: "Sept",
          y: 52.3,
        },
        {
          name: "Oct",
          y: 52.3,
        },
        {
          name: "Nov",
          y: 52.3,
        },
        {
          name: "Dec",
          y: 52.3,
        },
      ],
    },
    {
      name: "Kong Kong",
      color: "#064a89",
      data: [
        {
          name: "Jan",
          y: 43.9,
          drilldown: "Kong Kong, Jan, 2021",
        },
        {
          name: "Feb",
          y: 29.7,
        },
        {
          name: "Mar",
          y: 32.4,
        },
        {
          name: "Apr",
          y: 38.1,
        },
        {
          name: "May",
          y: 52.3,
        },
        {
          name: "Jun",
          y: 23.3,
        },
        {
          name: "July",
          y: 42.3,
        },
        {
          name: "Aug",
          y: 51.5,
        },
        {
          name: "Sept",
          y: 63.8,
        },
        {
          name: "Oct",
          y: 42.2,
        },
        {
          name: "Nov",
          y: 64.1,
        },
        {
          name: "Dec",
          y: 64.2,
        },
      ],
    },
    {
      name: "Kong Kong, Year To Date(YTD)",
      color: "#99cc33",
      data: [
        {
          name: "Jan",
          y: null,
        },
        {
          name: "Feb",
          y: null,
        },
        {
          name: "Mar",
          y: null,
        },
        {
          name: "Apr",
          y: null,
        },
        {
          name: "May",
          y: null,
        },
        {
          name: "May",
          y: null,
        },
        {
          name: "Jun",
          y: null,
        },
        {
          name: "July",
          y: null,
        },
        {
          name: "Aug",
          y: null,
        },
        {
          name: "Sept",
          y: null,
        },
        {
          name: "Oct",
          y: null,
        },
        {
          name: "Nov",
          y: null,
        },
        {
          name: "Dec",
          y: null,
        },
        {
          name: "YTD",
          y: 81.2,
        },
      ],
    },
    {
      name: "Kong Kong, Year To Date(YTD)",
      color: "#0a8f0b",
      data: [
        {
          name: "Jan",
          y: null,
        },
        {
          name: "Feb",
          y: null,
        },
        {
          name: "Mar",
          y: null,
        },
        {
          name: "Apr",
          y: null,
        },
        {
          name: "May",
          y: null,
        },
        {
          name: "Jun",
          y: null,
        },
        {
          name: "July",
          y: null,
        },
        {
          name: "Aug",
          y: null,
        },
        {
          name: "Sept",
          y: null,
        },
        {
          name: "Oct",
          y: null,
        },
        {
          name: "Nov",
          y: null,
        },
        {
          name: "Dec",
          y: null,
        },
        {
          name: "YTD",
          y: 40,
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
        name: "Pulau Ketam, Jan, 2021",
        id: "Pulau Ketam, Jan, 2021",
        color: "#84d9e5",
        data: [
          ["BA1", 43.9],
          ["BA2", 29.7],
          ["BA3", 53.0],
          ["BA4", 52.5],
          ["BA5", 38.1],
          ["BA6", 68.1],
          ["BA7", 38.1],
          ["BA8", 68.1],
          ["BA9", 51.2],
        ],
      },
      {
        name: "Kong Kong, Jan, 2021",
        id: "Kong Kong, Jan, 2021",
        color: "#064a89",
        stackLabels: false,
        data: [
          ["BA1", 43.9],
          ["BA2", 29.7],
          ["BA3", 53.0],
          ["BA4", 52.5],
          ["BA5", 38.1],
          ["BA6", 68.1],
          ["BA7", 38.1],
          ["BA8", 68.1],
          ["BA9", 51.2],
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
