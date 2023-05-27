import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

type PrivateProps = {
  element: JSX.Element;
};

const Private = ({ element }: PrivateProps) => {
  const storageIsAuthenticated = localStorage.getItem("signed");
  let signed = false;
  if (storageIsAuthenticated) {
    signed = JSON.parse(storageIsAuthenticated);
  }

  return signed ? element : <AuthRoutes />;
};

export const Routes = () => {
  return <Private element={<AppRoutes />} />;
};
