import { createContext, useState, ReactNode } from "react";

interface BotContextType {
  mood: string;
  importantFacts: string[];
  datetime: string;
  bondLevel: string;
  quirkVariation: string;
}

interface BotContextProviderProps {
  children: ReactNode;
}

export const BotContext = createContext<BotContextType>({
  mood: "",
  importantFacts: [],
  datetime: "",
  bondLevel: "",
  quirkVariation: "",
});

function BotContextProvider({ children }: BotContextProviderProps) {
  const [mood, setMood] = useState("");
  const [importantFacts, setImportantFacts] = useState([]);
  const [datetime, setDatetime] = useState("");
  const [bondLevel, setBondLevel] = useState("");
  const [quirkVariation, setQuirkVariation] = useState("");

  const value: BotContextType = {
    mood,
    importantFacts,
    datetime,
    bondLevel,
    quirkVariation,
  };

  return <BotContext.Provider value={value}>{children}</BotContext.Provider>;
}

export default BotContextProvider;
