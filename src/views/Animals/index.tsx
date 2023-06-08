import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";

export const Animals = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const listOptions = [
    {
      option: "Consulta de animais",
      onClick: () => navigate("/animals/list-animals"),
    },
    {
      option: "Histórico de atendimento",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Agendamento de consultas",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Controle de alimentação",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Controle de vacinação",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Gerenciamento de medicamentos",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Controle de adoção",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Controle de higiene e limpeza",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Relatórios",
      onClick: () => alert("Funcionalidade em implementação"),
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Typography style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}>
          Animais
        </Typography>
      </Grid>

      <Grid item lg={3}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {listOptions.map((option) => (
            <div
              key={option.option}
              className={classes.optionContainer}
              onClick={option.onClick}
            >
              <Typography style={{ fontWeight: "700" }}>
                {option.option}
              </Typography>
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};
