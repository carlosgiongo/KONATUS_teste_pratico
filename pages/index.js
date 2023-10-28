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

const Index = () => {
  const [arquivoCenso, setArquivoCenso] = useState(null);
  const [arquivosPesquisa, setArquivosPesquisa] = useState(null);
  const [statesFill, setStatesFill] = useState({ ...GetStates });

  const sombreamento = {
    boxShadow: "0px 9px 0px -1px rgba(0,0,0,0.06)",
    WebkitBoxShadow: "0px 9px 0px -1px rgba(0,0,0,0.06)",
    MozBoxShadow: "0px 9px 0px -1px rgba(0,0,0,0.06)",
  };

  const sombreamentoCard = {
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.16)",
    WebkitBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.16)",
    MozBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.16)",
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
            ...sombreamentoCard,
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
            <Box sx={{ marginTop: "30px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box>
                  <Typography variant="h5">
                    <b>SUL</b>
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "20px",
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {Object.keys(statesFill).map((state) => {
                      if (statesFill[state].regiao === "Sul") {
                        return (
                          <Box
                            sx={{
                              maxWidth: "320px",
                              padding: "10px",
                              borderRadius: "10px",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              ...sombreamentoCard,
                            }}
                          >
                            <Typography variant="h6">
                              {statesFill[state].nome}
                            </Typography>
                            <Typography variant="h6">
                              Candidato A:{" "}
                              {statesFill[state].candidato_a.porcentagem}% (
                              {statesFill[state].candidato_a.votos} votos)
                            </Typography>
                            <Typography variant="h6">
                              Candidato B:{" "}
                              {statesFill[state].candidato_b.porcentagem}% (
                              {statesFill[state].candidato_b.votos} votos)
                            </Typography>
                          </Box>
                        );
                      }
                    })}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h5">
                    <b>SUDESTE</b>
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "20px",
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {Object.keys(statesFill).map((state) => {
                      if (statesFill[state].regiao === "Sudeste") {
                        return (
                          <Box
                            sx={{
                              maxWidth: "320px",
                              padding: "10px",
                              borderRadius: "10px",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              ...sombreamentoCard,
                            }}
                          >
                            <Typography variant="h6">
                              {statesFill[state].nome}
                            </Typography>
                            <Typography variant="h6">
                              Candidato A:{" "}
                              {statesFill[state].candidato_a.porcentagem}% (
                              {statesFill[state].candidato_a.votos} votos)
                            </Typography>
                            <Typography variant="h6">
                              Candidato B:{" "}
                              {statesFill[state].candidato_b.porcentagem}% (
                              {statesFill[state].candidato_b.votos} votos)
                            </Typography>
                          </Box>
                        );
                      }
                    })}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h5">
                    <b>CENTRO-OESTE</b>
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "20px",
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {Object.keys(statesFill).map((state) => {
                      if (statesFill[state].regiao === "Centro-Oeste") {
                        return (
                          <Box
                            sx={{
                              maxWidth: "320px",
                              padding: "10px",
                              borderRadius: "10px",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              ...sombreamentoCard,
                            }}
                          >
                            <Typography variant="h6">
                              {statesFill[state].nome}
                            </Typography>
                            <Typography variant="h6">
                              Candidato A:{" "}
                              {statesFill[state].candidato_a.porcentagem}% (
                              {statesFill[state].candidato_a.votos} votos)
                            </Typography>
                            <Typography variant="h6">
                              Candidato B:{" "}
                              {statesFill[state].candidato_b.porcentagem}% (
                              {statesFill[state].candidato_b.votos} votos)
                            </Typography>
                          </Box>
                        );
                      }
                    })}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h5">
                    <b>Nordeste</b>
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "20px",
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {Object.keys(statesFill).map((state) => {
                      if (statesFill[state].regiao === "Nordeste") {
                        return (
                          <Box
                            sx={{
                              maxWidth: "320px",
                              padding: "10px",
                              borderRadius: "10px",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              ...sombreamentoCard,
                            }}
                          >
                            <Typography variant="h6">
                              {statesFill[state].nome}
                            </Typography>
                            <Typography variant="h6">
                              Candidato A:{" "}
                              {statesFill[state].candidato_a.porcentagem}% (
                              {statesFill[state].candidato_a.votos} votos)
                            </Typography>
                            <Typography variant="h6">
                              Candidato B:{" "}
                              {statesFill[state].candidato_b.porcentagem}% (
                              {statesFill[state].candidato_b.votos} votos)
                            </Typography>
                          </Box>
                        );
                      }
                    })}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h5">
                    <b>Norte</b>
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "20px",
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {Object.keys(statesFill).map((state) => {
                      if (statesFill[state].regiao === "Norte") {
                        return (
                          <Box
                            sx={{
                              maxWidth: "320px",
                              padding: "10px",
                              borderRadius: "10px",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              ...sombreamentoCard,
                            }}
                          >
                            <Typography variant="h6">
                              {statesFill[state].nome}
                            </Typography>
                            <Typography variant="h6">
                              Candidato A:{" "}
                              {statesFill[state].candidato_a.porcentagem}% (
                              {statesFill[state].candidato_a.votos} votos)
                            </Typography>
                            <Typography variant="h6">
                              Candidato B:{" "}
                              {statesFill[state].candidato_b.porcentagem}% (
                              {statesFill[state].candidato_b.votos} votos)
                            </Typography>
                          </Box>
                        );
                      }
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Index;
