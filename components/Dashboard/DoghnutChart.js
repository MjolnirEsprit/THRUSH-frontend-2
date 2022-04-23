import * as React from "react";
import { Line, Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Organic", "Social Media", "Websites"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};
export default function DoghnutChart() {
  return <Doughnut data={data} width={400} height={400} />;
}
