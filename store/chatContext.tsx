import { createContext, useReducer, ReactNode } from "react";
import { messageData } from "../helpers/dummyData";
import Message from "../models/message";

interface ChatContextType {
  messageHistory: Message[];
  addMessage: (message: string, isPlayer: boolean) => void;
  clearChatHistory: () => void;
}

interface ChatContextProviderProps {
  children: ReactNode;
}

type ChatAction = { type: "ADD"; payload: Message } | { type: "CLEAR" };

export const ChatContext = createContext<ChatContextType>({
  messageHistory: [],
  addMessage: (message: string, isPlayer: boolean) => {},
  clearChatHistory: () => {},
});

function ChatContextProvider({ children }: ChatContextProviderProps) {
  const [messageHistoryState, dispatch] = useReducer(chatReducer, [
    ...messageData,
  ]);

  function addMessage(message: string, isPlayer: boolean) {
    dispatch({
      type: "ADD",
      payload: new Message(Math.random(), message, isPlayer),
    });
  }

  function clearMessageHistory() {
    dispatch({ type: "CLEAR" });
  }

  const value: ChatContextType = {
    messageHistory: messageHistoryState,
    addMessage: addMessage,
    clearChatHistory: clearMessageHistory,
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
