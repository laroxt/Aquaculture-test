// Create the chart
Highcharts.chart("speciesSales_overview", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 10,
    spacingRight: 15,
    type: "bar",
  },
  title: {
    text: '<span style="font-weight: bold">Species Sales(RM)</span>',
    align: "left",
  },
  subtitle: {
    text: "All Species",
    align: "left",
  },

  xAxis: {
    categories: ["2014", "2016", "2017", "2018"],
  },

  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },

    column: {
      dataLabels: {
        enabled: true,
      },
    },
  },

  series: [
    {
      name: "Red Snapper",
      data: [5123, 6123, 3456, 6123],
    },
    {
      name: "Golden Snapper",
      data: [5123, 6342, 5125, 2723],
    },
    {
      name: "Pomfret",
      data: [2161, 8123, 7326, 4215],
    },
    {
      name: "Seabass",
      data: [8134, 1723, 6234, 8124],
    },
    {
      name: "Seabass",
      data: [3723, 3812, 1267, 7124],
    },
    {
      name: "Seabass",
      data: [7236, 1383, 8456, 1265],
    },
  ],
});
