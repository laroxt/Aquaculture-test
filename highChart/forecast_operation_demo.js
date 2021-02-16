$(function () {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  });
});

Highcharts.chart("sales_mix_farm_overview", {
  title: {
    text: '<span style="font-weight: bold">Red Snapper Growth Rate</span>',
    align: "center",
  },

  chart: {
    height: 550,
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 15,
    spacingRight: 15,

    type: "areaspline",
  },

  subtitle: {
    text: "Red Snapper, 2021",
    align: "center",
    verticalAlign: "top",
  },

  yAxis: {
    title: {
      text: "Weight(%)",
    },
    plotLines: [
      {
        value: 100000,
        color: "rgb(50,205,50,0.3)",
        width: 2,
        zIndex: 4,
        label: { text: "Ideal Species Growth" },
        dashStyle: "shortdash",
      },
    ],
    labels: {
      formatter: function () {
        return this.value + "%";
      },
    },
  },

  xAxis: {
    crosshair: true,
    type: "datetime",
    dateTimeLabelFormats: {
      //   millisecond: "%H:%M:%S.%L",
      //   second: "%H:%M:%S",
      //   minute: "%H:%M",
      //   hour: "%H:%M",
      //   day: "%Y %b %e",
      //   week: "%b %e",
      month: "%b %Y",
      year: "%Y",
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

  tooltip: {
    shared: true,
    pointFormat: "<b>{point.x} :</b>" + "Count: <b>{point.y:,.0f}</b>",
    pointFormatter: function () {
      var value;
      if (this.y >= 0) {
        value = this.y + "%";
      } else {
        value = -this.y + "-%";
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
    areaspline: {
      fillOpacity: 0.0,
    },
    series: {
      dataLabels: {
        enabled: true,
      },
    },
  },

  series: [
    {
      name: "High",
      color: "#0084ff",
      data: [
        {
          x: Date.UTC(2014, 0, 1),
          y: 0.011,
        },
        {
          x: Date.UTC(2014, 1, 1),
          y: 0.024,
        },
        {
          x: Date.UTC(2014, 2, 1),
          y: 0.053,
        },
        {
          x: Date.UTC(2014, 3, 1),
          y: 0.114,
        },
        {
          x: Date.UTC(2014, 4, 1),
          y: 0.167,
        },
        {
          x: Date.UTC(2014, 5, 1),
          y: 0.227,
        },
        {
          x: Date.UTC(2014, 6, 1),
          y: 0.322,
        },
        {
          x: Date.UTC(2014, 7, 1),
          y: 0.426,
        },
        {
          x: Date.UTC(2014, 8, 1),
          y: 0.533,
        },
        {
          x: Date.UTC(2014, 9, 1),
          y: 0.553,
        },
        {
          x: Date.UTC(2014, 10, 1),
          y: 0.609,
        },
        {
          x: Date.UTC(2014, 11, 1),
          y: 0.711,
        },
      ],
      //   zones: [
      //     {
      //       value: 8,
      //     },
      //     {
      //       dashStyle: "dot",
      //     },
      //   ],
    },
    {
      name: "Base",
      color: "#fa3c4c",
      data: [
        {
          x: Date.UTC(2014, 0, 1),
          y: 0.011,
        },
        {
          x: Date.UTC(2014, 1, 1),
          y: 0.024,
        },
        {
          x: Date.UTC(2014, 2, 1),
          y: 0.053,
        },
        {
          x: Date.UTC(2014, 3, 1),
          y: 0.114,
        },
        {
          x: Date.UTC(2014, 4, 1),
          y: 0.167,
        },
        {
          x: Date.UTC(2014, 5, 1),
          y: 0.227,
        },
        {
          x: Date.UTC(2014, 6, 1),
          y: 0.322,
        },
        {
          x: Date.UTC(2014, 7, 1),
          y: 0.426,
        },
        {
          x: Date.UTC(2014, 8, 1),
          y: 0.533,
        },
        {
          x: Date.UTC(2014, 9, 1),
          y: 0.553,
        },
        {
          x: Date.UTC(2014, 10, 1),
          y: 0.609,
        },
        {
          x: Date.UTC(2014, 11, 1),
          y: 0.711,
        },
      ],
    },
  ],

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
