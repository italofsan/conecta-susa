import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";

import homepageImage from "../../assets/images/homepage-image.png";
import homepageTitleImage from "../../assets/images/homepage-title-image.png";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Grid container style={{ height: "100%" }}>
      <Grid
        item
        lg={6}
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ width: 500 }}>
          <img
            src={homepageTitleImage}
            alt="homepage-title"
            style={{ width: "100%" }}
          />
        </div>
        <Button sx={{ color: "#black" }} onClick={() => navigate("/register")}>
          Cadastre-se
        </Button>
      </Grid>
      <Grid
        item
        lg={6}
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: 300 }}>
          <img src={homepageImage} alt="homepage" />
        </div>
      </Grid>
    </Grid>
  );
};
