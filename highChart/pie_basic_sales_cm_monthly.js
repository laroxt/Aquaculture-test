// Create the chart
Highcharts.chart("farm_sales_cm_year", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 10,
    spacingRight: 15,
    type: "column",
  },
  title: {
    text: '<span style="font-weight: bold">Farm Contribution Margin(YTD)</span>',
    align: "center",
  },
  subtitle: {
    text: "BA1, Pulau Ketam, 2017-2021",
    align: "center",
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },

  yAxis: {
    title: {
      text: "Contribution Margin Revenue(%)",
    },
  },

  xAxis: {
    type: "category",
    crosshair: true,
  },

  tooltip: {
    pointFormat: "<b>{point.x} :</b>" + "Count: <b>{point.y:,.0f}</b>",
    pointFormatter: function () {
      var value;
      if (this.y >= 0) {
        value = "RM " + this.y;
      } else {
        value = "-RM " + -this.y;
      }
      return (
        "<br/>" +
        '<span style="color:' +
        this.series.color +
        '"> ● </span>' +
        " " +
        this.series.name +
        "</span>: <b>" +
        value +
        "</b><br />"
      );
    },
  },

  plotOptions: {
    series: {
      pointWidth: 50,
      dataLabels: {
        enabled: true,
        format: "{point.y:.1f}%",
      },
    },
    column: {
      stacking: "normal",
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },

  // "Jan",
  // "Feb",
  // "Mar",
  // "Apr",
  // "May",
  // "Jun",
  // "Jul",
  // "Aug",
  // "Sep",
  // "Oct",
  // "Nov",
  // "Dec",
  series: [
    {
      name: "B1, Pulau Ketam",
      color: "#84d9e5",
      data: [
        {
          name: "2017",
          y: 34.4,
          drilldown: "Red Snapper, Pulau Ketam, Jan, 2017",
        },
        {
          name: "2018",
          y: 51,
        },
        {
          name: "2019",
          y: 63,
        },
        {
          name: "2020",
          y: 43.6,
        },
        {
          name: "2021",
          y: 60.5,
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
          y: 40.2,
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
        name: "Red Snapper, Pulau Ketam, Jan, 2017",
        id: "Red Snapper, Pulau Ketam, Jan, 2017",
        color: "#84d9e5",
        data: [
          {
            name: "Red Snapper",
            y: 81235,
            color: "#fa3c4c",
          },
          {
            name: "Golden Snapper",
            y: 41234,
            color: "#0084ff",
          },
          {
            name: "Pomfret",
            y: 54512,
            color: "#ffc300",
          },
          {
            name: "Seabass",
            y: 85123,
            color: "#363b74",
          },
          {
            name: "Hybrid Grouper",
            y: 51235,
            color: "#d696bb",
          },
          {
            name: "Giant Grouper",
            y: 42351,
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
          maxWidth: 500,
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
              pointWidth: 50,
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
