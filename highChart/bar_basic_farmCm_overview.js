$(function () {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  });
});

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
    max: 100,
    title: {
      text: "Contribution Margin Revenue(%)",
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: "bold",
      },
    },
    labels: {
      formatter: function () {
        return this.value + "%";
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
      stacking: "percent",
      pointWidth: 50,
      dataLabels: {
        enabled: true,
        format: "{point.y:.1f}%",
      },
    },
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },

  series: [
    {
      dataLabels: {
        enabled: true,
        formatter: function () {
          var pcnt = this.y;
          return Highcharts.numberFormat(pcnt) + "%";
        },
      },
      name: "Pulau Ketam",
      color: "#be29ec",
      data: [
        {
          name: "Jan",
          y: 30,
          drilldown: "All Farm, Jan, 2021",
        },
        {
          name: "Feb",
          y: 25.3,
        },
        {
          name: "Mar",
          y: 32,
        },
        {
          name: "Apr",
          y: 54,
        },
        {
          name: "May",
          y: 67.3,
        },
        {
          name: "Jun",
          y: 51,
        },
        {
          name: "July",
          y: 23,
        },
        {
          name: "Aug",
          y: 34.8,
        },
        {
          name: "Sept",
          y: 23.3,
        },
        {
          name: "Oct",
          y: 41,
        },
        {
          name: "Nov",
          y: 52,
        },
        {
          name: "Dec",
          y: 52,
        },
      ],
    },
    {
      name: "Kong Kong",
      dataLabels: {
        enabled: true,
        formatter: function () {
          var pcnt = this.y;
          return Highcharts.numberFormat(pcnt) + "%";
        },
      },
      color: "#be29ec",
      data: [
        {
          name: "Jan",
          y: 30,
          drilldown: "All Farm, Jan, 2021",
        },
        {
          name: "Feb",
          y: 25.3,
        },
        {
          name: "Mar",
          y: 32,
        },
        {
          name: "Apr",
          y: 54,
        },
        {
          name: "May",
          y: 67.3,
        },
        {
          name: "Jun",
          y: 51,
        },
        {
          name: "July",
          y: 23,
        },
        {
          name: "Aug",
          y: 34.8,
        },
        {
          name: "Sept",
          y: 23.3,
        },
        {
          name: "Oct",
          y: 41,
        },
        {
          name: "Nov",
          y: 52,
        },
        {
          name: "Dec",
          y: 52,
        },
      ],
    },
  ],

  drilldown: {
    series: [
      {
        name: "All Farm, Jan, 2021",
        id: "All Farm, Jan, 2021",
        color: "#be29ec",
        data: [
          ["BA1", 32],
          ["BA2", 51],
          ["BA3", 63],
          ["BA4", 43.2],
          ["BA5", 52.7],
          ["BA6", 60],
          ["BA7", 23],
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
              pointWidth: 23,
            },
            column: {
              stacking: "percent",
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
