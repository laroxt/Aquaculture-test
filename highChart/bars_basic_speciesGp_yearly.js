$(function () {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  });
});

Highcharts.chart("speciesGp_yearly", {
  title: {
    text: '<span style="font-weight: bold">Species GP</span>',
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
    text: "All Species, 2021 ",
    align: "center",
    verticalAlign: "top",
  },

  yAxis: {
    min: 0,
    title: {
      text: "Gross Profit Revenue(RM)",
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
      color: "#ffc425",
      data: [
        {
          name: "Jan",
          y: 43,
          drilldown: "Pulau Ketam, Jan, 2021",
        },
        {
          name: "Feb",
          y: 29.7,
        },
        {
          name: "Mar",
          y: 32,
        },
        {
          name: "Apr",
          y: 38.1,
        },
        {
          name: "May",
          y: 52.2,
        },
        {
          name: "Jun",
          y: 52,
        },
        {
          name: "July",
          y: 52.2,
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
          y: 52.2,
        },
        {
          name: "Dec",
          y: 52.3,
        },
      ],
    },
    {
      name: "Kong Kong",
      color: "#f37735",
      data: [
        {
          name: "Jan",
          y: 43.9,
          drilldown: "Kong Kong, Jan, 2021",
        },
        {
          name: "Feb",
          y: 29.2,
        },
        {
          name: "Mar",
          y: 42.1,
        },
        {
          name: "Apr",
          y: 23.4,
        },
        {
          name: "May",
          y: 89.3,
        },
        {
          name: "Jun",
          y: 74.3,
        },
        {
          name: "July",
          y: 32.1,
        },
        {
          name: "Aug",
          y: 64.5,
        },
        {
          name: "Sept",
          y: 25.1,
        },
        {
          name: "Oct",
          y: 31.1,
        },
        {
          name: "Nov",
          y: 32.2,
        },
        {
          name: "Dec",
          y: 52.2,
        },
      ],
    },
    {
      name: "Pulau Ketam, Year To Date(YTD)",
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
        color: "#ffc425",
        data: [
          {
            name: "Red Snapper",
            y: 81.5,
            color: "#fa3c4c",
          },
          {
            name: "Golden Snapper",
            y: 41.2,
            color: "#0084ff",
          },
          {
            name: "Pomfret",
            y: 54,
            color: "#ffc300",
          },
          {
            name: "Seabass",
            y: 85.1,
            color: "#363b74",
          },
          {
            name: "Hybrid Grouper",
            y: 51.5,
            color: "#d696bb",
          },
          {
            name: "Giant Grouper",
            y: 42,
            color: "#4d1b7b",
          },
        ],
      },
      {
        name: "Kong Kong, Jan, 2021",
        id: "Kong Kong, Jan, 2021",
        color: "#f37735",
        data: [
          {
            name: "Red Snapper",
            y: 81,
            color: "#fa3c4c",
          },
          {
            name: "Golden Snapper",
            y: 41,
            color: "#0084ff",
          },
          {
            name: "Pomfret",
            y: 54.5,
            color: "#ffc300",
          },
          {
            name: "Seabass",
            y: 85.1,
            color: "#363b74",
          },
          {
            name: "Hybrid Grouper",
            y: 51.2,
            color: "#d696bb",
          },
          {
            name: "Giant Grouper",
            y: 42.3,
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
