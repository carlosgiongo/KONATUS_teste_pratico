import {
  Typography,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import FileInput from "../components/FileInput";
import { useEffect, useState } from "react";
import BrazilMap from "../components/BrazilMap";
import GetStates from "../utils/GetStates";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DadosTab from "../views/DadosTab";
import Dashboard from "../views/Dashboard";

const Index = () => {
  const [arquivoCenso, setArquivoCenso] = useState(null);
  const [arquivosPesquisa, setArquivosPesquisa] = useState(null);
  const [statesFill, setStatesFill] = useState({ ...GetStates });
  const [value, setValue] = useState("1");
  const [isUpdated, setIsUpdated] = useState(-1);

  const sombreamento = {
    boxShadow: "0px 9px 0px -1px rgba(0,0,0,0.06)",
    WebkitBoxShadow: "0px 9px 0px -1px rgba(0,0,0,0.06)",
    MozBoxShadow: "0px 9px 0px -1px rgba(0,0,0,0.06)",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const reset = () => {
    setArquivoCenso(null);
    setArquivosPesquisa(null);

    const replica_states = { ...statesFill };
    Object.keys(replica_states).map((state) => {
      replica_states[state].candidato_a.votos = [];
      replica_states[state].candidato_b.votos = [];
      replica_states[state].candidato_a.porcentagem = 0;
      replica_states[state].candidato_b.porcentagem = 0;
      replica_states[state].fill = "#7c7c7c";
    });

    setStatesFill(replica_states);
  }

  const calcVotes = () => {
    if (arquivosPesquisa) {
      const reader = new FileReader();
      reader.readAsText(arquivosPesquisa);
      reader.onload = (event) => {
        const csv = event.target.result;
        const lines = csv.split("\n");
        const replica_states = { ...statesFill };

        for (let i = 1; i < lines.length; i++) {
          const currentLine = lines[i].split(";");
          if (currentLine.length > 1) {
            const obj = {
              grupo: currentLine[0],
              data: currentLine[1],
              uf: currentLine[3],
              intensao: currentLine[4],
            };

            if (currentLine[4] == 'A\r' || currentLine[4] == 'A') {
              replica_states[obj.uf].candidato_a.votos.push(obj);
            } else if(currentLine[4] == 'B\r' || currentLine[4] == 'B') {
              replica_states[obj.uf].candidato_b.votos.push(obj);
            }
          }
        }

        if(arquivoCenso){
          Object.keys(replica_states).map((state) => {
            let populacao_estado = replica_states[state].populacao;

            if(replica_states[state].candidato_a.votos.length > 0){
              let votos_estado = replica_states[state].candidato_a.votos.length;
              replica_states[state].candidato_a.porcentagem = (votos_estado * 100) / populacao_estado;
              replica_states[state].candidato_a.porcentagem = replica_states[state].candidato_a.porcentagem.toFixed(5);
            } 

            if(replica_states[state].candidato_b.votos.length > 0){
              let votos_estado = replica_states[state].candidato_b.votos.length;
              replica_states[state].candidato_b.porcentagem = (votos_estado * 100) /  populacao_estado;
              replica_states[state].candidato_b.porcentagem = replica_states[state].candidato_b.porcentagem.toFixed(5);
            }
          }); 
        }

        console.log(replica_states);
        setStatesFill(replica_states);
        setArquivosPesquisa(null);
        setIsUpdated(isUpdated + 1);
      };
    }
  }

  useEffect(() => {
    if(!arquivoCenso) return;

    try{    
      const reader = new FileReader();
      reader.readAsText(arquivoCenso);
      reader.onload = (event) => {
        const csv = event.target.result;
        const lines = csv.split("\n");
        const replica_states = { ...statesFill };

        for (let i = 1; i < lines.length; i++) {
          const currentLine = lines[i].split(",");

          if (currentLine.length > 1) {
            const obj = {
              uf: currentLine[3],
              populacao: currentLine[4],
            };

            Object.keys(replica_states).map((state) => {
              let string_state = obj.uf?.replace(/"/g, '').trim()

              if (string_state && replica_states[state].nome.includes(string_state)) {
                if(!replica_states[state].populacao) replica_states[state].populacao = 0;
                replica_states[state].populacao += parseInt(obj.populacao);
              }
            })
          }
        }

        setStatesFill(replica_states);
        // setArquivoCenso(null);
      };
    } catch(e) {
      alert("Erro ao ler arquivo de censo. Valide se é um arquivo CSV válido.");
      setArquivoCenso(null);
    }
  }, [arquivoCenso]);

  return (
    <>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            textAlign: "center",
            backgroundColor: "white",
            ...sombreamento,
          }}
        >
          <Grid item xs={8}>
            <img src="/konatus.png" />
          </Grid>
          <Grid item xs={3} sx={{ backgroundColor: "#e36f25" }}>
            <Box
              sx={{
                display: `flex`,
                gap: `10px`,
                justifyContent: "center",
                color: `white`,
              }}
            >
              <Typography variant="h3" sx={{ marginTop: "13px" }}>
                Teste prático:{" "}
              </Typography>
              <Typography variant="h3" sx={{ marginTop: "13px" }}>
                <b>Eleições</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Card
          sx={{
            width: `80%`,
            margin: `auto`,
            marginTop: `20px`,
            padding: `20px`,
            background: `white`,
            borderRadius: `10px`,
            ...sombreamento,
          }}
        >
          <CardContent>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{ textAlign: `center`, marginBottom: `20px` }}
              >
                Coloque abaixo, o arquivo da pesquisa de censo (população)
              </Typography>
              <FileInput file={arquivoCenso} setFile={setArquivoCenso} />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: "25px" }}>
        <BrazilMap states={statesFill} updated={isUpdated}/>
      </Box>
      <Box>
        <Card
          sx={{
            width: `80%`,
            margin: `auto`,
            marginTop: `20px`,
            padding: `20px`,
            background: `#eae5e1`,
            borderRadius: `10px`,
          }}
        >
          <CardContent>
            <Box sx={{ textAlign: "center" }}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Typography variant="body">
                  <b>Candidato A: {Object.keys(statesFill).reduce((acc, estado) => {
                    return acc + statesFill[estado].candidato_a.votos.length;
                  }, 0)} votos</b>
                </Typography>
                <Box
                  sx={{ width: "25px", height: "22px", backgroundColor: "#ff003633" }}
                ></Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "5px", marginTop:'15px' }}>
              <Typography variant="body">
                <b>Candidato B: {Object.keys(statesFill).reduce((acc, estado) => {
                    return acc + statesFill[estado].candidato_b.votos.length;
                  }, 0)} votos</b>
              </Typography>
              <Box
                sx={{
                  width: "25px",
                  height: "22px",
                  backgroundColor: "rgba(54, 162, 235, 0.2)",
                }}
              ></Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{ textAlign: `center`, marginBottom: `20px` }}
              >
                Coloque abaixo, o arquivo com os dados de votação
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FileInput
                  setFile={setArquivosPesquisa}
                  file={arquivosPesquisa}
                />
                <Button
                  variant="outlined"
                  onClick={() => calcVotes()}
                >
                  Calcular
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => reset()}
                >
                  Resetar
                </Button>
              </Box>
            </Box>

            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab label="Dados" value="1" />
                  <Tab label="Dashboard" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <DadosTab statesFill={statesFill} />
              </TabPanel>
              <TabPanel value="2">
                <Dashboard statesFill={statesFill} />
              </TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Index;
