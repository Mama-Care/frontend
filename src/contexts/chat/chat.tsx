import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { ChatApi } from "@src/repositories/chat/chat";
import { IChatContextType } from "@src/types/context/chat-context";

export const ChatContext = createContext<IChatContextType>({} as IChatContextType);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questionValue, setQuestionValue] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const createQuestion = async (id: string, question: string, callback: {}) => {
    setIsLoading(true);
    try {
      const response = await ChatApi.createQuestion(id, question);

      if (callback && typeof callback === 'function') {
        callback(response?.data?.answer);
      }

      return response;
    } catch (error: unknown) {
      toast.error('Erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const getHistoryChat = async (id: string, callback: {}) => {
    try {
      const response = await ChatApi.getHistory(id);

      if (callback && typeof callback === 'function') {
        callback(response?.data?.conteudo || []);
      }

      return response.data;
    } catch (error: unknown) {
      toast.error('Erro ao carregar histórico do chat. Tente novamente.');
    }
  }

  return (
    <ChatContext.Provider value={{ 
      createQuestion,
      getHistoryChat,
      questionValue,
      setQuestionValue,
      isLoading
    }}>
      {children}
    </ChatContext.Provider>
  );
};
