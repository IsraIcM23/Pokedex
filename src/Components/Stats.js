import React, { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {  
  Bar,  
} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);

export function AppStats(props) {  

  const options = {
    plugins: {
      datalabels: {
        display: true,
      },
      title: {
        display: true,
        text: 'POKEMON STATS',
        color: 'Black',
        font: {
          size: 23
        }
      },
    },
    responsive: true,
    legend: {
      labels: {
         color: 'white'
      }
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "white",
        }
      },
      y: {
        stacked: true,
        ticks: {
          color: "white",
        }
      },
    },
  };

  const labels= props.data.map(c => c.label);

  const data = {
    labels,
    options,
    datasets: [
      {
        label: 'Stats',
        color: 'White',
        data: props.data.map(c => c.level),
        backgroundColor: 'green',
        datalabels: {
          color: 'white'
        },
      }
    ],
    tooltips: {
  
    },
  };

  return <Bar options={options} data={data} />

}  