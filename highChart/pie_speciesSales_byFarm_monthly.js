// Create the chart
Highcharts.chart("speciesSales_monthly", {
  chart: {
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 10,
    spacingRight: 15,
    type: "column",
  },
  title: {
    text: '<span style="font-weight: bold">Species Sales(RM)</span>',
    align: "left",
  },
  subtitle: {
    text: "Red Snapper",
    align: "left",
  },

  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    crosshair: true,
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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

  series: [
    {
      name: "Fish",
      data: [
        39325,
        83438,
        131000,
        221594,
        334141,
        39325,
        83438,
        39325,
        83438,
        131000,
        221594,
        334141,
      ],
    },
  ],
});
