var titles = ["Farm Contribution Margin, 2021"];

Highcharts.chart("farmCm_overview", {
  chart: {
    type: "column",
    events: {
      drilldown: function (e) {
        this.setTitle({
          text: "Farm Contribution Margin, " + e.point.name + "," + " 2021",
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
    text: titles[0],
    style: {
      fontSize: "17px",
      fontWeight: "bold",
    },
  },

  subtitle: {
    text: "All Farm",
    align: "center",
    verticalAlign: "top",
  },

  yAxis: {
    min: 0,
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
    shared: true,
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

  series: [
    {
      name: "Pulau Ketam",
      color: "#84d9e5",
      data: [
        {
          name: "Jan",
          y: 51,
          drilldown: "Pulau Ketam",
        },
        {
          name: "Feb",
          y: 65,
        },
        {
          name: "Mar",
          y: 65,
        },
        {
          name: "Apr",
          y: 70,
        },
        {
          name: "May",
          y: 60,
        },
        {
          name: "Jun",
          y: 55,
        },
        {
          name: "July",
          y: 60,
        },
        {
          name: "Aug",
          y: 45,
        },
        {
          name: "Sept",
          y: 50,
        },
        {
          name: "Oct",
          y: 65,
        },
        {
          name: "Nov",
          y: 55,
        },
        {
          name: "Dec",
          y: 45,
        },
      ],
    },
    {
      name: "Kong Kong",
      color: "#064a89",
      data: [
        {
          name: "Jan",
          y: 57,
          drilldown: "Kong Kong",
        },
        {
          name: "Feb",
          y: 45,
        },
        {
          name: "Mar",
          y: 45,
        },
        {
          name: "Apr",
          y: 40,
        },
        {
          name: "May",
          y: 30,
        },
        {
          name: "Jun",
          y: 45,
        },
        {
          name: "July",
          y: 60,
        },
        {
          name: "Aug",
          y: 55,
        },
        {
          name: "Sept",
          y: 50,
        },
        {
          name: "Oct",
          y: 45,
        },
        {
          name: "Nov",
          y: 55,
        },
        {
          name: "Dec",
          y: 45,
        },
      ],
    },
    // {
    //   name: "Pulau Ketam To Date(YTD)",
    //   color: "#99cc33",
    //   data: [
    //     {
    //       name: "Jan",
    //       y: null,
    //     },
    //     {
    //       name: "Feb",
    //       y: null,
    //     },
    //     {
    //       name: "Mar",
    //       y: null,
    //     },
    //     {
    //       name: "Apr",
    //       y: null,
    //     },
    //     {
    //       name: "May",
    //       y: null,
    //     },
    //     {
    //       name: "Jun",
    //       y: null,
    //     },
    //     {
    //       name: "July",
    //       y: null,
    //     },
    //     {
    //       name: "Aug",
    //       y: null,
    //     },
    //     {
    //       name: "Sept",
    //       y: null,
    //     },
    //     {
    //       name: "Oct",
    //       y: null,
    //     },
    //     {
    //       name: "Nov",
    //       y: null,
    //     },
    //     {
    //       name: "Dec",
    //       y: null,
    //     },
    //     {
    //       name: "YTD",
    //       y: 42,
    //     },
    //   ],
    // },
    // {
    //   name: "Kong Kong, Year To Date(YTD)",
    //   color: "#0a8f0b",
    //   data: [
    //     {
    //       name: "Jan",
    //       y: null,
    //     },
    //     {
    //       name: "Feb",
    //       y: null,
    //     },
    //     {
    //       name: "Mar",
    //       y: null,
    //     },
    //     {
    //       name: "Apr",
    //       y: null,
    //     },
    //     {
    //       name: "May",
    //       y: null,
    //     },
    //     {
    //       name: "Jun",
    //       y: null,
    //     },
    //     {
    //       name: "July",
    //       y: null,
    //     },
    //     {
    //       name: "Aug",
    //       y: null,
    //     },
    //     {
    //       name: "Sept",
    //       y: null,
    //     },
    //     {
    //       name: "Oct",
    //       y: null,
    //     },
    //     {
    //       name: "Nov",
    //       y: null,
    //     },
    //     {
    //       name: "Dec",
    //       y: null,
    //     },
    //     {
    //       name: "YTD",
    //       y: 58,
    //     },
    //   ],
    // },
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
        name: "Pulau Ketam",
        id: "Pulau Ketam",
        color: "#84d9e5",
        // showInLegend: false,
        data: [
          ["BA1", 7],
          ["BA2", 5],
          ["BA3", 8],
          ["BA4", 2],
          ["BA5", 5],
          ["BA6", 7],
          ["BA7", 5],
          ["BA8", 6],
          ["BA9", 6],
        ],
      },
      {
        name: "Kong Kong",
        id: "Kong Kong",
        color: "#064a89",

        data: [
          ["BA1", 6],
          ["BA2", 7],
          ["BA3", 8],
          ["BA4", 6],
          ["BA5", 4],
          ["BA6", 7],
          ["BA7", 8],
          ["BA8", 5],
          ["BA9", 6],
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
