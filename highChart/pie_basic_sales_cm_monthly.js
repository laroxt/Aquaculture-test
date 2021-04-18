var titles1 = ["Species Contribution Margin, 2021"];
var subtitle1 = ["All Species, Pulau Ketam"];

Highcharts.chart("farm_sales_cm_year2", {
  chart: {
    type: "column",
    events: {
      drilldown: function (e) {
        this.setSubtitle({
          text: e.point.name + ", " + "Pulau Ketam",
        });
      },
      drillup: function (e) {
        this.setSubtitle({
          text: subtitle1[0],
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
    text: subtitle1[0],
  },
  // subtitle: {
  //   text: "BA1, Pulau Ketam, 2021",
  //   align: "center",
  // },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },

  yAxis: {
    title: {
      text: '<span style="font-weight: bold">Contribution Margin(%)</span>',
    },
    stackLabels: {
      enabled: true,
      formatter: function () {
        return this.total + "%";
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
    pointFormat: "<b>{point.x} :</b>" + "Count: <b>{point.y:,.0f}</b>",
    pointFormatter: function () {
      var value;
      if (this.y >= 0) {
        value = this.y + "% ";
      } else {
        value = -this.y + "-% ";
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
        enabled: false,
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
      showInLegend: false,
      data: [
        {
          name: "Red Snapper",
          y: 64,
          color: "#fa3c4c",
          drilldown: "Red Snapper",
        },
        {
          name: "Golden Snapper",
          y: 42,
          color: "#0084ff",
        },
        {
          name: "Pomfret",
          y: 57,
          color: "#ffc300",
        },
        {
          name: "Seabass",
          y: 63,
          color: "#363b74",
        },
        {
          name: "Hybrid Grouper",
          y: 45,
          color: "#d696bb",
        },
        {
          name: "Giant Grouper",
          y: 64,
          color: "#4d1b7b",
        },
        {
          name: "Other",
          y: 19,
          color: "#c0c0c0",
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
        name: "Red Snapper",
        id: "Red Snapper",
        color: "#fa3c4c",
        showInLegend: false,
        data: [
          {
            name: "Jan",
            y: 4,
          },
          {
            name: "Feb",
            y: 7,
          },
          {
            name: "Mar",
            y: 5,
          },
          {
            name: "Apr",
            y: 6,
          },
          {
            name: "May",
            y: 4,
          },
          {
            name: "Jun",
            y: 4,
          },
          {
            name: "July",
            y: 5,
          },
          {
            name: "Aug",
            y: 6,
          },
          {
            name: "Sept",
            y: 5,
          },
          {
            name: "Oct",
            y: 6,
          },
          {
            name: "Nov",
            y: 7,
          },
          {
            name: "Dec",
            y: 5,
          },
          // {
          //   name: "YTD",
          //   color: "#99cc33",
          //   y: 52,
          // },
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
