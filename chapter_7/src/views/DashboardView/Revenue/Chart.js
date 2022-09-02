import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import { useTheme } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ dataProp, labels }) => {
  const theme = useTheme();

  const data = {
    labels,
    datasets: [
      {
        borderColor: theme.palette.secondary.main,
        pointBorderColor: theme.palette.background.default,
        data: dataProp,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: true,
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
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          padding: 20,
          color: theme.palette.text.secondary,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          borderDash: [2],
          color: theme.palette.text.secondary,
        },
        ticks: {
          padding: 20,
          color: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0,
          maxTicksLimit: 6,
          callback: (value) => (value > 0 ? `${value}K` : value),
        },
      },
    },
  };

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

Chart.propTypes = {
  dataProp: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
};

export default Chart;
