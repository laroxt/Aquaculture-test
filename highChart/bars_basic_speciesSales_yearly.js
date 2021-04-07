var titles1 = ["Species Sales, 2021"];

Highcharts.chart("speciesSales_yearly", {
  chart: {
    type: "column",
    events: {
      drilldown: function (e) {
        this.setTitle({
          text: "Species Sales, " + e.point.name + "," + " 2021",
        });
      },
      drillup: function (e) {
        this.setTitle({
          text: titles1[0],
        });
      },
    },
  },

  title: {
    text: titles1[0],
    style: {
      fontSize: "17px",
      fontWeight: "bold",
    },
  },

  subtitle: {
    text: "All Species ",
    align: "center",
    verticalAlign: "top",
  },

  yAxis: [
    {
      // Primary yAxis
      labels: {
        format: "{value}m",
      },
      title: {
        text: '<span style="font-weight: bold">Sales Revenue(RM)</span>',
      },
      stackLabels: {
        enabled: true,
        formatter: function () {
          return this.total + "m";
        },
        style: {
          fontWeight: "bold",
        },
      },
    },
    {
      // Secondary yAxis
      labels: {
        format: "{value}m",
      },
      title: {
        text: '<span style="font-weight: bold">YTD Sales Revenue(RM)</span>',
      },
      stackLabels: {
        enabled: true,
        formatter: function () {
          return this.total + "m";
        },
        style: {
          fontWeight: "bold",
        },
      },
      opposite: true,
    },
  ],

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
      '<span style="color:{series.color}">●</span>{series.name}:<b> RM{point.y}m<br/></b>',
    shared: true,
  },

  plotOptions: {
    series: {
      pointWidth: 50,
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
      name: "Red Snapper",
      color: "#fa3c4c",
      data: [
        {
          name: "Jan",
          y: 43.9,
          // drilldown: "Pulau Ketam Farms",
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
      yAxis: 0,
      name: "Golden Snapper",
      color: "#0084ff",
      data: [
        {
          name: "Jan",
          y: 33.2,
        },
        {
          name: "Feb",
          y: 32.4,
        },
        {
          name: "Mar",
          y: 38.1,
        },
        {
          name: "Apr",
          y: 42.1,
        },
        {
          name: "May",
          y: 52.3,
        },
        {
          name: "Jun",
          y: 26.3,
        },
        {
          name: "July",
          y: 39.3,
        },
        {
          name: "Aug",
          y: 55.1,
        },
        {
          name: "Sept",
          y: 59.8,
        },
        {
          name: "Oct",
          y: 45.9,
        },
        {
          name: "Nov",
          y: 62,
        },
        {
          name: "Dec",
          y: 60,
        },
      ],
    },
    {
      yAxis: 0,
      name: "Pomfret",
      color: "#ffc300",
      data: [
        {
          name: "Jan",
          y: 40,
        },
        {
          name: "Feb",
          y: 23.1,
        },
        {
          name: "Mar",
          y: 26.4,
        },
        {
          name: "Apr",
          y: 42.1,
        },
        {
          name: "May",
          y: 55,
        },
        {
          name: "Jun",
          y: 25.1,
        },
        {
          name: "July",
          y: 48.3,
        },
        {
          name: "Aug",
          y: 42.1,
        },
        {
          name: "Sept",
          y: 60,
        },
        {
          name: "Oct",
          y: 45.2,
        },
        {
          name: "Nov",
          y: 61.1,
        },
        {
          name: "Dec",
          y: 52,
        },
      ],
    },
    {
      yAxis: 0,
      name: "Seabass",
      color: "#363b74",
      data: [
        {
          name: "Jan",
          y: 37,
          // drilldown: "Kong Kong Farms",
        },
        {
          name: "Feb",
          y: 25,
        },
        {
          name: "Mar",
          y: 32.4,
        },
        {
          name: "Apr",
          y: 38.5,
        },
        {
          name: "May",
          y: 56,
        },
        {
          name: "Jun",
          y: 25.5,
        },
        {
          name: "July",
          y: 42,
        },
        {
          name: "Aug",
          y: 56.1,
        },
        {
          name: "Sept",
          y: 60.8,
        },
        {
          name: "Oct",
          y: 52.2,
        },
        {
          name: "Nov",
          y: 62.1,
        },
        {
          name: "Dec",
          y: 54,
        },
      ],
    },
    {
      yAxis: 0,
      name: "Hybrid Grouper",
      color: "#d696bb",
      data: [
        {
          name: "Jan",
          y: 43,
        },
        {
          name: "Feb",
          y: 21.7,
        },
        {
          name: "Mar",
          y: 42.4,
        },
        {
          name: "Apr",
          y: 35,
        },
        {
          name: "May",
          y: 46.3,
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
          y: 50,
        },
        {
          name: "Sept",
          y: 67.8,
        },
        {
          name: "Oct",
          y: 42,
        },
        {
          name: "Nov",
          y: 55,
        },
        {
          name: "Dec",
          y: 64.2,
        },
      ],
    },
    {
      yAxis: 0,
      name: "Giant Grouper",
      color: "#4d1b7b",
      data: [
        {
          name: "Jan",
          y: 45.1,
        },
        {
          name: "Feb",
          y: 29,
        },
        {
          name: "Mar",
          y: 36.3,
        },
        {
          name: "Apr",
          y: 38.1,
        },
        {
          name: "May",
          y: 50,
        },
        {
          name: "Jun",
          y: 25.1,
        },
        {
          name: "July",
          y: 42.1,
        },
        {
          name: "Aug",
          y: 51,
        },
        {
          name: "Sept",
          y: 42.1,
        },
        {
          name: "Oct",
          y: 49.2,
        },
        {
          name: "Nov",
          y: 66.1,
        },
        {
          name: "Dec",
          y: 54.2,
        },
      ],
    },

    {
      yAxis: 1,
      name: "Species Sales, Year To Date(YTD)",
      color: "#78fd79",
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
          y: 3232.3,
        },
      ],
    },
  ],

  // drilldown: {
  //   drillUpButton: {
  //     relativeTo: "spacingBox",
  //     position: {
  //       y: 0,
  //       x: 0,
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Pulau Ketam Farms",
  //       id: "Pulau Ketam Farms",
  //       color: "#84d9e5",
  //       showEmpty: false,
  //       data: [
  //         ["BA1", 43.9],
  //         ["BA2", 29.7],
  //         ["BA3", 53.0],
  //         ["BA4", 52.5],
  //         ["BA5", 38.1],
  //         ["BA6", 68.1],
  //         ["BA7", 38.1],
  //         ["BA8", 68.1],
  //         ["BA9", 51.2],
  //       ],
  //     },
  //     {
  //       name: "Kong Kong Farms",
  //       id: "Kong Kong Farms",
  //       color: "#064a89",

  //       data: [
  //         ["BA1", 43.9],
  //         ["BA2", 29.7],
  //         ["BA3", 53.0],
  //         ["BA4", 52.5],
  //         ["BA5", 38.1],
  //         ["BA6", 68.1],
  //         ["BA7", 38.1],
  //         ["BA8", 68.1],
  //         ["BA9", 51.2],
  //       ],
  //     },
  //   ],
  // },

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
