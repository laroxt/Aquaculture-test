Highcharts.chart("sales_mix_farm_overview2", {
  title: {
    text: '<span style="font-weight: bold">Species Operation Forecast</span>',
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
    text: "All Species, 2021 ",
    align: "center",
    verticalAlign: "top",
  },

  yAxis: {
    title: {
      text: "Species Weight(KG)",
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
  },

  xAxis: {
    crosshair: true,
    type: "category",
    crosshair: {
      color: "rgba(68, 170, 213, .5)",
      width: 1,
    },
    plotLines: [
      {
        value: 9,
        color: "rgb(50,205,50,0.3)",
        width: 2,
        zIndex: 4,
        label: { text: "Ideal Date Sales" },
        dashStyle: "shortdash",
      },
    ],
    // plotBands: [
    //   {
    //     // visualize the weekend
    //     from: 9,
    //     to: 11,
    //     color: "	rgb(50,205,50,0.3)",
    //   },
    // ],
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
        value = this.y + " KG";
      } else {
        value = -this.y + " -KG";
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
      name: "Actual",
      color: "#ffc425",
      data: [
        {
          type: "flags",
          name: "Flags on axis",
          data: [
            {
              y: 1000,
              title: "On axis",
            },
            {
              y: 100,
              title: "On axis",
            },
          ],
          shape: "squarepin",
        },
        {
          name: "Jan",
          y: 41234,
          drilldown: "All Species, 2021",
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
      name: "Low",
      color: "#ff5e00",
      data: [
        {
          name: "Jan",
          y: 74353,
          drilldown: "All Species, 2021",
        },
        {
          name: "Feb",
          y: 39742,
        },
        {
          name: "Mar",
          y: 52123,
        },
        {
          name: "Apr",
          y: 33154,
        },
        {
          name: "May",
          y: 99323,
        },
        {
          name: "Jun",
          y: 64353,
        },
        {
          name: "July",
          y: 42141,
        },
        {
          name: "Aug",
          y: 74345,
        },
        {
          name: "Sept",
          y: 35123,
        },
        {
          name: "Oct",
          y: 41231,
        },
        {
          name: "Nov",
          y: 42512,
        },
        {
          name: "Dec",
          y: 62312,
        },
      ],
    },
    {
      name: "BaseLow",
      color: "#0084ff",
      data: [
        {
          name: "Jan",
          y: 23512,
          drilldown: "All Species, 2021",
        },
        {
          name: "Feb",
          y: 49742,
        },
        {
          name: "Mar",
          y: 52123,
        },
        {
          name: "Apr",
          y: 43154,
        },
        {
          name: "May",
          y: 89323,
        },
        {
          name: "Jun",
          y: 24353,
        },
        {
          name: "July",
          y: 82141,
        },
        {
          name: "Aug",
          y: 44345,
        },
        {
          name: "Sept",
          y: 25123,
        },
        {
          name: "Oct",
          y: 51231,
        },
        {
          name: "Nov",
          y: 82512,
        },
        {
          name: "Dec",
          y: 52312,
        },
      ],
    },
    {
      name: "Base",
      color: "#fa3c4c",
      data: [
        {
          name: "Jan",
          y: 53234,
          drilldown: "All Species, 2021",
        },
        {
          name: "Feb",
          y: 29742,
        },
        {
          name: "Mar",
          y: 82123,
        },
        {
          name: "Apr",
          y: 63154,
        },
        {
          name: "May",
          y: 49323,
        },
        {
          name: "Jun",
          y: 64353,
        },
        {
          name: "July",
          y: 22141,
        },
        {
          name: "Aug",
          y: 44345,
        },
        {
          name: "Sept",
          y: 55123,
        },
        {
          name: "Oct",
          y: 41231,
        },
        {
          name: "Nov",
          y: 72512,
        },
        {
          name: "Dec",
          y: 62312,
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
        name: "All Farm, 2021",
        id: "All Farm, 2021",
        color: "#3F51B5 ",
        data: [
          {
            name: "B1",
            y: 81235,
          },
          {
            name: "BA2",
            y: 41234,
          },
          {
            name: "BA3",
            y: 54512,
          },
          {
            name: "BA4",
            y: 85123,
          },
          {
            name: "BA5",
            y: 51235,
          },
          {
            name: "BA6",
            y: 42351,
          },
          {
            name: "BA7",
            y: 42351,
          },
          {
            name: "BA8",
            y: 42351,
          },
          {
            name: "BA9",
            y: 42351,
          },
        ],
      },
      {
        name: "All Species, 2021",
        id: "All Species, 2021",
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
