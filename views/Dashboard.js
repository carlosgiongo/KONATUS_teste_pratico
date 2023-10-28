import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard = ({ statesFill }) => {
  const [labels, setLabels] = useState([]);
  const [candidatoA, setCandidatoA] = useState([]);
  const [candidatoB, setCandidatoB] = useState([]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Candidato A",
        data: candidatoA, 
        fill: false,
        backgroundColor: "#ff003633",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Candidato B", 
        data: candidatoB,
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Data",
        },
      },
      y: {
        title: {
          display: true,
          text: "Intenções de votos",
        },
      },
    },
  };

  useEffect(() => {
    if(!statesFill) return;

    const labels = [];
    const candidatoA = [];
    const candidatoB = [];
    
    Object.keys(statesFill).map((state) => {
      statesFill[state].candidato_a.votos.map((voto) => {
        if(!labels.includes(voto.data)) {
          labels.push(voto.data);
          candidatoA.push(1);
        } else {
          if(!candidatoA[labels.indexOf(voto.data)]) {
            candidatoA[labels.indexOf(voto.data)] = 1;
          } else {
            candidatoA[labels.indexOf(voto.data)] += 1;
          }
        }
      });

      statesFill[state].candidato_b.votos.map((voto) => {
        if(!labels.includes(voto.data)) {
          labels.push(voto.data);
          candidatoB.push(1);
        } else {
          if(!candidatoB[labels.indexOf(voto.data)]){
            candidatoB[labels.indexOf(voto.data)] = 1;
          } else {
            candidatoB[labels.indexOf(voto.data)] += 1;
          }
        }
      });
    });

    candidatoA.forEach((voto, index) => {
      if(index != 0){
        candidatoA[index] += candidatoA[index - 1];
      }
    });

    candidatoB.forEach((voto, index) => {
      if(index != 0){
        candidatoB[index] += candidatoB[index - 1];
      }
    });

    setLabels(labels);
    setCandidatoA(candidatoA);
    setCandidatoB(candidatoB);
  }, [statesFill]);

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography variant="body">
            <b>Candidato A:</b>
          </Typography>
          <Box
            sx={{ width: "25px", height: "22px", backgroundColor: "#ff003633" }}
          ></Box>
        </Box>

        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography variant="body">
            <b>Candidato B:</b>
          </Typography>
          <Box
            sx={{
              width: "25px",
              height: "22px",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
            }}
          ></Box>
        </Box>
      </Box>
      <Line data={data} options={options} />
    </Box>
  );
};

export default Dashboard;
