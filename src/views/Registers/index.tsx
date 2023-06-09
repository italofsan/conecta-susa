import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";

export const Registers = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const listOptions = [
    {
      option: "Cadastro de Estabelecimentos",
      onClick: () => navigate("/registers/establishments"),
    },
    {
      option: "Cadastro de Adotantes",
      onClick: () => navigate("/registers/adopters"),
    },
    {
      option: "Cadastro de Voluntários",
      onClick: () => navigate("/registers/volunteers"),
    },
    {
      option: "Cadastro de Doadores",
      onClick: () => navigate("/registers/donors"),
    },
    {
      option: "Cadastro de Fornecedores",
      onClick: () => navigate("/registers/suppliers"),
    },
    {
      option: "Cadastro de Eventos",
      onClick: () => navigate("/registers/events"),
    },
    {
      option: "Cadastro de Campanhas",
      onClick: () => navigate("/registers/campaigns"),
    },
    {
      option: "Cadastro de Vacinas",
      onClick: () => navigate("/registers/vaccines"),
    },
    {
      option: "Cadastro de Raças",
      onClick: () => navigate("/registers/races"),
    },
    {
      option: "Cadastro de Espécies",
      onClick: () => navigate("/registers/species"),
    },
    {
      option: "Cadastro de Exames",
      onClick: () => navigate("/registers/exams"),
    },
    {
      option: "Cadastro de Marcas",
      onClick: () => navigate("/registers/brands"),
    },
    {
      option: "Cadastro de Patologias",
      onClick: () => navigate("/registers/pathologies"),
    },
    {
      option: "Cadastro de Receitas Médicas",
      onClick: () => navigate("/registers/medical-prescriptions"),
    },
    {
      option: "Cadastro de Tipos de Atendimentos",
      onClick: () => navigate("/registers/service-types"),
    },
    {
      option: "Cadastro de Produtos",
      onClick: () => navigate("/registers/products"),
    },
    {
      option: "Cadastro de Agendamento",
      onClick: () => navigate("/registers/schedule"),
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={12}>
        <Typography style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}>
          Cadastros
        </Typography>
      </Grid>

      <Grid item xs={12} lg={3}>
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
