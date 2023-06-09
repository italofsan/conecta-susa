import { Button, Grid } from "@mui/material";
import { useStyles } from "./styles";

import homepageImage from "../../assets/images/homepage-image.png";
import homepageTitleImage from "../../assets/images/homepage-title-image.png";

export const HomePage = () => {
  const { classes } = useStyles();

  return (
    <Grid container style={{ height: "100%" }}>
      <Grid item lg={6} className={classes.homepageTitleContainer}>
        <div style={{ width: 500 }}>
          <img
            src={homepageTitleImage}
            alt="homepage-title"
            style={{ width: "100%" }}
          />
        </div>
        {/* <Button
          sx={{ color: "#black" }}
          onClick={() => alert("Funcionalidade em implementação")}
        >
          Cadastre-se
        </Button> */}
      </Grid>
      <Grid item lg={6} className={classes.homepageImageContainer}>
        <div style={{ width: 300 }}>
          <img src={homepageImage} alt="homepage" />
        </div>
      </Grid>
    </Grid>
  );
};
