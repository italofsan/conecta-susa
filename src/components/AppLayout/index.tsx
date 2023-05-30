import { ReactNode, useContext } from "react";

import {
  AppBar,
  Divider,
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
  HomeOutlined as HomeOutlinedIcon,
  PetsOutlined as PetsOutlinedIcon,
  FactCheckOutlined as FactCheckOutlinedIcon,
  TrendingUpOutlined as TrendingUpOutlinedIcon,
  ShoppingBagOutlined as ShoppingBagOutlinedIcon,
  StickyNote2Outlined as StickyNote2OutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  MedicalServicesOutlined as MedicalServicesOutlinedIcon,
  ExitToAppOutlined as ExitIcon,
} from "@mui/icons-material";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useStyles } from "./styles";

interface AppLayoutProps {
  children: ReactNode;
}

const menuList = [
  {
    itemTitle: "Início",
    itemLocation: "/home",
    icon: (
      <HomeOutlinedIcon
        fontSize="small"
        style={{
          marginRight: 12,
        }}
      />
    ),
  },
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

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { classes } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  // const { setIsSigned } = useContext(AuthUserContext);

  const drawer = (
    <div>
      <Toolbar style={{ backgroundColor: "#FFF" }}>
        <Typography variant="h6" noWrap style={{ color: "black" }}>
          Conect@ SUSA
        </Typography>
        <ExitIcon
          onClick={() => {
            localStorage.setItem("signed", JSON.stringify(false));
            navigate("/");
            window.location.reload();
          }}
        />
      </Toolbar>
      <List style={{ padding: 0 }}>
        {menuList.map((item) => (
          <ListItem
            key={item.itemTitle}
            to={item.itemLocation}
            component={Link}
            selected={location.pathname.includes(item.itemLocation)}
            style={{
              color: location.pathname.includes(item.itemLocation)
                ? "#63BFE7"
                : "#4F4F4F",
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Logo
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography style={{ color: "#1C1C1C", marginRight: 12 }}>
              Olá, Lorem Ipsum
            </Typography>
            <Tooltip title="Sair">
              <IconButton
                aria-label="sair"
                onClick={() => {
                  localStorage.setItem("signed", JSON.stringify(false));
                  // setIsSigned(false);
                  // navigate("/");
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
