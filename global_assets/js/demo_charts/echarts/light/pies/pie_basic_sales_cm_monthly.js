/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Basic pie example
 *
 *  Demo JS code for basic pie chart [light theme]
 *
 * ---------------------------------------------------------------------------- */

// Setup module
// ------------------------------

var salesSpeciesCmMonth = (function () {
  //
  // Setup module components
  //

  // Basic pie chart
  var salesSpeciesCmMonthExample = function () {
    if (typeof echarts == "undefined") {
      console.warn("Warning - echarts.min.js is not loaded.");
      return;
    }

    // Define element
    var species_sales_cm_month_element = document.getElementById("species_sales_cm_month");

    //
    // Charts configuration
    //

    if (species_sales_cm_month_element) {
      // Initialize chart
      var species_sales_cm_month = echarts.init(species_sales_cm_month_element);

      //
      // Chart config
      //

      // Options
      species_sales_cm_month.setOption({
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

        // Add title
        title: {
          text: "Monthly Red Snapper CM",
          left: "center",
          textStyle: {
            fontSize: 17,
            fontWeight: 500,
          },
          subtextStyle: {
            fontSize: 12,
          },
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

          data: ["Species1", "Species2", "Species3", "Species4", "Species5", "Species6"],
          itemHeight: 8,
          itemWidth: 8,
        },

        // Add series
        series: [
          {
            name: "Species",
            type: "pie",
            radius: "80%",
            center: ["50%", "50%"],
            itemStyle: {
              normal: {
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#fff",
              },
            },
            data: [
              { value: 335, name: "Species1" },
              { value: 310, name: "Species2" },
              { value: 234, name: "Species3" },
              { value: 135, name: "Species4" },
              { value: 1548, name: "Species5" },
              { value: 235, name: "Species6" },
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
      species_sales_cm_month_element && species_sales_cm_month.resize();
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
      salesSpeciesCmMonthExample();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  salesSpeciesCmMonth.init();
});
