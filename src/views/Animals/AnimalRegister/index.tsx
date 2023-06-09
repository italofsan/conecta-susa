import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  Location,
} from "react-router-dom";
import {
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardArrowLeft as KeyboardArrowLeftIcon } from "@mui/icons-material";
import { Formik, Form as FormikForm } from "formik";

import { errorMessage, successMessage } from "../../../components/Messages";
import { InputMask } from "../../../components/InputMask";

import { useStyles } from "./styles";
import { inCreationOrEditing, onlyNumbers } from "../../../utils";
import { Animal } from "../../../types";
import { mockedListAnimal } from "../../../database";

type AnimalData = Omit<Animal, "createdAt">;

export const AnimalRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { id } = useParams();

  const [open, setOpen] = useState(false);

  const [animalData, setAnimalData] = useState<AnimalData>({
    id: 0,
    name: "",
    race: "SRD",
    species: "Cachorro",
    owner: "",
    sex: "M",
    coat: "",
    weight: "",
    dateOfBirth: "",
    size: "Pequeno",
    comments: "",
    allergies: "",
    castrated: "Sim",
  });

  const returnedTitlePage = (location: Location) => {
    if (location.pathname.includes("new")) {
      return "Cadastrar Animal";
    } else if (location.pathname.includes("edit")) {
      return "Editar Animal";
    } else {
      return "Animal";
    }
  };

  const addAnimal = async (animalData: AnimalData) => {
    setOpen(true);
    try {
      setTimeout(() => {
        navigate("/animals/list-animals");
        setOpen(false);
        successMessage("Animal adicionado com sucesso!");
      }, 1500);
    } catch (error) {
      setOpen(false);
      errorMessage("Não foi possível adicionar animal");
    }
  };

  const updateAnimal = async (animalData: AnimalData) => {
    setOpen(true);
    try {
      setTimeout(() => {
        navigate("/animals/list-animals");
        setOpen(false);
        successMessage("Animal atualizado com sucesso!");
      }, 1500);
    } catch (error) {
      setOpen(false);
      errorMessage("Não foi possível atualizar animal");
    }
  };

  useEffect(() => {
    if (id) {
      let listAnimalCopy = [...mockedListAnimal];
      listAnimalCopy = listAnimalCopy.filter(
        (client) => client.id === Number(id)
      );
      setAnimalData({
        id: listAnimalCopy[0].id,
        name: listAnimalCopy[0].name,
        race: listAnimalCopy[0].race,
        species: listAnimalCopy[0].species,
        owner: listAnimalCopy[0].owner,
        sex: listAnimalCopy[0].sex,
        coat: listAnimalCopy[0].coat,
        weight: listAnimalCopy[0].weight,
        dateOfBirth: listAnimalCopy[0].dateOfBirth,
        size: listAnimalCopy[0].size,
        comments: listAnimalCopy[0].comments,
        allergies: listAnimalCopy[0].allergies,
        castrated: listAnimalCopy[0].castrated,
      });
    }
  }, [id]);

  return (
    <Formik
      enableReinitialize
      initialValues={animalData}
      onSubmit={(values) => {
        if (location.pathname.includes("new")) {
          addAnimal(values);
        } else {
          updateAnimal(values);
        }
      }}
    >
      {({ handleChange, values }) => (
        <FormikForm>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          <Grid container spacing={2}>
            <Grid item lg={12}>
              <Typography
                style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}
              >
                Animais
              </Typography>
            </Grid>

            <Grid item lg={12}>
              <Paper className={classes.paper}>
                <div className={classes.actionBar}>
                  <div className={classes.actionBarLeftContent}>
                    <IconButton
                      onClick={() => navigate("/animals/list-animals")}
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
                      onClick={() => navigate(`/animals/${id}/edit`)}
                    >
                      Editar
                    </Button>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item lg={12}>
              <Paper className={classes.paper}>
                <Grid container spacing={1} className={classes.formContainer}>
                  <Grid item xs={12} lg={12}>
                    <Typography className={classes.formSectionTitle}>
                      Dados
                    </Typography>
                  </Grid>

                  {values.id ? (
                    <Grid item xs={3} lg={3}>
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
                      Data de nascimento
                    </InputLabel>
                    <TextField
                      name="dateOfBirth"
                      value={values.dateOfBirth}
                      onChange={handleChange}
                      placeholder="00/00/0000"
                      variant="outlined"
                      size="small"
                      fullWidth
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                      InputProps={{
                        inputComponent: InputMask as any,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <InputLabel className={classes.inputLabel}>
                      Proprietário
                    </InputLabel>
                    <TextField
                      name="owner"
                      value={values.owner}
                      onChange={handleChange}
                      placeholder="Proprietário"
                      variant="outlined"
                      size="small"
                      fullWidth
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12}>
                    <Typography className={classes.formSectionTitle}>
                      Características
                    </Typography>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <InputLabel className={classes.inputLabel}>
                      Espécie
                    </InputLabel>
                    <TextField
                      name="species"
                      value={values.species}
                      onChange={handleChange}
                      placeholder="Selecionar"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                    >
                      {listSpecies.map((specie) => (
                        <MenuItem key={specie} value={specie}>
                          {specie}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <InputLabel className={classes.inputLabel}>Raça</InputLabel>
                    <TextField
                      name="race"
                      value={values.race}
                      onChange={handleChange}
                      placeholder="Selecionar"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                    >
                      {listRace.map((race) => (
                        <MenuItem key={race} value={race}>
                          {race}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={6} lg={3}>
                    <InputLabel className={classes.inputLabel}>
                      Pelagem
                    </InputLabel>
                    <TextField
                      name="coat"
                      value={values.coat}
                      onChange={handleChange}
                      placeholder="Pelagem"
                      variant="outlined"
                      size="small"
                      fullWidth
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                    />
                  </Grid>

                  <Grid item xs={6} lg={3}>
                    <InputLabel className={classes.inputLabel}>Peso</InputLabel>
                    <TextField
                      name="weight"
                      value={onlyNumbers(values.weight)}
                      onChange={handleChange}
                      placeholder="Peso"
                      variant="outlined"
                      size="small"
                      fullWidth
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">kg</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={3} lg={3}>
                    <InputLabel className={classes.inputLabel}>Sexo</InputLabel>
                    <TextField
                      name="sex"
                      value={values.sex}
                      onChange={handleChange}
                      placeholder="Selecionar"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                    >
                      {listSex.map((sex) => (
                        <MenuItem key={sex} value={sex}>
                          {sex}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <InputLabel className={classes.inputLabel}>
                      Porte
                    </InputLabel>
                    <TextField
                      name="size"
                      value={values.size}
                      onChange={handleChange}
                      placeholder="Selecionar"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                    >
                      {listSize.map((sex) => (
                        <MenuItem key={sex} value={sex}>
                          {sex}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={3} lg={3}>
                    <InputLabel className={classes.inputLabel}>
                      Castrado?
                    </InputLabel>
                    <TextField
                      name="castrated"
                      value={values.castrated}
                      onChange={handleChange}
                      placeholder="Selecionar"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                    >
                      {listCastrated.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} lg={12}>
                    <Typography className={classes.formSectionTitle}>
                      Observações
                    </Typography>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <InputLabel className={classes.inputLabel}>
                      Alergias
                    </InputLabel>
                    <TextField
                      name="allergies"
                      value={values.allergies}
                      onChange={handleChange}
                      placeholder="Alergias"
                      variant="outlined"
                      size="small"
                      fullWidth
                      multiline
                      rows={4}
                      color="success"
                      disabled={!inCreationOrEditing(location)}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <InputLabel className={classes.inputLabel}>
                      Comentários
                    </InputLabel>
                    <TextField
                      name="comments"
                      value={values.comments}
                      onChange={handleChange}
                      placeholder="Comentários"
                      variant="outlined"
                      size="small"
                      fullWidth
                      multiline
                      rows={4}
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

const listSpecies = ["Cachorro", "Gato"];

const listSex = ["M", "F"];

const listCastrated = ["Sim", "Não"];

const listSize = ["Pequeno", "Médio", "Grande"];

const listRace = [
  "Vira-lata",
  "Bulldog Francês",
  "Labrador Retriever",
  "Poodle",
  "Bulldog Inglês",
  "SRD",
  "Siamês",
  "Persa",
  "Maine Coon",
];
