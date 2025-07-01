import { createContext, useReducer } from "react";
import { messageData } from "../helpers/dummyData";
import Message from "../models/message";

export const ChatContext = createContext({
  messageHistory: [],
  addMessage: (message, isPlayer) => {},
  clearChatHistory: () => {},
});

function ChatContextProvider({ children }) {
  const [messageHistoryState, dispatch] = useReducer(chatReducer, [
    ...messageData,
  ]);

  function addMessage(message, isPlayer) {
    dispatch({
      type: "ADD",
      payload: new Message(Math.random(), message, isPlayer),
    });
  }

  function clearMessageHistory() {
    dispatch({ type: "CLEAR" });
  }

  const value = {
    messageHistory: messageHistoryState,
    addMessage: addMessage,
    clearChatHistory: clearMessageHistory,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

function chatReducer(state, action) {
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
