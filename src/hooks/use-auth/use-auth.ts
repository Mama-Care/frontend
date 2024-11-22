
import { AuthContext } from "@src/contexts/auth/auth";
import { IAuthContextType } from "@src/types/context/auth-context";
import { useContext } from "react";

export const useAuth = (): IAuthContextType => {
  return useContext(AuthContext);
};