import { Grid } from "@mui/material";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};
