import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Tooltip,
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

import { useStyles } from "./styles";

import logoImage from "../../assets/images/logo-image.png";
import { Sidebar } from "./Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

const menuList = [
  // {
  //   itemTitle: "Início",
  //   itemLocation: "/home",
  //   icon: (
  //     <HomeOutlinedIcon
  //       fontSize="small"
  //       style={{
  //         marginRight: 12,
  //       }}
  //     />
  //   ),
  // },
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

const drawerWidth = 240;

export const AppLayout = ({ children }: AppLayoutProps) => {
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
        {/* <Typography variant="h6" noWrap style={{ color: "black" }}>
          Conect@ SUSA
        </Typography>
        <ExitIcon onClick={() => localStorage.clear()} /> */}
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
      {/* <Sidebar /> */}
      <AppBar
        position="fixed"
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }}
        className={classes.appBar}
      >
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{ width: 130, cursor: "pointer" }}
            onClick={() => navigate("/clients")}
          >
            <img src={logoImage} alt="logo" style={{ width: "100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography style={{ color: "#1C1C1C", marginRight: 12 }}>
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
                <ExitIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </nav>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};
