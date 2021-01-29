/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Basic bars example
 *
 *  Demo JS code for basic bar chart [light theme]
 *
 * ---------------------------------------------------------------------------- */

// Setup module
// ------------------------------

var EchartsBarsBasicLight = (function () {
    //
    // Setup module components
    //
  
    // Basic bar chart
    var _barsBasicLightExample = function () {
      if (typeof echarts == "undefined") {
        console.warn("Warning - echarts.min.js is not loaded.");
        return;
      }
  
      // Define element
      var Farm_Sales_Montly_element = document.getElementById("Farm_Sales_Montly");
  
      //
      // Charts configuration
      //
  
      if (Farm_Sales_Montly_element) {
        // Initialize chart
        var Farm_Sales_Montly = echarts.init(Farm_Sales_Montly_element);
  
        //
        // Chart config
        //
  
        // Options
        Farm_Sales_Montly.setOption({
          // Global text styles
          textStyle: {
            fontFamily: "Roboto, Arial, Verdana, sans-serif",
            fontSize: 13,
          },
  
          // Chart animation duration
          animationDuration: 750,
  
          // Setup grid
          grid: {
            left: 0,
            right: 30,
            top: 35,
            bottom: 0,
            top: 60,
            containLabel: true,
          },
          title: {
            text: "Farm Sales Profit(RM)",
            fontSize: 10,
            subtext: "Farm BA",
          },
  
          // Add tooltip
          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(0,0,0,0.75)",
            padding: [10, 15],
            textStyle: {
              fontSize: 13,
              fontFamily: "Roboto, sans-serif",
            },
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: "rgba(0,0,0,0.075)",
              },
            },
          },
  
          // Horizontal axis
          yAxis: [
            {
              type: "value",
              boundaryGap: [0, 0.01],
              axisLabel: {
                color: "#333",
              },
              axisLine: {
                lineStyle: {
                  color: "#999",
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#eee",
                  type: "dashed",
                },
              },
            },
          ],
  
          // Vertical axis
          xAxis: [
            {
              type: "category",
              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec",
              ],
              axisLabel: {
                color: "#333",
              },
              axisLine: {
                lineStyle: {
                  color: "#999",
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ["#eee"],
                },
              },
              splitArea: {
                show: true,
                areaStyle: {
                  color: ["rgba(250,250,250,0.1)", "rgba(0,0,0,0.015)"],
                },
              },
            },
          ],
  
          // Add series
          series: [
            {
              name: "Year 2021",
              type: "bar",
              itemStyle: {
                normal: {
                  color: "#4CB5F5",
                },
              },
              data: [
                39325,
                83438,
                131000,
                221594,
                334141,
                39325,
                83438,
                131000,
                221594,
                334141,
                221594,
                334141,
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
        Farm_Sales_Montly_element && Farm_Sales_Montly.resize();
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
        _barsBasicLightExample();
      },
    };
  })();
  
  // Initialize module
  // ------------------------------
  
  document.addEventListener("DOMContentLoaded", function () {
    EchartsBarsBasicLight.init();
  });
  