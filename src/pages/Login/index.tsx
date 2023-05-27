import { Grid } from "@mui/material";
import backgroundImage from "../../assets/images/background-image.png";

export const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container>Login</Grid>
    </div>
  );
};
