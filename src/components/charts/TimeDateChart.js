import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function Attrition2Chart() {
  const [state] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // Week names
        labels: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            // Format time as needed (example: converting minutes to HH:MM)
            const hours = Math.floor(value / 60);
            const minutes = value % 60;
            return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
          },
        },
      },
      grid: {
        borderColor: "#5D5FEF",
        strokeDashArray: 4,
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: "rgba(0, 157, 255, 0.3173)",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#009DFF",
              opacity: 0,
            },
          ],
        },
      },
      title: {
        text: "Time And Day",
        align: "left",
        style: {
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
        },
      },
    },
  });

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="area"
      height={350}
    />
  );
}

export default Attrition2Chart;
