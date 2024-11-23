import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { ChatApi } from "@src/repositories/chat/chat";
import { IChatContextType } from "@src/types/context/chat-context";

export const ChatContext = createContext<IChatContextType>({} as IChatContextType);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questionValue, setQuestionValue] = useState<string>('');

  const createQuestion = async (question: string, callback: {}) => {
    try {
      const response = await ChatApi.createQuestion(question);

      if (callback && typeof callback === 'function') {
        callback(response?.data?.answer);
      }

      return response;
    } catch (error: unknown) {
      toast.error('Erro ao enviar a mensagem. Tente novamente.');
    }
  };


  return (
    <ChatContext.Provider value={{ 
      createQuestion,
      questionValue,
      setQuestionValue
    }}>
      {children}
    </ChatContext.Provider>
  );
};
