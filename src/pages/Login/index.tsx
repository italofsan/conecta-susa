import { Button, Grid, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const fakeLogin = () => {
    localStorage.setItem("signed", JSON.stringify(true));
    navigate("/home");
  };

  return (
    <>
      <Toolbar />
      <Grid container>
        <Button onClick={fakeLogin}>Entrar</Button>
      </Grid>
    </>
  );
};
