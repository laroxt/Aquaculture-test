// Create the chart
Highcharts.chart("farm_sales_monthly", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 10,
    spacingRight: 15,
    type: "column",
  },
  title: {
    text: '<span style="font-weight: bold">Farm Sales(RM)</span>',
    align: "left",
  },
  subtitle: {
    text: "BA 1, Pulau Ketam",
    align: "left",
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },
  xAxis: {
    type: "category",
    crosshair: true,
  },

  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
    series: {
      pointWidth: 25,
    },
    column: {
      dataLabels: {
        enabled: true,
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
      name: "Farm BA",
      data: [
        {
          name: "2014",
          y: 43934,
          drilldown: "Farm BA in 2014",
        },
        {
          name: "2015",
          y: 52503,
        },
        {
          name: "2016",
          y: 29742,
        },
        {
          name: "2017",
          y: 32490,
        },
        {
          name: "2018",
          y: 38121,
        },
        {
          name: "2019",
          y: 51234,
        },
        {
          name: "2020",
          y: 68134,
        },
        {
          name: "2021",
          y: 12512,
        },
      ],
    },
  ],
  drilldown: {
    series: [
      {
        name: "Farm BA in 2014",
        id: "Farm BA in 2014",
        color: "yellow",
        data: [
          ["Jan", 43934],
          ["Feb", 29742],
          ["Mar", 53023],
          ["Apr", 52503],
          ["May", 38121],
          ["June", 68134],
          ["Aug", 38121],
          ["Sep", 68134],
          ["Oct", 51234],
          ["Nov", 38121],
          ["Dec", 12512],
        ],
      },
    ],
  },
});
