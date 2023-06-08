import { CssBaseline } from "@mui/material";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthUserContextProvider } from "./contexts/AuthUserContext";

import { Routes } from "./routes";

export const App = () => {
  return (
    <AuthUserContextProvider>
      <CssBaseline />
      <Routes />
      <ToastContainer limit={3} transition={Slide} />
    </AuthUserContextProvider>
  );
};
