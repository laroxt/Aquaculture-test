// Create the chart
Highcharts.chart("farmCm_overview", {
  title: {
    text: '<span style="font-weight: bold">Farm Contribution Margin</span>',
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
    text: "All Farm, 2021 ",
    align: "center",
    verticalAlign: "top",
  },

  yAxis: {
    min: 0,
    title: {
      text: '<span style="font-weight: bold">Contribution Margin Revenue(%)</span>',
    },
    // stackLabels: {
    //   enabled: true,
    //   formatter: function () {
    //     return this.total + "%";
    //   },
    //   style: {
    //     fontWeight: "bold",
    //   },
    // },
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
        enabled: true,
        format: "{point.y}%",
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
          y: 60,
          drilldown: "Pulau Ketam, Jan, 2021",
        },
        {
          name: "Feb",
          y: 55,
        },
        {
          name: "Mar",
          y: 55,
        },
        {
          name: "Apr",
          y: 60,
        },
        {
          name: "May",
          y: 70,
        },
        {
          name: "Jun",
          y: 55,
        },
        {
          name: "July",
          y: 40,
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
          y: 55,
        },
        {
          name: "Nov",
          y: 45,
        },
        {
          name: "Dec",
          y: 55,
        },
      ],
    },
    {
      name: "Kong Kong",
      color: "#064a89",
      data: [
        {
          name: "Jan",
          y: 40,
          drilldown: "Kong Kong, Jan, 2021",
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
    {
      name: "Pulau Ketam To Date(YTD)",
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
          y: 42,
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
          y: 58,
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
        color: "#84d9e5",

        data: [
          ["BA1", 52],
          ["BA2", 51],
          ["BA3", 63],
          ["BA4", 43.2],
          ["BA5", 52.7],
          ["BA6", 60],
          ["BA7", 51],
          ["BA8", 53],
          ["BA9", 68],
        ],
      },
      {
        name: "Kong Kong, Jan, 2021",
        id: "Kong Kong, Jan, 2021",
        color: "#064a89",

        data: [
          ["BA1", 52],
          ["BA2", 51],
          ["BA3", 63],
          ["BA4", 43.2],
          ["BA5", 52.7],
          ["BA6", 60],
          ["BA7", 61],
          ["BA8", 53],
          ["BA9", 68],
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
