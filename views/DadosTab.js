import {
  Typography,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";

const DadosTab = ({ statesFill }) => {
  const sombreamentoCard = {
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.16)",
    WebkitBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.16)",
    MozBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.16)",
  };

  return (
    <Box sx={{ marginTop: "30px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
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
                      Candidato A: {statesFill[state].candidato_a.porcentagem}%
                      ({statesFill[state].candidato_a.votos.length} votos)
                    </Typography>
                    <Typography variant="h6">
                      Candidato B: {statesFill[state].candidato_b.porcentagem}%
                      ({statesFill[state].candidato_b.votos.length} votos)
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
                      Candidato A: {statesFill[state].candidato_a.porcentagem}%
                      ({statesFill[state].candidato_a.votos.length} votos)
                    </Typography>
                    <Typography variant="h6">
                      Candidato B: {statesFill[state].candidato_b.porcentagem}%
                      ({statesFill[state].candidato_b.votos.length} votos)
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
                      Candidato A: {statesFill[state].candidato_a.porcentagem}%
                      ({statesFill[state].candidato_a.votos.length} votos)
                    </Typography>
                    <Typography variant="h6">
                      Candidato B: {statesFill[state].candidato_b.porcentagem}%
                      ({statesFill[state].candidato_b.votos.length} votos)
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
                      Candidato A: {statesFill[state].candidato_a.porcentagem}%
                      ({statesFill[state].candidato_a.votos.length} votos)
                    </Typography>
                    <Typography variant="h6">
                      Candidato B: {statesFill[state].candidato_b.porcentagem}%
                      ({statesFill[state].candidato_b.votos.length} votos)
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
                      Candidato A: {statesFill[state].candidato_a.porcentagem}%
                      ({statesFill[state].candidato_a.votos.length} votos)
                    </Typography>
                    <Typography variant="h6">
                      Candidato B: {statesFill[state].candidato_b.porcentagem}%
                      ({statesFill[state].candidato_b.votos.length} votos)
                    </Typography>
                  </Box>
                );
              }
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DadosTab;
