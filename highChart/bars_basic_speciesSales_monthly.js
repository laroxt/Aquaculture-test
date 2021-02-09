// Create the chart
Highcharts.chart("speciesSales_monthly", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 10,
    spacingRight: 15,
    type: "column",
  },
  title: {
    text: '<span style="font-weight: bold">Species Sales(YTD)</span>',
    align: "center",
  },
  subtitle: {
    text: "Red Snapper, Pulau Ketam, 2017-2021",
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
      text: "Sales Revenue(RM)",
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
      name: "Red Snapper",
      color: "#fa3c4c",
      data: [
        {
          name: "2017",
          y: 43934,
          drilldown: "Red Snapper, Jan, 2017",
        },
        {
          name: "2018",
          y: 29742,
        },
        {
          name: "2019",
          y: 32490,
        },
        {
          name: "2020",
          y: 38121,
        },
        {
          name: "2021",
          y: 52322,
        },
      ],
    },
    {
      name: "YTD",
      color: "#99cc33",
      data: [
        {
          name: "2017",
          y: 0,
        },
        {
          name: "2018",
          y: 0,
        },
        {
          name: "2019",
          y: 0,
        },
        {
          name: "2020",
          y: 0,
        },
        {
          name: "2021",
          y: 0,
        },
        {
          name: "YTD",
          y: 73512,
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
        name: "Red Snapper, Jan, 2017",
        id: "Red Snapper, Jan, 2017",
        color: "#fa3c4c",
        data: [
          {
            name: "Jan",
            y: 32141,
            drilldown: "BA1, Pulau Ketam, Jan, 2017",
          },
          {
            name: "Feb",
            y: 42314,
          },
          {
            name: "Mar",
            y: 52312,
          },
          {
            name: "Apr",
            y: 81235,
          },
          {
            name: "Jun",
            y: 68134,
          },
          {
            name: "July",
            y: 29720,
          },
          {
            name: "Aug",
            y: 38121,
          },
          {
            name: "Sept",
            y: 29742,
          },
          {
            name: "Oct",
            y: 54231,
          },
          {
            name: "Nov",
            y: 32134,
          },
          {
            name: "Dec",
            y: 43123,
          },
          {
            name: "YTD",
            y: 53023,
            color: "#99cc33",
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
