$(function () {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  });
});

Highcharts.chart("speciesSales_yearly", {
  title: {
    text: '<span style="font-weight: bold">Species Sales</span>',
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
    text: "All Species, 2021 ",
    align: "center",
    verticalAlign: "top",
  },

  yAxis: {
    min: 0,
    title: {
      text: "Sales Revenue(RM)",
    },
    stackLabels: {
      enabled: true,
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

  series: [
    {
      name: "Pulau Ketam",
      color: "#ffc425",
      data: [
        {
          name: "Jan",
          y: 43934,
          drilldown: "Pulau Ketam, Jan, 2021",
        },
        {
          name: "Feb",
          y: 29742,
        },
        {
          name: "Mar",
          y: 32490,
        },
        {
          name: "Apr",
          y: 38121,
        },
        {
          name: "May",
          y: 52322,
        },
        {
          name: "Jun",
          y: 52322,
        },
        {
          name: "July",
          y: 52322,
        },
        {
          name: "Aug",
          y: 52322,
        },
        {
          name: "Sept",
          y: 52322,
        },
        {
          name: "Oct",
          y: 52322,
        },
        {
          name: "Nov",
          y: 52322,
        },
        {
          name: "Dec",
          y: 52322,
        },
      ],
    },
    {
      name: "Kong Kong",
      color: "#f37735",
      data: [
        {
          name: "Jan",
          y: 43934,
          drilldown: "Kong Kong, Jan, 2021",
        },
        {
          name: "Feb",
          y: 29742,
        },
        {
          name: "Mar",
          y: 42123,
        },
        {
          name: "Apr",
          y: 23154,
        },
        {
          name: "May",
          y: 89323,
        },
        {
          name: "Jun",
          y: 74353,
        },
        {
          name: "July",
          y: 32141,
        },
        {
          name: "Aug",
          y: 64345,
        },
        {
          name: "Sept",
          y: 25123,
        },
        {
          name: "Oct",
          y: 31231,
        },
        {
          name: "Nov",
          y: 32512,
        },
        {
          name: "Dec",
          y: 52312,
        },
      ],
    },
    {
      name: "YTD",
      color: "#99cc33",
      data: [
        {
          name: "Jan",
          y: 0,
        },
        {
          name: "Feb",
          y: 0,
        },
        {
          name: "Mar",
          y: 0,
        },
        {
          name: "Apr",
          y: 0,
        },
        {
          name: "May",
          y: 0,
        },
        {
          name: "May",
          y: 0,
        },
        {
          name: "Jun",
          y: 0,
        },
        {
          name: "July",
          y: 0,
        },
        {
          name: "Aug",
          y: 0,
        },
        {
          name: "Sept",
          y: 0,
        },
        {
          name: "Oct",
          y: 0,
        },
        {
          name: "Nov",
          y: 0,
        },
        {
          name: "Dec",
          y: 0,
        },
        {
          name: "YTD",
          y: 81235,
        },
      ],
    },
  ],

  drilldown: {
    series: [
      {
        name: "Pulau Ketam, Jan, 2021",
        id: "Pulau Ketam, Jan, 2021",
        color: "#ffc425",
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
        color: "#f37735",
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
              pointWidth: 23,
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
