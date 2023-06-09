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
      onClick: () => navigate("/animals/service-history"),
    },
    {
      option: "Agendamento de consultas",
      onClick: () => navigate("/animals/appointment-schedule"),
    },
    {
      option: "Controle de alimentação",
      onClick: () => navigate("/animals/feeding-control"),
    },
    {
      option: "Controle de vacinação",
      onClick: () => navigate("/animals/vaccination-control"),
    },
    {
      option: "Gerenciamento de medicamentos",
      onClick: () => navigate("/animals/medication-management"),
    },
    {
      option: "Controle de adoção",
      onClick: () => navigate("/animals/adoption-control"),
    },
    {
      option: "Controle de higiene e limpeza",
      onClick: () => navigate("/animals/hygiene-control"),
    },
    {
      option: "Relatórios",
      onClick: () => navigate("/animals/reports"),
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
