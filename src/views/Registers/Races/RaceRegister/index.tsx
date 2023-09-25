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
import { InputMask } from "../../../../components/InputMask";
import { mockedListRaces } from "../../../../database/races";
import { inCreationOrEditing } from "../../../../utils";
import { Race } from "../../../../types";

import { useStyles } from "./styles";
import { Container } from "../../../../components/Screen/Container";

export const RaceRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { id } = useParams();

  const [raceData, setRaceData] = useState<Race>({
    id: 0,
    name: "",
    species: "",
    status: "Ativo",
  });

  const returnedTitlePage = (location: Location) => {
    if (location.pathname.includes("new")) {
      return "Cadastrar Raça";
    } else if (location.pathname.includes("edit")) {
      return "Editar Raça";
    } else {
      return "Raça";
    }
  };

  const addRace = async (raceData: Race) => {
    try {
      setTimeout(() => {
        navigate("/registers/races");
        successMessage("Raça adicionada com sucesso!");
      }, 1500);
    } catch (error) {
      errorMessage("Não foi possível adicionar raça");
    }
  };

  const updateRace = async (raceData: Race) => {
    try {
      setTimeout(() => {
        navigate("/registers/races");
        successMessage("Raça atualizada com sucesso!");
      }, 1500);
    } catch (error) {
      errorMessage("Não foi possível atualizar raça");
    }
  };

  useEffect(() => {
    if (id) {
      let listRacesCopy = [...mockedListRaces];
      listRacesCopy = listRacesCopy.filter((race) => race.id === Number(id));
      setRaceData({
        id: listRacesCopy[0].id,
        name: listRacesCopy[0].name,
        species: listRacesCopy[0].species,
        status: listRacesCopy[0].status,
      });
    }
  }, [id]);

  return (
    <Formik
      enableReinitialize
      initialValues={raceData}
      onSubmit={(values) => {
        if (location.pathname.includes("new")) {
          addRace(values);
        } else {
          updateRace(values);
        }
      }}
    >
      {({ handleChange, values }) => (
        <FormikForm>
          <Container>
            <Grid item xs={12} lg={12}>
              <Typography
                style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}
              >
                Raças
              </Typography>
            </Grid>

            <Grid item xs={12} lg={12}>
              <Paper className={classes.paper}>
                <div className={classes.actionBar}>
                  <div className={classes.actionBarLeftContent}>
                    <IconButton
                      onClick={() => navigate("/registers/races")}
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
                      onClick={() => navigate(`/registers/races/${id}/edit`)}
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
                  <Grid item xs={12} lg={3}>
                    <InputLabel className={classes.inputLabel}>
                      Espécie*
                    </InputLabel>
                    <TextField
                      name="species"
                      value={values.species}
                      onChange={handleChange}
                      placeholder="Espécie*"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                      InputProps={{
                        inputComponent: InputMask as any,
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Container>
        </FormikForm>
      )}
    </Formik>
  );
};
