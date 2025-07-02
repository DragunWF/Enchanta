import { createContext, useReducer, ReactNode } from "react";

interface BotContextType {
  
}

interface BotContextProviderProps {
  children: ReactNode;
}

export const BotContext = createContext<BotContextType>({});

function BotContextProvider({ children }: BotContextProviderProps) {
  const value: BotContextType = {};

  return <BotContext.Provider value={value}>{children}</BotContext.Provider>;
}

export default BotContextProvider;
