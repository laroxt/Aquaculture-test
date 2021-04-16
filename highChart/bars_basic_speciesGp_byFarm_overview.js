var titles1 = ["Species Gross Profit, 2021"];
var subtitles1 = ["All Farm"];

Highcharts.chart("speciesSales_byFarm_overview", {
  chart: {
    type: "column",
    events: {
      drilldown: function (e) {
        this.setTitle({
          text: "Species Gross Profit, " + e.point.name + "," + " 2021",
        });
        this.setSubtitle({
          text: subtitles1[0],
        });
      },

      drillup: function (e) {
        this.setTitle({
          text: titles1[0],
        });
        this.setSubtitle({
          text: "All Species",
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
    pointFormat:
      '<span style="color:{series.color}">●</span>{series.name}:<b> RM{point.y}M<br/></b>',
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
          drilldown: "Red Snapper",
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
          y: 38.7,
          drilldown: "Golden Snapper",
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
          drilldown: "Pomfret",
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
          drilldown: "Seabass",
        },
        {
          name: "Feb",
          y: 44.3,
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
          y: 44.8,
          drilldown: "Hybrid Grouper",
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
          drilldown: "Giant Grouper",
        },
        {
          name: "Feb",
          y: 40.8,
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
      yAxis: 0,
      name: "Other",
      color: "#c0c0c0",
      data: [
        {
          name: "Jan",
          y: 30.7,
          drilldown: "Other",
        },
        {
          name: "Feb",
          y: 19,
        },
        {
          name: "Mar",
          y: 26.3,
        },
        {
          name: "Apr",
          y: 28.1,
        },
        {
          name: "May",
          y: 40,
        },
        {
          name: "Jun",
          y: 15.1,
        },
        {
          name: "July",
          y: 22.1,
        },
        {
          name: "Aug",
          y: 31,
        },
        {
          name: "Sept",
          y: 22.1,
        },
        {
          name: "Oct",
          y: 39.2,
        },
        {
          name: "Nov",
          y: 26.1,
        },
        {
          name: "Dec",
          y: 34.2,
        },
      ],
    },

    {
      yAxis: 1,
      name: "Species, Year To Date(YTD)",
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
          y: 7083.5,
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
        name: "Red Snapper",
        id: "Red Snapper",
        type: "column",
        showInLegend: false,
        data: [
          {
            name: "B1",
            y: 5.9,
            color: "#fa3c4c",
          },
          {
            name: "B2",
            y: 5.5,
            color: "#fa3c4c",
          },
          {
            name: "B3",
            y: 5.5,
            color: "#fa3c4c",
          },
          {
            name: "B4",
            y: 4,
            color: "#fa3c4c",
          },
          {
            name: "B5",
            y: 6.2,
            color: "#fa3c4c",
          },
          {
            name: "B6",
            y: 5,
            color: "#fa3c4c",
          },
          {
            name: "B7",
            y: 6.5,
            color: "#fa3c4c",
          },
          {
            name: "B8",
            y: 7,
            color: "#fa3c4c",
          },
          {
            name: "B9",
            y: 7.1,
            color: "#fa3c4c",
          },
        ],
      },
      {
        //Pulau Ketam, Jan
        name: "Golden Snapper",
        id: "Golden Snapper",
        type: "column",
        showInLegend: false,
        data: [
          {
            name: "B1",
            y: 4,
            color: "#0084ff",
          },
          {
            name: "B2",
            y: 4.5,
            color: "#0084ff",
          },
          {
            name: "B3",
            y: 4.7,
            color: "#0084ff",
          },
          {
            name: "B4",
            y: 5,
            color: "#0084ff",
          },
          {
            name: "B5",
            y: 4.2,
            color: "#0084ff",
          },
          {
            name: "B6",
            y: 5.6,
            color: "#0084ff",
          },
          {
            name: "B7",
            y: 4.7,
            color: "#0084ff",
          },
          {
            name: "B8",
            y: 4,
            color: "#0084ff",
          },
          {
            name: "B9",
            y: 5.1,
            color: "#0084ff",
          },
        ],
      },
      {
        //Pulau Ketam, Jan
        name: "Pomfret",
        id: "Pomfret",
        type: "column",
        showInLegend: false,
        data: [
          {
            name: "B1",
            y: 4.9,
            color: "#ffc300",
          },
          {
            name: "B2",
            y: 3.5,
            color: "#ffc300",
          },
          {
            name: "B3",
            y: 4.5,
            color: "#ffc300",
          },
          {
            name: "B4",
            y: 3,
            color: "#ffc300",
          },
          {
            name: "B5",
            y: 4.2,
            color: "#ffc300",
          },
          {
            name: "B6",
            y: 4,
            color: "#ffc300",
          },
          {
            name: "B7",
            y: 4.5,
            color: "#ffc300",
          },
          {
            name: "B8",
            y: 5,
            color: "#ffc300",
          },
          {
            name: "B9",
            y: 5.1,
            color: "#ffc300",
          },
        ],
      },
      {
        //Pulau Ketam, Jan
        name: "Seabass",
        id: "Seabass",
        type: "column",
        showInLegend: false,
        data: [
          {
            name: "B1",
            y: 4.9,
            color: "#363b74",
          },
          {
            name: "B2",
            y: 5.5,
            color: "#363b74",
          },
          {
            name: "B3",
            y: 5.6,
            color: "#363b74",
          },
          {
            name: "B4",
            y: 4.3,
            color: "#363b74",
          },
          {
            name: "B5",
            y: 5.2,
            color: "#363b74",
          },
          {
            name: "B6",
            y: 5.2,
            color: "#363b74",
          },
          {
            name: "B7",
            y: 4.5,
            color: "#363b74",
          },
          {
            name: "B8",
            y: 5,
            color: "#363b74",
          },
          {
            name: "B9",
            y: 4.1,
            color: "#363b74",
          },
        ],
      },
      {
        //Pulau Ketam, Jan
        name: "Hybrid Grouper",
        id: "Hybrid Grouper",
        type: "column",
        showInLegend: false,
        data: [
          {
            name: "B1",
            y: 4.9,
            color: "#d696bb",
          },
          {
            name: "B2",
            y: 4.5,
            color: "#d696bb",
          },
          {
            name: "B3",
            y: 4.5,
            color: "#d696bb",
          },
          {
            name: "B4",
            y: 5,
            color: "#d696bb",
          },
          {
            name: "B5",
            y: 4.2,
            color: "#d696bb",
          },
          {
            name: "B6",
            y: 5,
            color: "#d696bb",
          },
          {
            name: "B7",
            y: 5.5,
            color: "#d696bb",
          },
          {
            name: "B8",
            y: 6.1,
            color: "#d696bb",
          },
          {
            name: "B9",
            y: 5.1,
            color: "#d696bb",
          },
        ],
      },
      {
        //Pulau Ketam, Jan
        name: "Giant Grouper",
        id: "Giant Grouper",
        type: "column",
        showInLegend: false,
        data: [
          {
            name: "B1",
            y: 4.9,
            color: "#4d1b76",
          },
          {
            name: "B2",
            y: 4.5,
            color: "#4d1b76",
          },
          {
            name: "B3",
            y: 3.3,
            color: "#4d1b76",
          },
          {
            name: "B4",
            y: 4.3,
            color: "#4d1b76",
          },
          {
            name: "B5",
            y: 5.2,
            color: "#4d1b76",
          },
          {
            name: "B6",
            y: 5,
            color: "#4d1b76",
          },
          {
            name: "B7",
            y: 5.5,
            color: "#4d1b76",
          },
          {
            name: "B8",
            y: 4,
            color: "#4d1b76",
          },
          {
            name: "B9",
            y: 4.1,
            color: "#4d1b76",
          },
        ],
      },
      {
        //Pulau Ketam, Jan
        name: "Other",
        id: "Other",
        type: "column",
        showInLegend: false,
        data: [
          {
            name: "B1",
            y: 3.9,
            color: "#c0c0c0",
          },
          {
            name: "B2",
            y: 2.5,
            color: "#c0c0c0",
          },
          {
            name: "B3",
            y: 2.5,
            color: "#c0c0c0",
          },
          {
            name: "B4",
            y: 3,
            color: "#c0c0c0",
          },
          {
            name: "B5",
            y: 2.2,
            color: "#c0c0c0",
          },
          {
            name: "B6",
            y: 4,
            color: "#c0c0c0",
          },
          {
            name: "B7",
            y: 3.5,
            color: "#c0c0c0",
          },
          {
            name: "B8",
            y: 4,
            color: "#c0c0c0",
          },
          {
            name: "B9",
            y: 5.1,
            color: "#c0c0c0",
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
