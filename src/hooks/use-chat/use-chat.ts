
import { ChatContext } from "@src/contexts/chat/chat";
import { IChatContextType } from "@src/types/context/chat-context";
import { useContext } from "react";

export const useChat = (): IChatContextType => {
  return useContext(ChatContext);
};