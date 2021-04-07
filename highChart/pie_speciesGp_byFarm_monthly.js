// Create the chart
Highcharts.chart("speciesSales_byFarm_monthly", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 10,
    spacingRight: 15,
    type: "column",
  },
  title: {
    text: '<span style="font-weight: bold">Gross Profit By Farm(YTD)</span>',
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
      text: '<span style="font-weight: bold">Gross Profit Revenue(RM)</span>',
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
        enabled: true,
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
      name: "B1, Pulau Ketam",
      color: "#FA3C4C",
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
          y: 32.4,
        },
        {
          name: "2020",
          y: 38.1,
        },
        {
          name: "2021",
          y: 52,
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
        color: "#FA3C4C",
        type: "column",
        data: [
          {
            name: "Jan",
            y: 32.1,
            drilldown: "BA1, Pulau Ketam, Jan, 2017",
          },
          {
            name: "Feb",
            y: 42.4,
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
            y: 29,
          },
          {
            name: "Aug",
            y: 38.1,
          },
          {
            name: "Sept",
            y: 29,
          },
          {
            name: "Oct",
            y: 54.2,
          },
          {
            name: "Nov",
            y: 32.4,
          },
          {
            name: "Dec",
            y: 43,
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
