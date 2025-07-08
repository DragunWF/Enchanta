import { createContext, useReducer, ReactNode, useState } from "react";
import Message from "../models/message";
import { generateLatestId } from "../helpers/tools/utils";

export interface ChatContextType {
  messageHistory: Message[];
  isImageVisible: boolean;
  addMessage: (message: string, isPlayer: boolean) => void;
  clearChatHistory: () => void;
  toggleBotImageVisibility: () => void;
}

type ChatAction = { type: "ADD"; payload: Message } | { type: "CLEAR" };

export const ChatContext = createContext<ChatContextType>(
  {} as ChatContextType
);

interface ChatContextProviderProps {
  children: ReactNode;
}

function ChatContextProvider({ children }: ChatContextProviderProps) {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [messageHistoryState, dispatch] = useReducer(chatReducer, []);

  function addMessage(message: string, isPlayer: boolean) {
    const latestId = generateLatestId(messageHistoryState);
    dispatch({
      type: "ADD",
      payload: new Message(latestId, message, isPlayer),
    });
  }

  function clearMessageHistory() {
    dispatch({ type: "CLEAR" });
  }

  function toggleBotImageVisibility() {
    setIsImageVisible((current) => !current);
  }

  const value: ChatContextType = {
    messageHistory: messageHistoryState,
    isImageVisible,
    addMessage: addMessage,
    clearChatHistory: clearMessageHistory,
    toggleBotImageVisibility,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

function chatReducer(state: Message[], action: ChatAction): Message[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export default ChatContextProvider;
