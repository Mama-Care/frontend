import { auth } from "@src/config/firebase";
import { ISignup } from "@src/types/components/pages/signup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthApi = {
  login: async (email: string, password: string) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data.user;
  },
  register: async (data: ISignup) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = response.user;

      if (user) {
        await updateProfile(user, { displayName: data.username });
      }

      return user;
    } catch (error) {
      throw new Error("Erro ao cadastrar-se.");
    }
  }
}