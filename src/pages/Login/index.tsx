import { useContext, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { Formik, Form as FormikForm } from "formik";

import { errorMessage, successMessage } from "../../components/Messages";
import { AuthUserContext } from "../../contexts/AuthUserContext";
import { InputMask } from "../../components/InputMask";
import { onlyNumbers } from "../../utils";

import { useStyles } from "./styles";

interface LoginData {
  cpf: string;
  cnpj: string;
  password: string;
}

export const Login = () => {
  const { classes } = useStyles();
  const { setIsSigned } = useContext(AuthUserContext);

  const loginData: LoginData = {
    cpf: "",
    cnpj: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  const fakeLogin = (values: LoginData) => {
    if (onlyNumbers(values.cpf).length < 11) {
      return errorMessage("O CPF precisa ter 11 dígitos!");
    }
    if (onlyNumbers(values.cnpj).length < 14) {
      return errorMessage("O CNPJ precisa ter 14 dígitos!");
    }
    if (values.password.length < 6) {
      return errorMessage("A senha precisa ter pelo menos 6 caracteres");
    }
    localStorage.clear();
    localStorage.setItem("signed", JSON.stringify(true));
    setIsSigned(true);
    successMessage("Login realizado com sucesso!");
  };

  return (
    <Formik
      enableReinitialize
      initialValues={loginData}
      onSubmit={(values) => {
        fakeLogin(values);
      }}
    >
      {({ handleChange, values, handleSubmit }) => (
        <FormikForm>
          <Toolbar />
          <Grid container>
            <Grid item lg={12} className={classes.formContainer}>
              <Paper className={classes.paper}>
                <div className={classes.loginContentContainer}>
                  <div>
                    <Typography
                      style={{
                        textAlign: "center",
                        color: "#14532D",
                        fontWeight: 700,
                      }}
                    >
                      Olá, administrador!
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", color: "#14532D" }}
                    >
                      Realize o seu login e acompanhe todos os processos da
                      organização
                    </Typography>
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <InputLabel className={classes.inputLabel}>CPF</InputLabel>
                    <TextField
                      name="cpf"
                      value={values.cpf}
                      onChange={handleChange}
                      placeholder="Insira aqui seu CPF"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      InputProps={{
                        inputComponent: InputMask as any,
                      }}
                    />
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <InputLabel className={classes.inputLabel}>CNPJ</InputLabel>
                    <TextField
                      name="cnpj"
                      value={values.cnpj}
                      onChange={handleChange}
                      placeholder="Insira aqui seu CNPJ"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      InputProps={{
                        inputComponent: InputMask as any,
                      }}
                    />
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <InputLabel className={classes.inputLabel}>
                      Senha
                    </InputLabel>
                    <TextField
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      placeholder="Senha"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setShowPassword((prevState) => !prevState)
                              }
                              // onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                  <Button
                    className={classes.buttonLogin}
                    onClick={() => handleSubmit()}
                    style={{ marginTop: 12 }}
                    fullWidth
                  >
                    Entrar
                  </Button>

                  {/* <div className={classes.resetPasswdContainer}>
                    <Typography style={{ fontSize: 14 }}>
                      Esqueceu senha?
                    </Typography>
                    <Typography className={classes.resetPasswdText}>
                      Solicitar
                    </Typography>
                  </div> */}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </FormikForm>
      )}
    </Formik>
  );
};
