import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useStyles } from "./styles";

import backgroundImage from "../../assets/images/background-image.png";
import logoImage from "../../assets/images/logo-image.png";
// import homepageImage from "../../assets/images/homepage-image.png";
// import homepageTitleImage from "../../assets/images/homepage-title-image.png";

const drawerWidth = 240;
// const navItems = [{ title: "Sobre" }, { title: "Ajuda" }];

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div
        style={{
          // width: 130,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onClick={() => navigate("/clients")}
      >
        <img
          src={logoImage}
          alt="logo"
          style={{
            width: "92%",
          }}
        />
      </div>
      <Divider />
      <List>
        <ListItem disablePadding onClick={() => navigate("/")}>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {/* {navItems.map((item) => (
          <ListItem
            key={item.title}
            disablePadding
            onClick={() => alert("Funcionalidade em implementação")}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <ListItem disablePadding onClick={() => navigate("/login")}>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AppBar component="nav" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Conect@ SUSA
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#14532D" }} onClick={() => navigate("/")}>
              Home
            </Button>
            {/* {navItems.map((item) => (
              <Button
                key={item.title}
                sx={{ color: "#14532D" }}
                onClick={() => alert("Funcionalidade em implementação")}
              >
                {item.title}
              </Button>
            ))} */}
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/login")}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {children}
    </div>
  );
};
