import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  Location,
} from "react-router-dom";
import {
  Button,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardArrowLeft as KeyboardArrowLeftIcon } from "@mui/icons-material";
import { Formik, Form as FormikForm } from "formik";

import { errorMessage, successMessage } from "../../../../components/Messages";
import { mockedListSpecies } from "../../../../database/species";
import { inCreationOrEditing } from "../../../../utils";
import { Species } from "../../../../types";

import { useStyles } from "./styles";

export const SpeciesRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { id } = useParams();

  const [speciesData, setSpeciesData] = useState<Species>({
    id: 0,
    name: "",
    status: "Ativo",
  });

  const returnedTitlePage = (location: Location) => {
    if (location.pathname.includes("new")) {
      return "Cadastrar Espécie";
    } else if (location.pathname.includes("edit")) {
      return "Editar Espécie";
    } else {
      return "Espécie";
    }
  };

  const addSpecies = async (speciesData: Species) => {
    try {
      setTimeout(() => {
        navigate("/registers/species");
        successMessage("Espécie adicionada com sucesso!");
      }, 1500);
    } catch (error) {
      errorMessage("Não foi possível adicionar espécie");
    }
  };

  const updateSpecies = async (speciesData: Species) => {
    try {
      setTimeout(() => {
        navigate("/registers/species");
        successMessage("Espécie atualizada com sucesso!");
      }, 1500);
    } catch (error) {
      errorMessage("Não foi possível atualizar espécie");
    }
  };

  useEffect(() => {
    if (id) {
      let listSpeciesCopy = [...mockedListSpecies];
      listSpeciesCopy = listSpeciesCopy.filter(
        (species) => species.id === Number(id)
      );
      setSpeciesData({
        id: listSpeciesCopy[0].id,
        name: listSpeciesCopy[0].name,
        status: listSpeciesCopy[0].status,
      });
    }
  }, [id]);

  return (
    <Formik
      enableReinitialize
      initialValues={speciesData}
      onSubmit={(values) => {
        if (location.pathname.includes("new")) {
          addSpecies(values);
        } else {
          updateSpecies(values);
        }
      }}
    >
      {({ handleChange, values }) => (
        <FormikForm>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={12}>
              <Typography
                style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}
              >
                Espécies
              </Typography>
            </Grid>

            <Grid item xs={12} lg={12}>
              <Paper className={classes.paper}>
                <div className={classes.actionBar}>
                  <div className={classes.actionBarLeftContent}>
                    <IconButton
                      onClick={() => navigate("/registers/species")}
                      className={classes.buttonBack}
                    >
                      <KeyboardArrowLeftIcon fontSize="medium" />
                    </IconButton>
                    <Typography className={classes.pageSubtitle}>
                      {returnedTitlePage(location)}
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: inCreationOrEditing(location) ? "flex" : "none",
                    }}
                  >
                    <Button type="submit" className={classes.buttonSave}>
                      Salvar
                    </Button>
                  </div>
                  <div
                    style={{
                      display: inCreationOrEditing(location) ? "none" : "flex",
                    }}
                  >
                    <Button
                      className={classes.buttonSave}
                      onClick={() => navigate(`/registers/species/${id}/edit`)}
                    >
                      Editar
                    </Button>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={12}>
              <Paper className={classes.paper}>
                <Grid container spacing={1} className={classes.formContainer}>
                  <Grid item xs={12} lg={12}>
                    <Typography className={classes.formSectionTitle}>
                      Dados
                    </Typography>
                  </Grid>

                  {values.id ? (
                    <Grid item xs={12} lg={3}>
                      <InputLabel className={classes.inputLabel}>ID</InputLabel>
                      <TextField
                        name="id"
                        value={values.id}
                        variant="outlined"
                        size="small"
                        fullWidth
                        disabled
                      />
                    </Grid>
                  ) : null}
                  <Grid item xs={12} lg={3}>
                    <InputLabel className={classes.inputLabel}>
                      Nome*
                    </InputLabel>
                    <TextField
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Nome*"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </FormikForm>
      )}
    </Formik>
  );
};

const listStatus = ["Ativo", "Inativo"];
