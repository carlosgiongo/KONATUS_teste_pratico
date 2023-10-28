import {
  Box, Typography
} from "@mui/material";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard = () => {
    const data = {
        labels: ['01-01', '02-01', '03-01', '04-01'], // Data (eixo X)
        datasets: [
          {
            label: 'Candidato A', // Nome do Candidato A
            data: [12, 19, 3, 5], // Dados do Candidato A
            fill: false,
            backgroundColor: '#ff003633',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Candidato B', // Nome do Candidato B
            data: [2, 3, 20, 10], // Dados do Candidato B
            fill: false,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      };

      const options = {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Data',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Intenções de votos (%)',
            },
          },
        },
      };
    
  return (
    <Box>
      <Box sx={{display:'flex', flexDirection:'column', gap:'25px'}}>
        <Box sx={{display:'flex', gap:'5px'}}>
            <Typography variant="body">
                <b>Candidato A:</b>
            </Typography>
            <Box sx={{width:'25px', height:'22px', backgroundColor:'#ff003633'}}></Box>
        </Box>
        
        <Box sx={{display:'flex', gap:'5px'}}>
            <Typography variant="body">
                <b>Candidato B:</b>
            </Typography>
            <Box sx={{width:'25px', height:'22px', backgroundColor:'rgba(54, 162, 235, 0.2)'}}></Box>
        </Box>
      </Box>
      <Line data={data} options={options} />
    </Box>
  );
};

export default Dashboard;
