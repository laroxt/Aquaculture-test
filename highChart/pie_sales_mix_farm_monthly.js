// Create the chart
Highcharts.chart("sales_mix_farm", {
  title: {
    text: '<span style="font-weight: bold">Farm Sales Mix</span>',
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
      text: '<span style="font-weight: bold">Sales Mix Revenue(%)</span>',
    },
    // stackLabels: {
    //   enabled: true,
    //   formatter: function () {
    //     return this.total + "k";
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
          name: "BA1",
          y: 10.5,
          drilldown: "Red Snapper, Pulau Ketam, Jan, 2021",
        },
        {
          name: "BA2",
          y: 6.5,
        },
        {
          name: "BA3",
          y: 6,
        },
        {
          name: "BA4",
          y: 12,
        },
        {
          name: "BA5",
          y: 11,
        },
        {
          name: "BA6",
          y: 10,
        },
        {
          name: "BA7",
          y: 14,
        },
        {
          name: "BA8",
          y: 14,
        },
        {
          name: "BA9",
          y: 10,
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
        color: "#84d9e5",

        data: [
          {
            name: "Jan",
            y: 0.5,
          },
          {
            name: "Feb",
            y: 0.6,
          },
          {
            name: "Mar",
            y: 0.6,
          },
          {
            name: "Apr",
            y: 0.8,
          },
          {
            name: "May",
            y: 1,
          },
          {
            name: "Jun",
            y: 1,
          },
          {
            name: "July",
            y: 1.2,
          },
          {
            name: "Aug",
            y: 1.3,
          },
          {
            name: "Sept",
            y: 0.9,
          },
          {
            name: "Oct",
            y: 1.2,
          },
          {
            name: "Nov",
            y: 0.8,
          },
          {
            name: "Dec",
            y: 0.6,
          },
          {
            name: "YTD",
            color: "#99cc33",
            y: 1,
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
