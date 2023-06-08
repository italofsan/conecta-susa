import { Grid, Typography } from "@mui/material";

import { useStyles } from "./styles";

import workingImage from "../../assets/images/programming-image.png";

export const News = () => {
  const { classes } = useStyles();

  return (
    <Grid item lg={12} className={classes.container}>
      <div className={classes.content}>
        <div className={classes.imageContainer}>
          <img
            src={workingImage}
            alt="working-people"
            className={classes.image}
          />
        </div>
        <Typography className={classes.contentText}>
          Estamos trabalhando para
        </Typography>
        <Typography className={classes.contentText}>
          trazer novidades em breve!
        </Typography>
      </div>
    </Grid>
  );
};
