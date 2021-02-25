$(function () {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  });
});

$(function () {
  // Create the chart
  $("#sales_mix_farm").highcharts({
    chart: {
      type: "column",
      events: {
        drilldown: function (e) {
          if (!e.seriesOptions) {
            var chart = this,
              drilldowns = {
                Jan: {
                  name: "BA1",
                  data: [["Farm", 2]],
                  pointWidth: 150,
                },
                Jan2: {
                  name: "BA2",
                  color: "blue",
                  pointWidth: 150,
                  data: [["Farm", 2]],
                },
                Jan3: {
                  name: "BA3",
                  color: "red",
                  pointWidth: 150,
                  data: [["Farm", 2]],
                },
                Jan4: {
                  name: "BA4",
                  color: "yellow",
                  pointWidth: 150,
                  data: [["Farm", 2]],
                },
                Jan5: {
                  name: "BA5",
                  color: "green",
                  pointWidth: 150,
                  data: [["Farm", 2]],
                },
                Jan6: {
                  name: "BA6",
                  color: "blue",
                  pointWidth: 150,
                  data: [["Farm", 2]],
                },
                Jan7: {
                  name: "BA7",
                  color: "purple",
                  pointWidth: 150,
                  data: [["Farm", 2]],
                },
                Jan8: {
                  name: "BA8",
                  color: "purple",
                  pointWidth: 150,
                  data: [["Farm", 2]],
                },
                Jan9: {
                  name: "BA9",
                  color: "black",
                  pointWidth: 150,
                  data: [["Farm", 2]],
                },
              },
              series = [
                drilldowns[e.point.name],
                drilldowns[e.point.name + "2"],
                drilldowns[e.point.name + "3"],
                drilldowns[e.point.name + "4"],
                drilldowns[e.point.name + "5"],
                drilldowns[e.point.name + "6"],
                drilldowns[e.point.name + "7"],
                drilldowns[e.point.name + "8"],
                drilldowns[e.point.name + "9"],
              ];

            chart.addSingleSeriesAsDrilldown(e.point, series[0]);
            chart.addSingleSeriesAsDrilldown(e.point, series[1]);
            chart.addSingleSeriesAsDrilldown(e.point, series[2]);
            chart.addSingleSeriesAsDrilldown(e.point, series[3]);
            chart.addSingleSeriesAsDrilldown(e.point, series[4]);
            chart.addSingleSeriesAsDrilldown(e.point, series[5]);
            chart.addSingleSeriesAsDrilldown(e.point, series[6]);
            chart.addSingleSeriesAsDrilldown(e.point, series[7]);
            chart.addSingleSeriesAsDrilldown(e.point, series[8]);
            chart.applyDrilldown();
          }
        },
      },
    },
    title: {
      text: '<span style="font-weight: bold">Farm Contribution Margin</span>',
      align: "center",
    },

    subtitle: {
      text: "All Farm, 2021 ",
      align: "center",
      verticalAlign: "top",
    },

    xAxis: {
      type: "category",
      crosshair: true,
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

    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">●</span>{series.name}:<b> RM{point.y}({point.percentage:.0f}%)<br/></b>',
      shared: true,
    },

    plotOptions: {
      column: {
        stacking: "percent",
      },
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      series: {
        pointWidth: 50,
        dataLabels: {
          enabled: true,
          format: "RM{point.y}",
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
        data: [
          {
            name: "Jan",
            y: 5,
            drilldown: true,
          },
          {
            name: "Feb",
            y: 2,
          },
          {
            name: "Mar",
            y: 4,
          },
          {
            name: "Apr",
            y: 5,
          },
          {
            name: "May",
            y: 2,
          },
          {
            name: "June",
            y: 4,
          },
          {
            name: "July",
            y: 5,
          },
          {
            name: "Aug",
            y: 2,
          },
          {
            name: "Sept",
            y: 4,
          },
          {
            name: "Oct",
            y: 5,
          },
          {
            name: "Nov",
            y: 2,
          },
          {
            name: "Dec",
            y: 4,
          },
        ],
      },
      {
        name: "Kong Kong",
        data: [
          {
            name: "Jan",
            y: 5,
            drilldown: true,
          },
          {
            name: "Feb",
            y: 2,
          },
          {
            name: "Mar",
            y: 4,
          },
          {
            name: "Apr",
            y: 5,
          },
          {
            name: "May",
            y: 2,
          },
          {
            name: "June",
            y: 4,
          },
          {
            name: "July",
            y: 5,
          },
          {
            name: "Aug",
            y: 2,
          },
          {
            name: "Sept",
            y: 4,
          },
          {
            name: "Oct",
            y: 5,
          },
          {
            name: "Nov",
            y: 2,
          },
          {
            name: "Dec",
            y: 4,
          },
        ],
      },
    ],

    drilldown: {
      series: [],
    },

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 1090,
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
});
