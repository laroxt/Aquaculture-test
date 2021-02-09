// Create the chart
Highcharts.chart("sales_mix_species_monthly", {
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
    text: "BA1, Pulau Ketam, 2021",
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
      pointWidth: 45,
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
      name: "BA1, Pulau Ketam, 2021",
      color: "#ffc425",
      data: [
        {
          name: "Jan",
          y: 32141,
          drilldown: "All Species, Pulau Ketam, Jan, 2021",
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
          y: 53023,
          color: "#99cc33",
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
        name: "All Species, Pulau Ketam, Jan, 2021",
        id: "All Species, Pulau Ketam, Jan, 2021",
        color: "#84d9e5",
        type: "column",
        data: [
          {
            name: "Red Snapper",
            y: 29742,
            color: "#fa3c4c",
          },
          {
            name: "Golden Snapper",
            y: 32490,
            color: "#0084ff",
          },
          {
            name: "Pomfret",
            y: 52322,
            color: "#ffc300",
          },
          {
            name: "Seabass",
            y: 42123,
            color: "#363b74",
          },
          {
            name: "Hybrid Grouper",
            y: 29742,
            color: "#d696bb",
          },
          {
            name: "Giant Grouper",
            y: 43934,
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
