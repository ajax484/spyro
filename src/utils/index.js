export const barChartOptions = ({
  labels = [""],
  ytotal,
  xtotal,
  showLegend = true,
}) => {
  return {
    yaxis: {
      //   max: ytotal,
      tickAmount: 1,
      decimalsInFloat: 0,
    },
    xaxis: {
      decimalsInFloat: 0,
      type: "numeric",
      max: xtotal,
      tickAmount: xtotal - 1,
    },
    grid: {
      show: true,
      borderColor: "#90A4AE",
      position: "back",
      strokeDashArray: 10,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    plotOptions: {
      bar: {
        // horizontal: true,
        columnWidth: 10,
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    labels: labels,
    dataLabels: {
      enabled: false,
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      show: showLegend,
      fontSize: "12px",
      position: "left",
      width: 150,
      formatter: function (seriesName, opts) {
        return [seriesName, " ", opts.w.globals.series[opts.seriesIndex]];
      },
      labels: {
        useSeriesColors: false,
      },
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
    },
    tooltip: {
      enabled: false,
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },
  };
};
