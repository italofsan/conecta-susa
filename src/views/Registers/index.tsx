import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";

export const Registers = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const listOptions = [
    {
      option: "Cadastro de Estabelecimentos",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Adotantes",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Voluntários",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Doadores",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Fornecedores",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Eventos",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Campanhas",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Vacinas",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Raças",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Espécies",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Exames",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Marcas",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Patologias",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Receitas Médicas",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro Tipos de Atendimentos",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Produtos",
      onClick: () => alert("Funcionalidade em implementação"),
    },
    {
      option: "Cadastro de Agendamento",
      onClick: () => alert("Funcionalidade em implementação"),
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Typography style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}>
          Cadastros
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
