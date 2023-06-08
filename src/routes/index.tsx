import { useContext } from "react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AuthUserContext } from "../contexts/AuthUserContext";

type PrivateProps = {
  element: JSX.Element;
};

const Private = ({ element }: PrivateProps) => {
  const { isSigned } = useContext(AuthUserContext);
  const storageIsAuthenticated = localStorage.getItem("signed");
  let signed = false;
  if (storageIsAuthenticated) {
    signed = JSON.parse(storageIsAuthenticated);
  }

  console.log(isSigned);

  return isSigned ? element : <AuthRoutes />;
};

export const Routes = () => {
  const { isSigned } = useContext(AuthUserContext);
  // return <Private element={<AppRoutes />} />;
  return isSigned ? <AppRoutes /> : <AuthRoutes />;
};
