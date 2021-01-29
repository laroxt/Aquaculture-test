/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Basic pie example
 *
 *  Demo JS code for basic pie chart [light theme]
 *
 * ---------------------------------------------------------------------------- */

// Setup module
// ------------------------------

var EchartsPieBasicLight = (function () {
  //
  // Setup module components
  //

  // Basic pie chart
  var salesMixFarmMonthlyExample = function () {
    if (typeof echarts == "undefined") {
      console.warn("Warning - echarts.min.js is not loaded.");
      return;
    }

    // Define element
    var sales_mix_farm_monthly_element = document.getElementById("sales_mix_farm_monthly");

    //
    // Charts configuration
    //

    if (sales_mix_farm_monthly_element) {
      // Initialize chart
      var sales_mix_farm_monthly = echarts.init(sales_mix_farm_monthly_element);

      //
      // Chart config
      //

      // Options
      sales_mix_farm_monthly.setOption({
        // Colors
        color: [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
          "#e5cf0d",
          "#97b552",
          "#95706d",
          "#dc69aa",
          "#07a2a4",
          "#9a7fd1",
          "#588dd5",
          "#f5994e",
          "#c05050",
          "#59678c",
          "#c9ab00",
          "#7eb00a",
          "#6f5553",
          "#c14089",
        ],

        // Global text styles
        textStyle: {
          fontFamily: "Roboto, Arial, Verdana, sans-serif",
          fontSize: 13,
        },

        // Add tooltip
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0.75)",
          padding: [10, 15],
          textStyle: {
            fontSize: 13,
            fontFamily: "Roboto, sans-serif",
          },
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },

        // Add legend
        legend: {
          orient: "horizontal",
          top: "bottom",

          data: ["BA1", "BA2", "BA3", "BA4", "BA5"],
          itemHeight: 8,
          itemWidth: 8,
        },

        // Add series
        series: [
          {
            name: "Browsers",
            type: "pie",
            radius: "80%",
            center: ["50%", "45.5%"],
            itemStyle: {
              normal: {
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#fff",
              },
            },
            data: [
              { value: 335, name: "BA1" },
              { value: 310, name: "BA2" },
              { value: 234, name: "BA3" },
              { value: 135, name: "BA4" },
              { value: 1548, name: "BA5" },
            ],
          },
        ],
      });
    }

    //
    // Resize charts
    //

    // Resize function
    var triggerChartResize = function () {
      sales_mix_farm_monthly_element && sales_mix_farm_monthly.resize();
    };

    // On sidebar width change
    var sidebarToggle = document.querySelector(".sidebar-control");
    sidebarToggle && sidebarToggle.addEventListener("click", triggerChartResize);

    // On window resize
    var resizeCharts;
    window.addEventListener("resize", function () {
      clearTimeout(resizeCharts);
      resizeCharts = setTimeout(function () {
        triggerChartResize();
      }, 200);
    });
  };

  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      salesMixFarmMonthlyExample();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  EchartsPieBasicLight.init();
});
