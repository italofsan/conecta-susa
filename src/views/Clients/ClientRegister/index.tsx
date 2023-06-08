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
import { Client } from "../../../types";
import { mockedListClient } from "../../../database";

type ClientData = Omit<Client, "createdAt">;

export const ClientRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { id } = useParams();
  // const [locationState, setLocationState] = useState<any>();

  const [clientData, setClientData] = useState<ClientData>({
    id: 0,
    name: "",
    cpf: "",
    phone: "",
  });

  const returnedTitlePage = (location: Location) => {
    if (location.pathname.includes("new")) {
      return "Cadastrar Cliente";
    } else if (location.pathname.includes("edit")) {
      return "Editar Cliente";
    } else {
      return "Cliente";
    }
  };

  const addClient = async (clientData: ClientData) => {
    try {
      // await api.post("users", {
      //   nome: clientData.name,
      //   cpf: onlyNumbers(clientData.cpf),
      //   documento: clientData.document,
      //   email: clientData.email,
      //   telefone: onlyNumbers(clientData.phone),
      //   status: clientData.status === "Ativo",
      // });
      navigate("/clients");
      successMessage("Cliente adicionado com sucesso!");
    } catch (error) {
      errorMessage("Não foi possível adicionar cliente");
    }
  };

  const updateClient = async (clientData: ClientData) => {
    try {
      // await api.patch(`users/${id}`, {
      //   nome: clientData.name,
      //   cpf: clientData.cpf,
      //   documento: clientData.document,
      //   email: clientData.email,
      //   telefone: clientData.phone,
      //   status: clientData.status === "Ativo",
      // });
      navigate("/clients");
      successMessage("Cliente atualizado com sucesso!");
    } catch (error) {
      errorMessage("Não foi possível atualizar cliente");
    }
  };

  useEffect(() => {
    console.log(id);
    let listClientCopy = [...mockedListClient];
    listClientCopy = listClientCopy.filter(
      (client) => client.id === Number(id)
    );
    setClientData({
      id: listClientCopy[0].id,
      name: listClientCopy[0].name,
      cpf: listClientCopy[0].cpf,
      phone: listClientCopy[0].phone,
    });
  }, [id]);

  return (
    <Formik
      enableReinitialize
      initialValues={clientData}
      onSubmit={(values) => {
        if (location.pathname.includes("new")) {
          addClient(values);
        } else {
          updateClient(values);
        }
      }}
    >
      {({ handleChange, values }) => (
        <FormikForm>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <Typography
                style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}
              >
                Clientes
              </Typography>
            </Grid>

            <Grid item lg={12}>
              <Paper className={classes.paper}>
                <div className={classes.actionBar}>
                  <div className={classes.actionBarLeftContent}>
                    <IconButton
                      onClick={() => navigate("/clients")}
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
                      onClick={() => navigate(`/clients/${id}/edit`)}
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
                  <Grid item lg={12}>
                    <Typography className={classes.formSectionTitle}>
                      Dados
                    </Typography>
                  </Grid>

                  {values.id ? (
                    <Grid item lg={3}>
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
                  <Grid item lg={3}>
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
                      disabled={!inCreationOrEditing(location)}
                    />
                  </Grid>
                  <Grid item lg={3}>
                    <InputLabel className={classes.inputLabel}>CPF*</InputLabel>
                    <TextField
                      name="cpf"
                      value={values.cpf}
                      onChange={handleChange}
                      placeholder="CPF*"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      disabled={!inCreationOrEditing(location)}
                      InputProps={{
                        inputComponent: InputMask as any,
                      }}
                    />
                  </Grid>
                  {/* <Grid item lg={3}>
                    <InputLabel className={classes.inputLabel}>RG*</InputLabel>
                    <TextField
                      name="document"
                      value={values.document}
                      onChange={handleChange}
                      placeholder="RG*"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      disabled={!inCreationOrEditing(location)}
                    />
                  </Grid> */}

                  {/* <Grid item lg={3}>
                    <InputLabel className={classes.inputLabel}>
                      Status
                    </InputLabel>
                    <TextField
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      placeholder="Selecionar"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      disabled={!inCreationOrEditing(location)}
                    >
                      {listStatus.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid> */}

                  <Grid item lg={12}>
                    <Typography className={classes.formSectionTitle}>
                      Contato
                    </Typography>
                  </Grid>
                  {/* <Grid item lg={3}>
                    <InputLabel className={classes.inputLabel}>
                      E-mail
                    </InputLabel>
                    <TextField
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="E-mail"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      disabled={!inCreationOrEditing(location)}
                    />
                  </Grid> */}
                  <Grid item lg={3}>
                    <InputLabel className={classes.inputLabel}>
                      Telefone
                    </InputLabel>
                    <TextField
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      fullWidth
                      disabled={!inCreationOrEditing(location)}
                      InputProps={{
                        inputComponent: InputMask as any,
                      }}
                    />
                  </Grid>

                  {/* <Grid item lg={12}>
                      <Typography className={classes.formSectionTitle}>
                        Atualização de Senha
                      </Typography>
                    </Grid>
                    <Grid item lg={3}>
                      <InputLabel className={classes.inputLabel}>
                        Frequência de redefinição da senha
                      </InputLabel>
                      <TextField
                        name="passwordResetFrequency"
                        value={values.passwordResetFrequency}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        fullWidth
                        select
                        disabled={!inCreationOrEditing(location)}
                      >
                        <MenuItem value="Selecionar" disabled>
                          Selecionar
                        </MenuItem>
                        {selectList.listPasswordResetFrequency.map(
                          (frequency) => (
                            <MenuItem key={frequency.id} value={frequency.id}>
                              {frequency.value}
                            </MenuItem>
                          )
                        )}
                      </TextField>
                    </Grid> */}
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
