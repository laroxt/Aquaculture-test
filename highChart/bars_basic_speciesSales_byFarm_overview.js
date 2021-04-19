var titles1 = ["Species Sales, 2021"];
var subtitles1 = ["By Farm, Pulau Ketam"];

Highcharts.chart("speciesSales_overview", {
  chart: {
    type: "column",
    events: {
      drilldown: function (e) {
        this.setTitle({
          text: "Species Sales, " + e.point.name + "," + " 2021",
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
          text: "All Species, Pulau Ketam",
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
    {
      // Secondary yAxis
      labels: {
        format: "{value}M",
      },
      title: {
        text: '<span style="font-weight: bold">YTD Sales Revenue(RM)</span>',
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
          y: 9.9,
          drilldown: "Red Snapper",
        },
        {
          name: "Feb",
          y: 9.7,
        },
        {
          name: "Mar",
          y: 8.4,
        },
        {
          name: "Apr",
          y: 8.1,
        },
        {
          name: "May",
          y: 8.3,
        },
        {
          name: "Jun",
          y: 7.3,
        },
        {
          name: "July",
          y: 8.3,
        },
        {
          name: "Aug",
          y: 7.3,
        },
        {
          name: "Sept",
          y: 7.3,
        },
        {
          name: "Oct",
          y: 7.3,
        },
        {
          name: "Nov",
          y: 8.3,
        },
        {
          name: "Dec",
          y: 6.3,
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
          y: 10.5,
          drilldown: "Golden Snapper",
        },
        {
          name: "Feb",
          y: 8.4,
        },
        {
          name: "Mar",
          y: 8.1,
        },
        {
          name: "Apr",
          y: 7.1,
        },
        {
          name: "May",
          y: 7.3,
        },
        {
          name: "Jun",
          y: 7.3,
        },
        {
          name: "July",
          y: 7.3,
        },
        {
          name: "Aug",
          y: 6.1,
        },
        {
          name: "Sept",
          y: 9.8,
        },
        {
          name: "Oct",
          y: 7.9,
        },
        {
          name: "Nov",
          y: 6,
        },
        {
          name: "Dec",
          y: 7,
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
          y: 12.9,
          drilldown: "Pomfret",
        },
        {
          name: "Feb",
          y: 6.1,
        },
        {
          name: "Mar",
          y: 6.4,
        },
        {
          name: "Apr",
          y: 6.1,
        },
        {
          name: "May",
          y: 6,
        },
        {
          name: "Jun",
          y: 7.1,
        },
        {
          name: "July",
          y: 7.3,
        },
        {
          name: "Aug",
          y: 7.1,
        },
        {
          name: "Sept",
          y: 6,
        },
        {
          name: "Oct",
          y: 7.2,
        },
        {
          name: "Nov",
          y: 6.1,
        },
        {
          name: "Dec",
          y: 7,
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
          y: 11.8,
          drilldown: "Seabass",
        },
        {
          name: "Feb",
          y: 8.3,
        },
        {
          name: "Mar",
          y: 7.4,
        },
        {
          name: "Apr",
          y: 8.5,
        },
        {
          name: "May",
          y: 8,
        },
        {
          name: "Jun",
          y: 8.5,
        },
        {
          name: "July",
          y: 7,
        },
        {
          name: "Aug",
          y: 7.1,
        },
        {
          name: "Sept",
          y: 7.8,
        },
        {
          name: "Oct",
          y: 7.2,
        },
        {
          name: "Nov",
          y: 7.1,
        },
        {
          name: "Dec",
          y: 7,
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
          y: 11,
          drilldown: "Hybrid Grouper",
        },
        {
          name: "Feb",
          y: 8.7,
        },
        {
          name: "Mar",
          y: 7.4,
        },
        {
          name: "Apr",
          y: 9,
        },
        {
          name: "May",
          y: 8.3,
        },
        {
          name: "Jun",
          y: 7.3,
        },
        {
          name: "July",
          y: 7.3,
        },
        {
          name: "Aug",
          y: 7,
        },
        {
          name: "Sept",
          y: 7.8,
        },
        {
          name: "Oct",
          y: 6,
        },
        {
          name: "Nov",
          y: 6,
        },
        {
          name: "Dec",
          y: 6.2,
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
          y: 13.8,
          drilldown: "Giant Grouper",
        },
        {
          name: "Feb",
          y: 7.8,
        },
        {
          name: "Mar",
          y: 7.3,
        },
        {
          name: "Apr",
          y: 7.1,
        },
        {
          name: "May",
          y: 7,
        },
        {
          name: "Jun",
          y: 6.1,
        },
        {
          name: "July",
          y: 6.1,
        },
        {
          name: "Aug",
          y: 7,
        },
        {
          name: "Sept",
          y: 7.1,
        },
        {
          name: "Oct",
          y: 7.2,
        },
        {
          name: "Nov",
          y: 7.1,
        },
        {
          name: "Dec",
          y: 8.2,
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
          y: 11.2,
          drilldown: "Other",
        },
        {
          name: "Feb",
          y: 9,
        },
        {
          name: "Mar",
          y: 8.3,
        },
        {
          name: "Apr",
          y: 8.1,
        },
        {
          name: "May",
          y: 7,
        },
        {
          name: "Jun",
          y: 8.1,
        },
        {
          name: "July",
          y: 7.1,
        },
        {
          name: "Aug",
          y: 7,
        },
        {
          name: "Sept",
          y: 6.1,
        },
        {
          name: "Oct",
          y: 6.2,
        },
        {
          name: "Nov",
          y: 6.1,
        },
        {
          name: "Dec",
          y: 6.2,
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
          y: 644.5,
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
            name: "Red Snapper, B1",
            y: 1.2,
            color: "#fa3c4c",
          },
          {
            name: "Red Snapper, B2",
            y: 1,
            color: "#fa3c4c",
          },
          {
            name: "Red Snapper, B3",
            y: 1.2,
            color: "#fa3c4c",
          },
          {
            name: "Red Snapper, B4",
            y: 1,
            color: "#fa3c4c",
          },
          {
            name: "Red Snapper, B5",
            y: 1.2,
            color: "#fa3c4c",
          },
          {
            name: "Red Snapper, B6",
            y: 1,
            color: "#fa3c4c",
          },
          {
            name: "Red Snapper, B7",
            y: 1.2,
            color: "#fa3c4c",
          },
          {
            name: "Red Snapper, B8",
            y: 1,
            color: "#fa3c4c",
          },
          {
            name: "Red Snapper, B9",
            y: 1.1,
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
            name: "Golden Snapper, BA1",
            y: 1,
            color: "#0084ff",
          },
          {
            name: "Golden Snapper, BA2",
            y: 1.2,
            color: "#0084ff",
          },
          {
            name: "Golden Snapper, BA3",
            y: 1.3,
            color: "#0084ff",
          },
          {
            name: "Golden Snapper, BA4",
            y: 1,
            color: "#0084ff",
          },
          {
            name: "Golden Snapper, BA5",
            y: 1.2,
            color: "#0084ff",
          },
          {
            name: "Golden Snapper, BA6",
            y: 1.4,
            color: "#0084ff",
          },
          {
            name: "Golden Snapper, BA7",
            y: 1.3,
            color: "#0084ff",
          },
          {
            name: "Golden Snapper, BA8",
            y: 1,
            color: "#0084ff",
          },
          {
            name: "Golden Snapper, BA9",
            y: 1.1,
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
            name: "Pomfret, BA1",
            y: 1.3,
            color: "#ffc300",
          },
          {
            name: "Pomfret, BA2",
            y: 1.2,
            color: "#ffc300",
          },
          {
            name: "Pomfret, BA3",
            y: 1.4,
            color: "#ffc300",
          },
          {
            name: "Pomfret, BA4",
            y: 1,
            color: "#ffc300",
          },
          {
            name: "Pomfret, BA5",
            y: 1.2,
            color: "#ffc300",
          },
          {
            name: "Pomfret, BA6",
            y: 1,
            color: "#ffc300",
          },
          {
            name: "Pomfret, BA7",
            y: 1.5,
            color: "#ffc300",
          },
          {
            name: "Pomfret, BA8",
            y: 1,
            color: "#ffc300",
          },
          {
            name: "Pomfret, BA9",
            y: 1.1,
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
            name: "Seabass, BA1",
            y: 1.4,
            color: "#363b74",
          },
          {
            name: "Seabass, BA2",
            y: 1.5,
            color: "#363b74",
          },
          {
            name: "Seabass, BA3",
            y: 1.6,
            color: "#363b74",
          },
          {
            name: "Seabass, BA4",
            y: 1.3,
            color: "#363b74",
          },
          {
            name: "Seabass, BA5",
            y: 1.2,
            color: "#363b74",
          },
          {
            name: "Seabass, BA6",
            y: 1.2,
            color: "#363b74",
          },
          {
            name: "Seabass, BA7",
            y: 1.5,
            color: "#363b74",
          },
          {
            name: "Seabass, BA8",
            y: 1,
            color: "#363b74",
          },
          {
            name: "Seabass, BA9",
            y: 1.1,
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
            name: "Hybrid Grouper, BA1",
            y: 1.3,
            color: "#d696bb",
          },
          {
            name: "Hybrid Grouper, BA2",
            y: 1.5,
            color: "#d696bb",
          },
          {
            name: "Hybrid Grouper, BA3",
            y: 1.5,
            color: "#d696bb",
          },
          {
            name: "Hybrid Grouper, BA4",
            y: 1,
            color: "#d696bb",
          },
          {
            name: "Hybrid Grouper, BA5",
            y: 1.2,
            color: "#d696bb",
          },
          {
            name: "Hybrid Grouper, BA6",
            y: 1,
            color: "#d696bb",
          },
          {
            name: "Hybrid Grouper, BA7",
            y: 1.4,
            color: "#d696bb",
          },
          {
            name: "Hybrid Grouper, BA8",
            y: 1,
            color: "#d696bb",
          },
          {
            name: "Hybrid Grouper, BA9",
            y: 1.1,
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
            name: "Giant Grouper, BA1",
            y: 1.4,
            color: "#4d1b76",
          },
          {
            name: "Giant Grouper, BA2",
            y: 1.5,
            color: "#4d1b76",
          },
          {
            name: "Giant Grouper, BA3",
            y: 1.3,
            color: "#4d1b76",
          },
          {
            name: "Giant Grouper, BA4",
            y: 1.3,
            color: "#4d1b76",
          },
          {
            name: "Giant Grouper, BA5",
            y: 1.2,
            color: "#4d1b76",
          },
          {
            name: "Giant Grouper, BA6",
            y: 1,
            color: "#4d1b76",
          },
          {
            name: "Giant Grouper, BA7",
            y: 1.5,
            color: "#4d1b76",
          },
          {
            name: "Giant Grouper, BA8",
            y: 1,
            color: "#4d1b76",
          },
          {
            name: "Giant Grouper, BA9",
            y: 1.1,
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
            name: "Other, BA1",
            y: 1.4,
            color: "#c0c0c0",
          },
          {
            name: "Other, BA2",
            y: 1.5,
            color: "#c0c0c0",
          },
          {
            name: "Other, BA3",
            y: 1.5,
            color: "#c0c0c0",
          },
          {
            name: "Other, BA4",
            y: 1,
            color: "#c0c0c0",
          },
          {
            name: "Other, BA5",
            y: 1.2,
            color: "#c0c0c0",
          },
          {
            name: "Other, BA6",
            y: 1,
            color: "#c0c0c0",
          },
          {
            name: "Other, BA7",
            y: 1.5,
            color: "#c0c0c0",
          },
          {
            name: "Other, BA8",
            y: 1,
            color: "#c0c0c0",
          },
          {
            name: "Other, BA9",
            y: 1.1,
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
