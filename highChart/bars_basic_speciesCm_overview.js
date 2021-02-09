Highcharts.chart("speciesCm_overview", {
  title: {
    text: '<span style="font-weight: bold">Species Contribution Margin</span>',
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
    title: {
      text: "Contribution Margin Revenue(%)",
    },
    stackLabels: {
      style: {
        color: "black",
      },
      enabled: true,
      formatter: function () {
        return this.total + "%";
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

  series: [
    {
      name: "Pulau Ketam",
      color: "#84d9e5",
      data: [
        {
          name: "Jan",
          y: 30,
          drilldown: "Pulau Ketam, Jan, 2021",
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
      color: "#064a89",
      data: [
        {
          name: "Jan",
          y: 30,
          drilldown: "Kong Kong, Jan, 2021",
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
      name: "YTD",
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
          y: 112,
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
      {
        name: "Kong Kong, Jan, 2021",
        id: "Kong Kong, Jan, 2021",
        color: "#064a89",
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
