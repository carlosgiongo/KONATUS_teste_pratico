import {
  Typography,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
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

  const sombreamento = {
    boxShadow: "0px 9px 0px -1px rgba(0,0,0,0.06)",
    WebkitBoxShadow: "0px 9px 0px -1px rgba(0,0,0,0.06)",
    MozBoxShadow: "0px 9px 0px -1px rgba(0,0,0,0.06)",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(arquivosPesquisa);
  }, [arquivosPesquisa]);

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
        <BrazilMap />
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
                  onClick={() => console.log(arquivosPesquisa)}
                >
                  Enviar
                </Button>
              </Box>
            </Box>

            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab label="Dados" value="1" />
                  <Tab label="Dashboard" value="2" />
                  <Tab label="Video" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <DadosTab statesFill={statesFill} />
              </TabPanel>
              <TabPanel value="2">
                <Dashboard />
              </TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Index;
