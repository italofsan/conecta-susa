import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useEffect,
} from "react";

type AuthUserContextProviderProps = {
  children: ReactNode;
};

type PropsAuthUserContext = {
  isSigned: boolean;
  setIsSigned: Dispatch<SetStateAction<boolean>>;
};

const initialState = {
  isSigned: true,
  setIsSigned: () => {},
};

const AuthUserContext = createContext<PropsAuthUserContext>(initialState);

const AuthUserContextProvider = ({
  children,
}: AuthUserContextProviderProps) => {
  const loadStorage = () => {
    const storageIsAuthenticated = localStorage.getItem("signed");
    if (storageIsAuthenticated) {
      return Boolean(JSON.parse(storageIsAuthenticated));
    }
    return false;
  };
  const [isSigned, setIsSigned] = useState<boolean>(loadStorage());

  // useEffect(() => {

  // }, []);

  return (
    <AuthUserContext.Provider value={{ isSigned, setIsSigned }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export { AuthUserContext, AuthUserContextProvider };
