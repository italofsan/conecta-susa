import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ClientRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [locationState, setLocationState] = useState<any>();

  useEffect(() => {
    console.log(location.state);
    setLocationState(location.state);
  }, [location]);

  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Typography style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}>
          Clientes
        </Typography>
      </Grid>
    </Grid>
  );
};
