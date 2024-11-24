import { getInstance } from "@src/services/instance";

export const ChatApi = {
  createQuestion: async (id: string, question: string) => {
    const instance = getInstance();
    const data = await instance.post(`http://localhost:3000/ask/sendQuestion/${id}`, { question });

    return data;
  },
  getHistory: async (id: string) => {
    const instance = getInstance();
    const data = await instance.get(`http://localhost:3000/ask/user/${id}`);

    return data;
  }
}