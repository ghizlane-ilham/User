import "./Statistique.css";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Votre statistiques sur cette semaine',
    },
  },
};

const labels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi' , 'Vendredi' , 'Samedi' , 'Dimanche'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Time in min',
      data: ["" , "" , "" , "" , "" , "" , "30"] ,
      borderColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

function Statistique() {
  return (
    <>
    <div className='container' >
        <div className='card' >
            <Line options={options} data={data} />;
        </div>
    </div>
    </>

  )
  
}

export default Statistique;
