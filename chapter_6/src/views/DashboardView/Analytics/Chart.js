import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ dataProp, labels }) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: theme.palette.secondary.main,
        data: dataProp,
        barThickness: 12,
        maxBarThickness: 9,
        categoryPercentage: 1,
      },
    ],
    labels,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: true,
    cornerRadius: 20,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    layout: {
      padding: 0,
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ position: "relative" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

Chart.propTypes = {
  dataProp: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
};

export default Chart;
