Highcharts.chart("speciesSales_byFarm_monthly", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 10,
    spacingRight: 15,
    type: "column",
  },

  title: {
    text: '<span style="font-weight: bold">Species Sales By Farm(YTD)</span>',
    align: "center",
  },

  subtitle: {
    text: "B1, Pulau Ketam, 2017-2021",
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
      name: "B1, Pulau Ketam",
      color: "#84d9e5",
      data: [
        {
          name: "2017",
          y: 43,
          drilldown: "B1, Pulau Ketam, 2017",
        },
        {
          name: "2018",
          y: 29.7,
        },
        {
          name: "2019",
          y: 32,
        },
        {
          name: "2020",
          y: 35,
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
        //Pulau Ketam, Jan
        name: "B1, Pulau Ketam, 2017",
        id: "B1, Pulau Ketam, 2017",
        color: "#84d9e5",
        type: "column",
        data: [
          {
            name: "Jan",
            y: 32,
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
            y: 81.5,
          },
          {
            name: "Jun",
            y: 68.4,
          },
          {
            name: "July",
            y: 29,
          },
          {
            name: "Aug",
            y: 38,
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
            y: 32,
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
      {
        //Pulau Ketam, Jan
        name: "BA1, Pulau Ketam, Jan, 2017",
        id: "BA1, Pulau Ketam, Jan, 2017",
        color: "#84d9e5",
        type: "column",
        data: [
          {
            name: "Red Snapper",
            y: 29.2,
            color: "#fa3c4c",
          },
          {
            name: "Golden Snapper",
            y: 32,
            color: "#0084ff",
          },
          {
            name: "Pomfret",
            y: 52.2,
            color: "#ffc300",
          },
          {
            name: "Seabass",
            y: 42.3,
            color: "#363b74",
          },
          {
            name: "Hybrid Grouper",
            y: 29.2,
            color: "#d696bb",
          },
          {
            name: "Giant Grouper",
            y: 43.4,
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
