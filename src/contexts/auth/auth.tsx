import { IAuthContextType } from "@src/types/context/auth-context";
import React, { createContext, useEffect, useState } from "react";
import * as StorageService from '@src/services/storage';
import { AuthApi } from "@src/repositories/auth/auth";
import { IUser } from "@src/types/components/pages/signin";
import { setAuthorizationHeader } from "@src/services/instance";
import { AxiosError } from "axios";
import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";

export const AuthContext = createContext<IAuthContextType>({} as IAuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (data: IUser, callback: {}) => {
    try {
      const response = await AuthApi.login(data.email, data.password);
      const userToken = await response.getIdToken();

      setAuthorizationHeader(userToken);
      setToken(userToken);

      if (callback && typeof callback === 'function') {
        callback();
      }

      return response;
    } catch (error: unknown) {
      toast.error('Credenciais inválidas');
    }
  };

  useEffect(() => {
    if (StorageService.getItem('session-token').accessToken) {
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, []);

  const logout = () => {
    setToken('');
    StorageService.removeItem('session-token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      token, 
      login, 
      logout,
      loading,
      setLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};
