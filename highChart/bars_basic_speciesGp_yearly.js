var titles1 = ["Species Gross Profit, 2021"];

Highcharts.chart("speciesGp_yearly", {
  chart: {
    type: "column",
    events: {
      drilldown: function (e) {
        this.setTitle({
          text: "Species Gross Profit, " + e.point.name + "," + " 2021",
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
    text: "All Species, Pulau Ketam",
    align: "center",
    verticalAlign: "top",
  },

  yAxis: [
    {
      // Primary yAxis
      labels: {
        format: "{value}M",
      },
      title: {
        text: '<span style="font-weight: bold">Gross Profit(RM)</span>',
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
    {
      // Secondary yAxis
      labels: {
        format: "{value}M",
      },
      title: {
        text: '<span style="font-weight: bold">YTD Gross Profit(RM)</span>',
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
    useHTML: true,
    pointFormat:
      '<span style="color:{series.color}">●</span>{series.name}:<b> RM{point.y}M <span class="tooltipGreen">5%</span></div></b><br>',
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
      name: "All Species",
      color: "#08B8FF",
      data: [
        {
          name: "Jan",
          y: 33.5,
          drilldown: "Pulau Ketam Farms",
        },
        {
          name: "Feb",
          y: 40.7,
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
          y: 42.3,
        },
        {
          name: "Jun",
          y: 42.3,
        },
        {
          name: "July",
          y: 46,
        },
        {
          name: "Aug",
          y: 52.3,
        },
        {
          name: "Sept",
          y: 47.2,
        },
        {
          name: "Oct",
          y: 54,
        },
        {
          name: "Nov",
          y: 52.7,
        },
        {
          name: "Dec",
          y: 47.2,
        },
      ],
    },

    {
      yAxis: 1,
      name: "Species Sales, Year To Date(YTD)",
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
          y: 528.7,
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
        //Pulau Ketam, Jan
        name: "Pulau Ketam Farms",
        id: "Pulau Ketam Farms",
        color: "#ffc425",
        type: "column",
        showInLegend: false,
        data: [
          {
            name: "Red Snapper",
            y: 5,
            color: "#fa3c4c",
          },
          {
            name: "Golden Snapper",
            y: 5.4,
            color: "#0084ff",
          },
          {
            name: "Pomfret",
            y: 6.1,
            color: "#ffc300",
          },
          {
            name: "Seabass",
            y: 5.8,
            color: "#363b74",
          },
          {
            name: "Hybrid Grouper",
            y: 6,
            color: "#d696bb",
          },
          {
            name: "Giant Grouper",
            y: 5.2,
            color: "#4d1b7b",
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
