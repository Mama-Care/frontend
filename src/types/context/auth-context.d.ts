import { IUser } from "@src/components/pages/signin";

export interface IAuthContextType {
  isAuthenticated: boolean;
  token: string | null; 
  login: (data: IUser, callback?) => Promise;
  logout: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}