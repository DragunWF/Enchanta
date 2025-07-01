import { createContext, useState, useReducer } from "react";

export const ChatContext = createContext({
  chatHistory: [],
  addChat: (message, isPlayer) => {},
  clearChatHistory: () => {},
});

function ChatContextProvider({ children }) {
  const [chatState, dispatch] = useReducer(chatReducer, []);

  function addChat(message, isPlayer) {}

  function clearChatHistory() {}

  const value = {
    chatHistory: chatHistory,
    addChat: addChat,
    clearChatHistory: clearChatHistory,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

function chatReducer() {}

export default ChatContextProvider;
