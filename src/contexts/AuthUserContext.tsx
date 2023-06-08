import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useEffect,
} from "react";

type Props = {
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

const AuthUserContextProvider = ({ children }: Props) => {
  const [isSigned, setIsSigned] = useState<boolean>(false);

  useEffect(() => {
    const loadStorageData = () => {
      const storageIsAuthenticated = localStorage.getItem("signed");
      if (storageIsAuthenticated) {
        setIsSigned(JSON.parse(storageIsAuthenticated));
      }
    };

    loadStorageData();
  }, []);

  return (
    <AuthUserContext.Provider value={{ isSigned, setIsSigned }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export { AuthUserContext, AuthUserContextProvider };
