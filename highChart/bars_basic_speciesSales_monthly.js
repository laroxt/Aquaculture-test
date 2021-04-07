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
    text: "Species Sales, 2017-2021",
    style: {
      fontSize: "17px",
      fontWeight: "bold",
    },
  },

  subtitle: {
    text: "All Species",
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
        return this.total + "m";
      },
      style: {
        fontWeight: "bold",
      },
    },
  },

  credits: {
    enabled: false,
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
      dataLabels: {
        enabled: false,
        format: "{point.y}m",
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
      name: "Red Snapper",
      color: "#fa3c4c",
      data: [
        {
          name: "2017",
          y: 43,
          // drilldown: "Red Snapper, Jan, 2017",
        },
        {
          name: "2018",
          y: 29.2,
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
    // {
    //   name: "Golden Snapper",
    //   color: "#0084ff",
    //   data: [
    //     {
    //       name: "2017",
    //       y: 48,
    //     },
    //     {
    //       name: "2018",
    //       y: 35.1,
    //     },
    //     {
    //       name: "2019",
    //       y: 28.5,
    //     },
    //     {
    //       name: "2020",
    //       y: 30,
    //     },
    //     {
    //       name: "2021",
    //       y: 41,
    //     },
    //   ],
    // },
    // {
    //   name: "Pomfret",
    //   color: "#ffc300",
    //   data: [
    //     {
    //       name: "2017",
    //       y: 43,
    //     },
    //     {
    //       name: "2018",
    //       y: 29.2,
    //     },
    //     {
    //       name: "2019",
    //       y: 32.4,
    //     },
    //     {
    //       name: "2020",
    //       y: 38.1,
    //     },
    //     {
    //       name: "2021",
    //       y: 52.3,
    //     },
    //   ],
    // },
    // {
    //   name: "Seabass",
    //   color: "#363b74",
    //   data: [
    //     {
    //       name: "2017",
    //       y: 55,
    //     },
    //     {
    //       name: "2018",
    //       y: 32,
    //     },
    //     {
    //       name: "2019",
    //       y: 41,
    //     },
    //     {
    //       name: "2020",
    //       y: 38.1,
    //     },
    //     {
    //       name: "2021",
    //       y: 50.5,
    //     },
    //   ],
    // },
    // {
    //   name: "Hybrid Grouper",
    //   color: "#d696bb",
    //   data: [
    //     {
    //       name: "2017",
    //       y: 48.2,
    //       drilldown: "Red Snapper, Jan, 2017",
    //     },
    //     {
    //       name: "2018",
    //       y: 31.2,
    //     },
    //     {
    //       name: "2019",
    //       y: 30,
    //     },
    //     {
    //       name: "2020",
    //       y: 42,
    //     },
    //     {
    //       name: "2021",
    //       y: 52.3,
    //     },
    //   ],
    // },
    // {
    //   name: "Giant Grouper",
    //   color: "#4d1b7b",
    //   data: [
    //     {
    //       name: "2017",
    //       y: 53,
    //       drilldown: "Red Snapper, Jan, 2017",
    //     },
    //     {
    //       name: "2018",
    //       y: 32.6,
    //     },
    //     {
    //       name: "2019",
    //       y: 42.8,
    //     },
    //     {
    //       name: "2020",
    //       y: 58.1,
    //     },
    //     {
    //       name: "2021",
    //       y: 52.3,
    //     },
    //   ],
    // },
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
  //       name: "Red Snapper, Jan, 2017",
  //       id: "Red Snapper, Jan, 2017",
  //       color: "#fa3c4c",
  //       data: [
  //         {
  //           name: "Jan",
  //           y: 32,
  //         },
  //         {
  //           name: "Feb",
  //           y: 42.3,
  //         },
  //         {
  //           name: "Mar",
  //           y: 52.2,
  //         },
  //         {
  //           name: "Apr",
  //           y: 81.2,
  //         },
  //         {
  //           name: "Jun",
  //           y: 68.4,
  //         },
  //         {
  //           name: "July",
  //           y: 29.7,
  //         },
  //         {
  //           name: "Aug",
  //           y: 38,
  //         },
  //         {
  //           name: "Sept",
  //           y: 29.7,
  //         },
  //         {
  //           name: "Oct",
  //           y: 54.1,
  //         },
  //         {
  //           name: "Nov",
  //           y: 32.1,
  //         },
  //         {
  //           name: "Dec",
  //           y: 43.3,
  //         },
  //         {
  //           name: "YTD",
  //           y: 73,
  //           color: "#142d04",
  //         },
  //       ],
  //     },
  //   ],
  // },
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
