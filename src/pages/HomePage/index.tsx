import { Button, Grid } from "@mui/material";
import { useStyles } from "./styles";

import homepageImage from "../../assets/images/homepage-image.png";
import homepageTitleImage from "../../assets/images/homepage-title-image.png";

export const HomePage = () => {
  const { classes } = useStyles();

  return (
    <Grid container style={{ height: "100%" }}>
      <Grid item xs={12} lg={6} className={classes.homepageTitleContainer}>
        <div className={classes.homepageTitleImage}>
          <img
            src={homepageTitleImage}
            alt="homepage-title"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.homepageImageMobile}>
          <img src={homepageImage} alt="homepage" style={{ width: "100%" }} />
        </div>
      </Grid>
      <Grid item xs={12} lg={6} className={classes.homepageImageContainer}>
        <div className={classes.homepageImage}>
          <img src={homepageImage} alt="homepage" />
        </div>
      </Grid>
    </Grid>
  );
};
