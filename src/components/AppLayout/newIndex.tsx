import { useState, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Tooltip,
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  GroupOutlined as UsersIcon,
  ExitToAppOutlined as ExitIcon,
  HomeOutlined as HomeOutlinedIcon,
  PetsOutlined as PetsOutlinedIcon,
  FactCheckOutlined as FactCheckOutlinedIcon,
  TrendingUpOutlined as TrendingUpOutlinedIcon,
  ShoppingBagOutlined as ShoppingBagOutlinedIcon,
  StickyNote2Outlined as StickyNote2OutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  MedicalServicesOutlined as MedicalServicesOutlinedIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

import logoImage from "../../assets/images/logo-image.png";

import { useStyles } from "./styles";

type ResponsiveDrawerProps = {
  children: ReactNode;
};

const drawerWidth = 240;

const menuList = [
  //   {
  //     itemTitle: "Início",
  //     itemLocation: "/home",
  //     icon: (
  //       <HomeOutlinedIcon
  //         fontSize="small"
  //         style={{
  //           marginRight: 12,
  //         }}
  //       />
  //     ),
  //   },
  {
    itemTitle: "Clientes",
    itemLocation: "/clients",
    icon: (
      <UsersIcon
        fontSize="small"
        style={{
          marginRight: 12,
        }}
      />
    ),
  },

  {
    itemTitle: "Animais",
    itemLocation: "/animals",
    icon: (
      <PetsOutlinedIcon
        fontSize="small"
        style={{
          marginRight: 12,
        }}
      />
    ),
  },

  {
    itemTitle: "Cadastros",
    itemLocation: "/registers",
    icon: (
      <FactCheckOutlinedIcon
        fontSize="small"
        style={{
          marginRight: 12,
        }}
      />
    ),
  },
  {
    itemTitle: "Financeiro",
    itemLocation: "/financial",
    icon: (
      <TrendingUpOutlinedIcon
        fontSize="small"
        style={{
          marginRight: 12,
        }}
      />
    ),
  },

  {
    itemTitle: "Produtos/Serviços",
    itemLocation: "/products-and-services",
    icon: (
      <MedicalServicesOutlinedIcon
        fontSize="small"
        style={{
          marginRight: 12,
        }}
      />
    ),
  },
  {
    itemTitle: "Compras",
    itemLocation: "/shop",
    icon: (
      <ShoppingBagOutlinedIcon
        fontSize="small"
        style={{
          marginRight: 12,
        }}
      />
    ),
  },
  {
    itemTitle: "Relatórios",
    itemLocation: "/reports",
    icon: (
      <StickyNote2OutlinedIcon
        fontSize="small"
        style={{
          marginRight: 12,
        }}
      />
    ),
  },
  {
    itemTitle: "Perfil do Usuário",
    itemLocation: "/profile",
    icon: (
      <AccountCircleOutlinedIcon
        fontSize="small"
        style={{
          marginRight: 12,
        }}
      />
    ),
  },
];

export const ResponsiveDrawer = ({ children }: ResponsiveDrawerProps) => {
  const { classes } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar style={{ backgroundColor: "#FFF" }}>
        <div
          style={{
            // width: 130,
            height: 60,
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
      </Toolbar>
      <List style={{ padding: 0 }}>
        {menuList.map((item) => (
          <ListItem
            key={item.itemTitle}
            to={item.itemLocation}
            component={Link}
            // selected={location.pathname.includes(item.itemLocation)}
            style={{
              color: location.pathname.includes(item.itemLocation)
                ? "#14532D"
                : "#4F4F4F",
              backgroundColor: location.pathname.includes(item.itemLocation)
                ? "#86EFAC"
                : "#FFF",
            }}
          >
            {item.icon}

            <ListItemText>
              <Typography
                style={{
                  fontWeight: 500,
                }}
              >
                {item.itemTitle}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ color: "#FFF", fontWeight: 700, marginRight: 12 }}
            >
              Olá, Administrador
            </Typography>
            <Tooltip title="Sair">
              <IconButton
                aria-label="sair"
                onClick={() => {
                  localStorage.setItem("signed", JSON.stringify(false));
                  window.location.reload();
                }}
              >
                <ExitIcon style={{ color: "#FFF" }} />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};
