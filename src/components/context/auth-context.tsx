import { createContext, ReactNode, useState, useCallback } from "react";
import {
  login as logIn,
  user,
  register as registration,
} from "../../services/services";
export const AuthContext = createContext({
  isLoggedIn: false,
  login: (data: {
    email: string;
    password: string;
  }): { user: user | null; ok: boolean } => {
    return { user: null, ok: false };
  },
  logout: () => {},
  userData: null as null | user,
  register: (data: FormData) => {},
});

type Props = {
  children?: ReactNode;
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<null | user>(null);

  const register = (data: FormData) => {
    const newUser: user = {
      id: Math.random().toString(),
      name: data.get("name") as string,
      email: data.get("email") as string,
      image: data.get("image") as string,
      lastName: data.get("lastName") as string,
      password: data.get("password") as string,
      phone: data.get("phone") as string,
      passwordRepeat: data.get("passwordRepeat") as string,
    };

    registration(newUser);
    setIsLoggedIn(true);
    setUserData(newUser);
  };

  const login = useCallback((data: { email: string; password: string }) => {
    const loggedUser = logIn(data);

    if (!loggedUser.ok) {
      return { user: null, ok: false };
    }

    setUserData(loggedUser.loggedUser);
    setIsLoggedIn(true);

    return { user: loggedUser.loggedUser, ok: true };
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserData(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, userData, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
