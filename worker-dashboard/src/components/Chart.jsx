import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"

const Chart = ({ work }) => {
  //  creating an array for chart ;
  let overTimeData = [];
  let totalTimeData = []
  let dates = [];

  for (let i = 0; i < work.length; i++) {
    let day = work[i]
    let startTime = new Date(`2023-08-08T${day.start_time}Z`);
    let endTime = new Date(`2023-08-08T${day.end_time}Z`);
    let oneDayWork = 12 - (endTime - startTime) / (1000 * 60 * 60);

    //  pushing data into chart data 
    (oneDayWork > 8) ? overTimeData.push(+(oneDayWork - 8).toFixed(1)) : overTimeData.push(0);
    totalTimeData.push(+oneDayWork.toFixed(1));
    dates.push(work[i].work_date.slice(0, 10));
  }

  //  chart data
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Total Hours',
        data: totalTimeData,
        backgroundColor: '#EA80FC',
        borderColor: '#B39DDB',
        borderWidth: 1,
      },
      {
        label: 'Overtime',
        data: overTimeData,
        backgroundColor: '#B39DDB',
        borderColor: 'EA80F',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10, // Adjust the number of visible ticks as needed
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Hours',
        },
      },
    },
  };

  ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
  )



  return (
    <div>
      <Bar data={data}
        type="bar"
        width={130}
        height={50}
        options={{
          title: {
            display: true,
            text: "Total Hours",
            fontSize: 15
          },
          legend: {
            display: true, //Is the legend shown?
            position: "top" //Position of the legend.
          }
        }}





      />

    </div>
  )
}

export default Chart;
