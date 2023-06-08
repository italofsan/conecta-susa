import { Grid, Typography } from "@mui/material";

export const AnimalRegister = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Typography style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}>
          Animais
        </Typography>
      </Grid>
    </Grid>
  );
};
