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
      name: "Farm BA",
      color: "#84d9e5",
      data: [
        {
          name: "2017",
          y: 34.4,
          drilldown: "BA1, Pulau Ketam, Jan, 2014",
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
        //Pulau Ketam, Jan
        name: "BA1, Pulau Ketam, Jan, 2014",
        id: "BA1, Pulau Ketam, Jan, 2014",
        color: "#84d9e5",
        type: "column",
        data: [
          {
            name: "Jan",
            y: 42.2,
            drilldown: "Pulau Ketam Species, Jan, 2021",
          },
          {
            name: "Feb",
            y: 65,
          },
          {
            name: "Mar",
            y: 42.6,
          },
          {
            name: "Apr",
            y: 87,
          },
          {
            name: "Jun",
            y: 75.2,
          },
          {
            name: "July",
            y: 70,
          },
          {
            name: "Aug",
            y: 52.4,
          },
          {
            name: "Sept",
            y: 63.2,
          },
          {
            name: "Oct",
            y: 76,
          },
          {
            name: "Nov",
            y: 72.3,
          },
          {
            name: "Dec",
            y: 65.2,
          },
          {
            name: "YTD",
            y: 54.2,
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
