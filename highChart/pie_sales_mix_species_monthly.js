$(function () {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  });
});

Highcharts.chart("sales_mix_species", {
  title: {
    text: '<span style="font-weight: bold">Species Sales Mix</span>',
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
    text: "All Species, B1, Pulau Ketam, 2021 ",
    align: "center",
    verticalAlign: "top",
  },

  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },

  yAxis: {
    title: {
      text: "Sales Mix Revenue(%)",
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
      name: "B1, Pulau Ketam",
      color: "#84d9e5",
      data: [
        {
          name: "Red Snapper",
          y: 15,
          color: "#fa3c4c",
          drilldown: "Red Snapper, Pulau Ketam, Jan, 2021",
        },
        {
          name: "Golden Snapper",
          y: 20,
          color: "#0084ff",
        },
        {
          name: "Pomfret",
          y: 16,
          color: "#ffc300",
        },
        {
          name: "Seabass",
          y: 11,
          color: "#363b74",
        },
        {
          name: "Hybrid Grouper",
          y: 15,
          color: "#d696bb",
        },
        {
          name: "Giant Grouper",
          y: 21,
          color: "#4d1b7b",
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
        name: "Red Snapper, Pulau Ketam, Jan, 2021",
        id: "Red Snapper, Pulau Ketam, Jan, 2021",
        color: "#fa3c4c",

        data: [
          {
            name: "Jan",
            y: 0.6,
          },
          {
            name: "Feb",
            y: 1.2,
          },
          {
            name: "Mar",
            y: 0.9,
          },
          {
            name: "Apr",
            y: 1.3,
          },
          {
            name: "May",
            y: 1.5,
          },
          {
            name: "Jun",
            y: 0.9,
          },
          {
            name: "July",
            y: 0.9,
          },
          {
            name: "Aug",
            y: 1.3,
          },
          {
            name: "Sept",
            y: 1.5,
          },
          {
            name: "Oct",
            y: 1.4,
          },
          {
            name: "Nov",
            y: 0.9,
          },
          {
            name: "Dec",
            y: 0.7,
          },
          {
            name: "YTD",
            color: "#99cc33",
            y: 1.1,
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
