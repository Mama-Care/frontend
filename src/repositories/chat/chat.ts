import { getInstance } from "@src/services/instance";

export const ChatApi = {
  createQuestion: async (question: string) => {
    const instance = getInstance();
    const data = await instance.post('http://localhost:3000/ask/sendQuestion', { question });

    return data;
  },
}