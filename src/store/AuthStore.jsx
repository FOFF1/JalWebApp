import { createContext, useContext } from "react";

export const AuthContext = createContext(true);

export const useAuthStore = () => {
  return useContext(AuthContext);
};
