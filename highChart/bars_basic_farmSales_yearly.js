var titles2 = ["Farm Sales, 2017-2021"];

Highcharts.chart("farm_sales_monthly", {
  chart: {
    type: "column",
    events: {
      drilldown: function (e) {
        this.setTitle({
          text: "Farm Sales, " + e.point.name,
        });
      },
      drillup: function (e) {
        this.setTitle({
          text: titles2[0],
        });
      },
    },
  },

  title: {
    text: titles2[0],
    style: {
      fontSize: "17px",
      fontWeight: "bold",
    },
  },

  subtitle: {
    text: "Farm BA1, Pulau Ketam",
    align: "center",
    verticalAlign: "top",
  },

  yAxis: {
    stackLabels: {
      enabled: true,
      formatter: function () {
        return this.total + "m";
      },
      style: {
        fontWeight: "bold",
      },
    },
    min: 0,
    title: {
      text: '<span style="font-weight: bold">Sales Revenue(RM)</span>',
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
    },
    column: {
      stacking: "normal",
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },

  series: [
    {
      name: "Farm BA1",
      color: "#4d1b7b",
      data: [
        {
          name: "2017",
          y: 43.4,
          // drilldown: "Farm BA, 2017",
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
        name: "Farm BA, 2017",
        id: "Farm BA, 2017",
        color: "#4d1b7b",

        data: [
          {
            name: "Jan",
            y: 32.2,
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
            color: "#142d04",
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
